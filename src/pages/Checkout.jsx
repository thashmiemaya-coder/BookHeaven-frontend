import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { CreditCard, Truck, Tag, Lock } from 'lucide-react';
import toast from 'react-hot-toast';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Seo from '../components/ui/Seo';
import {
  selectCartItems, selectCartSubtotal, clearCart, applyCouponState,
} from '../features/cart/cartSlice';
import { selectUser } from '../features/auth/authSlice';
import {
  useApplyCouponMutation, useCreateOrderMutation,
  useCreatePaymentIntentMutation, useConfirmPaymentMutation,
} from '../features/api/apiSlice';

const stripePromise = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
  ? loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)
  : null;

const SHIPPING_FLAT = 5;
const FREE_SHIPPING_THRESHOLD = 50;

export default function Checkout() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutInner />
    </Elements>
  );
}

function CheckoutInner() {
  const items = useSelector(selectCartItems);
  const subtotal = useSelector(selectCartSubtotal);
  const coupon = useSelector((s) => s.cart.coupon);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: { name: user?.name || '' },
  });
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [couponCode, setCouponCode] = useState('');
  const [processing, setProcessing] = useState(false);

  const [applyCoupon, { isLoading: applying }] = useApplyCouponMutation();
  const [createOrder] = useCreateOrderMutation();
  const [createPaymentIntent] = useCreatePaymentIntentMutation();
  const [confirmPayment] = useConfirmPaymentMutation();

  const discount = coupon?.discount || 0;
  const discounted = Math.max(subtotal - discount, 0);
  const shipping = discounted > FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : SHIPPING_FLAT;
  const tax = discounted * 0.05;
  const total = discounted + shipping + tax;

  if (!items.length) {
    return (
      <section className="container-x py-20 text-center">
        <p className="text-plum-500 dark:text-plum-400">Your cart is empty.</p>
        <Link to="/books" className="btn-primary mt-6 inline-flex">Browse Books</Link>
      </section>
    );
  }

  const handleApplyCoupon = async () => {
    if (!couponCode.trim()) return;
    try {
      const res = await applyCoupon({ code: couponCode.trim(), subtotal }).unwrap();
      dispatch(applyCouponState({ code: couponCode.trim().toUpperCase(), discount: res.discount }));
      toast.success(`Coupon applied — you saved $${res.discount.toFixed(2)}`);
    } catch (err) {
      toast.error(err?.data?.message || 'Invalid coupon');
    }
  };

  const placeOrder = async (form) => {
    setProcessing(true);
    const orderPayload = {
      orderItems: items.map((i) => ({ book: i._id, quantity: i.quantity })),
      shippingAddress: {
        fullName: form.name,
        address: form.address,
        city: form.city,
        postalCode: form.postalCode,
        country: form.country,
        phone: form.phone,
      },
      paymentMethod,
      couponCode: coupon?.code || undefined,
    };

    try {
      if (paymentMethod === 'stripe') {
        if (!stripe || !elements) { toast.error('Payment not ready'); setProcessing(false); return; }
        // 1. Create the order first (unpaid). The server computes all totals.
        const order = await createOrder(orderPayload).unwrap();
        const orderId = order.order._id;
        // 2. Create a payment intent for that order (amount derived server-side).
        const intent = await createPaymentIntent({ orderId }).unwrap();
        // 3. Confirm the card payment with Stripe.
        const result = await stripe.confirmCardPayment(intent.clientSecret, {
          payment_method: { card: elements.getElement(CardElement) },
        });
        if (result.error) { toast.error(result.error.message); setProcessing(false); return; }
        // 4. Confirm server-side as a fallback to the webhook (marks order paid/confirmed).
        await confirmPayment({ orderId, paymentIntentId: result.paymentIntent.id }).unwrap().catch(() => {});
        finish(orderId);
      } else {
        const order = await createOrder(orderPayload).unwrap();
        finish(order.order._id);
      }
    } catch (err) {
      toast.error(err?.data?.message || 'Failed to place order');
      setProcessing(false);
    }
  };

  const finish = (orderId) => {
    dispatch(clearCart());
    toast.success('Order placed successfully!');
    navigate(`/orders/${orderId}`, { replace: true });
  };

  return (
    <>
      <Seo title="Checkout" />
      <section className="container-x py-10">
        <h1 className="section-title mb-8">Checkout</h1>

        <form onSubmit={handleSubmit(placeOrder)} className="grid lg:grid-cols-[1fr_380px] gap-8">
          <div className="space-y-6">
            {/* Shipping */}
            <div className="card p-6">
              <h2 className="font-semibold text-lg text-plum-900 dark:text-plum-100 mb-4 flex items-center gap-2">
                <Truck size={20} /> Shipping Address
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Full Name" error={errors.name} {...register('name', { required: 'Required' })} />
                <Field label="Phone" error={errors.phone} {...register('phone', { required: 'Required' })} />
                <div className="sm:col-span-2">
                  <Field label="Address" error={errors.address} {...register('address', { required: 'Required' })} />
                </div>
                <Field label="City" error={errors.city} {...register('city', { required: 'Required' })} />
                <Field label="Postal Code" error={errors.postalCode} {...register('postalCode', { required: 'Required' })} />
                <div className="sm:col-span-2">
                  <Field label="Country" error={errors.country} {...register('country', { required: 'Required' })} />
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="card p-6">
              <h2 className="font-semibold text-lg text-plum-900 dark:text-plum-100 mb-4 flex items-center gap-2">
                <CreditCard size={20} /> Payment Method
              </h2>
              <div className="space-y-3">
                <PayOption active={paymentMethod === 'cod'} onClick={() => setPaymentMethod('cod')}
                  icon={<Truck size={18} />} title="Cash on Delivery" text="Pay when your order arrives" />
                <PayOption active={paymentMethod === 'stripe'} onClick={() => setPaymentMethod('stripe')}
                  icon={<CreditCard size={18} />} title="Credit / Debit Card" text="Secure payment via Stripe" />
              </div>

              {paymentMethod === 'stripe' && (
                <div className="mt-4 rounded-xl border border-plum-200 dark:border-plum-700 p-4">
                  {stripePromise ? (
                    <CardElement options={{ style: { base: { fontSize: '16px', color: '#4a044e' } } }} />
                  ) : (
                    <p className="text-sm text-plum-400">Set VITE_STRIPE_PUBLISHABLE_KEY to enable card payments.</p>
                  )}
                  <p className="text-xs text-plum-400 mt-3 flex items-center gap-1">
                    <Lock size={12} /> Test card: 4242 4242 4242 4242 — any future date & CVC
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Summary */}
          <div className="card p-6 h-fit lg:sticky lg:top-24">
            <h2 className="font-semibold text-lg text-plum-900 dark:text-plum-100 mb-4">Your Order</h2>
            <div className="space-y-3 max-h-52 overflow-auto mb-4">
              {items.map((i) => {
                const p = i.discountPrice > 0 ? i.discountPrice : i.price;
                return (
                  <div key={i._id} className="flex justify-between text-sm">
                    <span className="text-plum-600 dark:text-plum-300 line-clamp-1 pr-2">{i.title} × {i.quantity}</span>
                    <span className="font-medium text-plum-800 dark:text-plum-200 shrink-0">${(p * i.quantity).toFixed(2)}</span>
                  </div>
                );
              })}
            </div>

            {/* Coupon */}
            <div className="flex gap-2 mb-4">
              <div className="relative flex-1">
                <Tag size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-plum-400" />
                <input value={couponCode} onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Coupon code" className="input pl-9" />
              </div>
              <button type="button" onClick={handleApplyCoupon} disabled={applying} className="btn-ghost shrink-0">
                {applying ? '...' : 'Apply'}
              </button>
            </div>

            <div className="space-y-2 text-sm border-t border-plum-100 dark:border-plum-800 pt-4">
              <Row label="Subtotal" value={`$${subtotal.toFixed(2)}`} />
              {discount > 0 && <Row label={`Discount (${coupon.code})`} value={`-$${discount.toFixed(2)}`} accent />}
              <Row label="Shipping" value={shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`} />
              <Row label="Tax" value={`$${tax.toFixed(2)}`} />
              <div className="border-t border-plum-100 dark:border-plum-800 pt-2 flex justify-between font-bold text-plum-900 dark:text-plum-100">
                <span>Total</span><span>${total.toFixed(2)}</span>
              </div>
            </div>

            <button disabled={processing} className="btn-primary w-full mt-6">
              {processing ? 'Processing...' : <>Place Order <Lock size={16} /></>}
            </button>
            <p className="text-xs text-plum-400 text-center mt-3">Totals are re-verified securely on the server.</p>
          </div>
        </form>
      </section>
    </>
  );
}

import { forwardRef } from 'react';
const Field = forwardRef(({ label, error, ...props }, ref) => (
  <div>
    <label className="block text-sm font-medium text-plum-700 dark:text-plum-300 mb-1.5">{label}</label>
    <input ref={ref} className="input" {...props} />
    {error && <p className="text-xs text-red-500 mt-1">{error.message}</p>}
  </div>
));
Field.displayName = 'Field';

const PayOption = ({ active, onClick, icon, title, text }) => (
  <button type="button" onClick={onClick}
    className={`w-full flex items-center gap-3 rounded-xl border-2 p-4 text-left transition ${
      active ? 'border-plum-700 bg-plum-50 dark:bg-plum-900/40' : 'border-plum-200 dark:border-plum-700'
    }`}>
    <span className="grid h-10 w-10 place-items-center rounded-full bg-plum-100 dark:bg-plum-800 text-plum-700 dark:text-blush-400">{icon}</span>
    <div>
      <div className="font-medium text-plum-900 dark:text-plum-100">{title}</div>
      <div className="text-xs text-plum-500 dark:text-plum-400">{text}</div>
    </div>
  </button>
);

const Row = ({ label, value, accent }) => (
  <div className="flex justify-between">
    <span className="text-plum-600 dark:text-plum-300">{label}</span>
    <span className={accent ? 'text-blush-500 font-medium' : 'text-plum-800 dark:text-plum-200'}>{value}</span>
  </div>
);
