import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, Circle, ChevronLeft, XCircle, MapPin } from 'lucide-react';
import toast from 'react-hot-toast';
import Seo from '../components/ui/Seo';
import Loader from '../components/ui/Loader';
import LazyImage from '../components/ui/LazyImage';
import { useGetOrderQuery, useCancelOrderMutation } from '../features/api/apiSlice';

const FLOW = ['Processing', 'Confirmed', 'Shipped', 'Out for Delivery', 'Delivered'];

export default function OrderDetails() {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetOrderQuery(id);
  const [cancelOrder, { isLoading: cancelling }] = useCancelOrderMutation();

  if (isLoading) return <Loader full />;
  if (isError || !data?.order) return (
    <div className="container-x py-20 text-center text-plum-500">
      Order not found. <Link to="/orders" className="text-plum-700 hover:underline">Back to orders</Link>
    </div>
  );

  const o = data.order;
  const cancelled = o.orderStatus === 'Cancelled';
  const currentIdx = FLOW.indexOf(o.orderStatus);
  const canCancel = ['Processing', 'Confirmed'].includes(o.orderStatus);

  const handleCancel = async () => {
    try {
      await cancelOrder(o._id).unwrap();
      toast.success('Order cancelled');
    } catch (err) {
      toast.error(err?.data?.message || 'Could not cancel order');
    }
  };

  return (
    <>
      <Seo title={`Order #${o._id.slice(-8).toUpperCase()}`} />
      <section className="container-x py-10">
        <Link to="/orders" className="inline-flex items-center gap-1 text-sm text-plum-500 hover:text-plum-700 mb-6">
          <ChevronLeft size={16} /> Back to orders
        </Link>

        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="font-display text-2xl md:text-3xl font-semibold text-plum-950 dark:text-plum-100">
              Order #{o._id.slice(-8).toUpperCase()}
            </h1>
            <p className="text-sm text-plum-400 mt-1">Placed on {new Date(o.createdAt).toLocaleString()}</p>
          </div>
          {canCancel && (
            <button onClick={handleCancel} disabled={cancelling}
              className="btn-ghost text-red-500 border border-red-200 hover:bg-red-50">
              <XCircle size={18} /> Cancel Order
            </button>
          )}
        </div>

        <div className="grid lg:grid-cols-[1fr_360px] gap-8">
          <div className="space-y-6">
            {/* Tracking */}
            <div className="card p-6">
              <h2 className="font-semibold text-lg text-plum-900 dark:text-plum-100 mb-6">Order Tracking</h2>
              {cancelled ? (
                <div className="flex items-center gap-3 text-red-500">
                  <XCircle size={24} /> <span className="font-medium">This order was cancelled.</span>
                </div>
              ) : (
                <ol className="relative">
                  {FLOW.map((step, i) => {
                    const done = i <= currentIdx;
                    return (
                      <li key={step} className="flex gap-4 pb-6 last:pb-0">
                        <div className="flex flex-col items-center">
                          {done ? <CheckCircle2 className="text-plum-700 dark:text-blush-400" size={24} />
                                : <Circle className="text-plum-200 dark:text-plum-700" size={24} />}
                          {i < FLOW.length - 1 && (
                            <span className={`w-0.5 flex-1 mt-1 ${i < currentIdx ? 'bg-plum-700 dark:bg-blush-400' : 'bg-plum-100 dark:bg-plum-800'}`} />
                          )}
                        </div>
                        <div className="pb-2">
                          <p className={`font-medium ${done ? 'text-plum-900 dark:text-plum-100' : 'text-plum-400'}`}>{step}</p>
                          {step === o.orderStatus && <p className="text-xs text-plum-400">Current status</p>}
                        </div>
                      </li>
                    );
                  })}
                </ol>
              )}
            </div>

            {/* Items */}
            <div className="card p-6">
              <h2 className="font-semibold text-lg text-plum-900 dark:text-plum-100 mb-4">Items</h2>
              <div className="space-y-4">
                {o.orderItems.map((it, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="h-20 w-14 shrink-0 rounded-lg overflow-hidden">
                      <LazyImage src={it.image} alt={it.title} className="h-full w-full" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-plum-900 dark:text-plum-100">{it.title}</p>
                      <p className="text-sm text-plum-400">{it.author}</p>
                      <p className="text-sm text-plum-500 mt-1">Qty: {it.quantity} × ${it.price.toFixed(2)}</p>
                    </div>
                    <span className="font-semibold text-plum-800 dark:text-plum-200">${(it.price * it.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="card p-6">
              <h2 className="font-semibold text-plum-900 dark:text-plum-100 mb-4 flex items-center gap-2">
                <MapPin size={18} /> Shipping
              </h2>
              <div className="text-sm text-plum-600 dark:text-plum-300 space-y-0.5">
                <p className="font-medium text-plum-900 dark:text-plum-100">{o.shippingAddress?.fullName}</p>
                <p>{o.shippingAddress?.address}</p>
                <p>{o.shippingAddress?.city}, {o.shippingAddress?.postalCode}</p>
                <p>{o.shippingAddress?.country}</p>
                <p>{o.shippingAddress?.phone}</p>
              </div>
            </div>

            <div className="card p-6">
              <h2 className="font-semibold text-plum-900 dark:text-plum-100 mb-4">Payment Summary</h2>
              <div className="space-y-2 text-sm">
                <Row label="Items" value={`$${o.itemsPrice.toFixed(2)}`} />
                {o.discount > 0 && <Row label="Discount" value={`-$${o.discount.toFixed(2)}`} accent />}
                <Row label="Shipping" value={o.shippingPrice === 0 ? 'Free' : `$${o.shippingPrice.toFixed(2)}`} />
                <Row label="Tax" value={`$${o.taxPrice.toFixed(2)}`} />
                <div className="border-t border-plum-100 dark:border-plum-800 pt-2 flex justify-between font-bold text-plum-900 dark:text-plum-100">
                  <span>Total</span><span>${o.totalPrice.toFixed(2)}</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-plum-100 dark:border-plum-800 text-sm space-y-1">
                <p className="text-plum-500">Method: <span className="font-medium text-plum-800 dark:text-plum-200 uppercase">{o.paymentMethod}</span></p>
                <p className="text-plum-500">Payment: <span className={`font-medium ${o.isPaid ? 'text-green-600' : 'text-amber-600'}`}>{o.isPaid ? 'Paid' : 'Pending'}</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const Row = ({ label, value, accent }) => (
  <div className="flex justify-between">
    <span className="text-plum-600 dark:text-plum-300">{label}</span>
    <span className={accent ? 'text-blush-500 font-medium' : 'text-plum-800 dark:text-plum-200'}>{value}</span>
  </div>
);
