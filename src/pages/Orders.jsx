import { Link } from 'react-router-dom';
import { Package, ChevronRight } from 'lucide-react';
import Seo from '../components/ui/Seo';
import Loader from '../components/ui/Loader';
import { useGetMyOrdersQuery } from '../features/api/apiSlice';

const STATUS_STYLES = {
  Processing: 'bg-amber-100 text-amber-700',
  Confirmed: 'bg-blue-100 text-blue-700',
  Shipped: 'bg-indigo-100 text-indigo-700',
  'Out for Delivery': 'bg-purple-100 text-purple-700',
  Delivered: 'bg-green-100 text-green-700',
  Cancelled: 'bg-red-100 text-red-700',
};

export default function Orders() {
  const { data, isLoading } = useGetMyOrdersQuery();

  return (
    <>
      <Seo title="My Orders" />
      <section className="container-x py-10">
        <h1 className="section-title mb-8">Order History</h1>

        {isLoading ? <Loader full /> : data?.orders?.length ? (
          <div className="space-y-4">
            {data.orders.map((o) => (
              <Link key={o._id} to={`/orders/${o._id}`}
                className="card p-5 flex items-center justify-between gap-4 hover:shadow-soft transition">
                <div className="flex items-center gap-4 min-w-0">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-plum-100 dark:bg-plum-800 text-plum-700 dark:text-blush-400">
                    <Package size={20} />
                  </span>
                  <div className="min-w-0">
                    <p className="font-semibold text-plum-900 dark:text-plum-100">
                      Order #{o._id.slice(-8).toUpperCase()}
                    </p>
                    <p className="text-sm text-plum-400">
                      {new Date(o.createdAt).toLocaleDateString()} · {o.orderItems.length} item{o.orderItems.length > 1 ? 's' : ''}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <div className="text-right">
                    <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${STATUS_STYLES[o.orderStatus] || 'bg-plum-100 text-plum-700'}`}>
                      {o.orderStatus}
                    </span>
                    <p className="font-bold text-plum-800 dark:text-plum-200 mt-1">${o.totalPrice.toFixed(2)}</p>
                  </div>
                  <ChevronRight className="text-plum-300" size={20} />
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Package className="mx-auto text-plum-200" size={96} strokeWidth={1} />
            <h2 className="font-display text-2xl font-semibold text-plum-950 dark:text-plum-100 mt-6">No orders yet</h2>
            <p className="text-plum-500 dark:text-plum-400 mt-2">When you place an order, it will appear here.</p>
            <Link to="/books" className="btn-primary mt-8 inline-flex">Start Shopping</Link>
          </div>
        )}
      </section>
    </>
  );
}
