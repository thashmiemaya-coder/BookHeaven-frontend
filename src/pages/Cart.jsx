import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import Seo from '../components/ui/Seo';
import LazyImage from '../components/ui/LazyImage';
import { updateQty, removeFromCart, selectCartItems, selectCartSubtotal } from '../features/cart/cartSlice';
import { selectUser } from '../features/auth/authSlice';

const SHIPPING_FLAT = 5;
const FREE_SHIPPING_THRESHOLD = 50;

export default function Cart() {
  const items = useSelector(selectCartItems);
  const subtotal = useSelector(selectCartSubtotal);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const shipping = subtotal > FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : SHIPPING_FLAT;
  const tax = subtotal * 0.05;
  const total = subtotal + shipping + tax;

  const goCheckout = () => navigate(user ? '/checkout' : '/login', { state: { from: { pathname: '/checkout' } } });

  if (!items.length) {
    return (
      <>
        <Seo title="Cart" />
        <section className="container-x py-20 text-center">
          <ShoppingBag className="mx-auto text-plum-200" size={96} strokeWidth={1} />
          <h1 className="font-display text-2xl font-semibold text-plum-950 dark:text-plum-100 mt-6">Your cart is empty</h1>
          <p className="text-plum-500 dark:text-plum-400 mt-2">Looks like you haven't added any books yet.</p>
          <Link to="/books" className="btn-primary mt-8 inline-flex">Start Shopping</Link>
        </section>
      </>
    );
  }

  return (
    <>
      <Seo title="Cart" />
      <section className="container-x py-10">
        <h1 className="section-title mb-8">Shopping Cart</h1>

        <div className="grid lg:grid-cols-[1fr_360px] gap-8">
          <div className="space-y-4">
            {items.map((item) => {
              const price = item.discountPrice > 0 ? item.discountPrice : item.price;
              return (
                <div key={item._id} className="card p-4 flex gap-4">
                  <Link to={`/books/${item.slug}`} className="h-28 w-20 shrink-0 rounded-lg overflow-hidden">
                    <LazyImage src={item.coverImage} alt={item.title} className="h-full w-full" />
                  </Link>
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between gap-2">
                      <div>
                        <Link to={`/books/${item.slug}`} className="font-display font-semibold text-plum-950 dark:text-plum-100 hover:text-plum-700 line-clamp-1">
                          {item.title}
                        </Link>
                        <p className="text-sm text-plum-400">{item.author}</p>
                      </div>
                      <button onClick={() => dispatch(removeFromCart(item._id))}
                        className="text-plum-300 hover:text-red-500 transition h-fit"><Trash2 size={18} /></button>
                    </div>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center rounded-lg border border-plum-200 dark:border-plum-700">
                        <button onClick={() => dispatch(updateQty({ _id: item._id, quantity: Math.max(1, item.quantity - 1) }))}
                          className="grid h-9 w-9 place-items-center text-plum-700 dark:text-plum-200"><Minus size={14} /></button>
                        <span className="w-9 text-center text-sm font-medium text-plum-900 dark:text-plum-100">{item.quantity}</span>
                        <button onClick={() => dispatch(updateQty({ _id: item._id, quantity: Math.min(item.stock || 99, item.quantity + 1) }))}
                          className="grid h-9 w-9 place-items-center text-plum-700 dark:text-plum-200"><Plus size={14} /></button>
                      </div>
                      <span className="font-bold text-plum-800 dark:text-plum-200">${(price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Summary */}
          <div className="card p-6 h-fit lg:sticky lg:top-24">
            <h2 className="font-semibold text-lg text-plum-900 dark:text-plum-100 mb-4">Order Summary</h2>
            <div className="space-y-3 text-sm">
              <Row label="Subtotal" value={`$${subtotal.toFixed(2)}`} />
              <Row label="Shipping" value={shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`} />
              <Row label="Estimated Tax" value={`$${tax.toFixed(2)}`} />
              {subtotal < FREE_SHIPPING_THRESHOLD && (
                <p className="text-xs text-plum-400">
                  Add ${(FREE_SHIPPING_THRESHOLD - subtotal).toFixed(2)} more for free shipping.
                </p>
              )}
              <div className="border-t border-plum-100 dark:border-plum-800 pt-3 flex justify-between font-bold text-plum-900 dark:text-plum-100">
                <span>Total</span><span>${total.toFixed(2)}</span>
              </div>
            </div>
            <button onClick={goCheckout} className="btn-primary w-full mt-6">
              Proceed to Checkout <ArrowRight size={18} />
            </button>
            <Link to="/books" className="block text-center text-sm text-plum-500 hover:text-plum-700 mt-4">
              Continue shopping
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

const Row = ({ label, value }) => (
  <div className="flex justify-between text-plum-600 dark:text-plum-300">
    <span>{label}</span><span>{value}</span>
  </div>
);
