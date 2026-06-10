import { Link } from 'react-router-dom';
import { DollarSign, ShoppingCart, BookOpen, Users, AlertTriangle, TrendingUp } from 'lucide-react';
import Seo from '../../components/ui/Seo';
import Loader from '../../components/ui/Loader';
import { useGetStatsQuery } from '../../features/api/apiSlice';

const STATUS_STYLES = {
  Processing: 'bg-amber-100 text-amber-700',
  Confirmed: 'bg-blue-100 text-blue-700',
  Shipped: 'bg-indigo-100 text-indigo-700',
  'Out for Delivery': 'bg-purple-100 text-purple-700',
  Delivered: 'bg-green-100 text-green-700',
  Cancelled: 'bg-red-100 text-red-700',
};

export default function Dashboard() {
  const { data, isLoading } = useGetStatsQuery();

  if (isLoading) return <Loader full />;
  const s = data?.stats || {};

  return (
    <>
      <Seo title="Admin Dashboard" />
      <div>
        <h1 className="font-display text-2xl font-semibold text-plum-950 dark:text-plum-100 mb-6">Dashboard</h1>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
          <StatCard icon={<DollarSign />} label="Total Revenue" value={`$${(s.totalRevenue || 0).toFixed(2)}`} color="bg-green-500" />
          <StatCard icon={<ShoppingCart />} label="Total Orders" value={s.totalOrders || 0} color="bg-blue-500" />
          <StatCard icon={<BookOpen />} label="Total Books" value={s.totalBooks || 0} color="bg-plum-600" />
          <StatCard icon={<Users />} label="Total Users" value={s.totalUsers || 0} color="bg-blush-500" />
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Recent orders */}
          <div className="lg:col-span-2 card p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-plum-900 dark:text-plum-100">Recent Orders</h2>
              <Link to="/admin/orders" className="text-sm text-plum-700 dark:text-blush-400 hover:underline">View all</Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-plum-400 border-b border-plum-100 dark:border-plum-800">
                    <th className="pb-2 font-medium">Order</th>
                    <th className="pb-2 font-medium">Customer</th>
                    <th className="pb-2 font-medium">Status</th>
                    <th className="pb-2 font-medium text-right">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.recentOrders?.length ? data.recentOrders.map((o) => (
                    <tr key={o._id} className="border-b border-plum-50 dark:border-plum-800/50">
                      <td className="py-3 font-medium text-plum-800 dark:text-plum-200">#{o._id.slice(-6).toUpperCase()}</td>
                      <td className="py-3 text-plum-600 dark:text-plum-300">{o.user?.name || 'Guest'}</td>
                      <td className="py-3">
                        <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${STATUS_STYLES[o.orderStatus] || 'bg-plum-100 text-plum-700'}`}>
                          {o.orderStatus}
                        </span>
                      </td>
                      <td className="py-3 text-right font-semibold text-plum-800 dark:text-plum-200">${o.totalPrice.toFixed(2)}</td>
                    </tr>
                  )) : (
                    <tr><td colSpan={4} className="py-6 text-center text-plum-400">No orders yet</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-6">
            {/* Orders by status */}
            <div className="card p-6">
              <h2 className="font-semibold text-plum-900 dark:text-plum-100 mb-4 flex items-center gap-2">
                <TrendingUp size={18} /> Orders by Status
              </h2>
              <div className="space-y-2">
                {data?.ordersByStatus?.length ? data.ordersByStatus.map((g) => (
                  <div key={g._id} className="flex items-center justify-between text-sm">
                    <span className="text-plum-600 dark:text-plum-300">{g._id}</span>
                    <span className="font-semibold text-plum-800 dark:text-plum-200">{g.count}</span>
                  </div>
                )) : <p className="text-sm text-plum-400">No data</p>}
              </div>
            </div>

            {/* Low stock */}
            <div className="card p-6">
              <h2 className="font-semibold text-plum-900 dark:text-plum-100 mb-4 flex items-center gap-2">
                <AlertTriangle size={18} className="text-amber-500" /> Low Stock
              </h2>
              <div className="space-y-3">
                {data?.lowStock?.length ? data.lowStock.map((b) => (
                  <div key={b._id} className="flex items-center justify-between text-sm">
                    <span className="text-plum-600 dark:text-plum-300 line-clamp-1 pr-2">{b.title}</span>
                    <span className="font-semibold text-amber-600 shrink-0">{b.stock} left</span>
                  </div>
                )) : <p className="text-sm text-plum-400">All stocked up 🎉</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const StatCard = ({ icon, label, value, color }) => (
  <div className="card p-5 flex items-center gap-4">
    <span className={`grid h-12 w-12 place-items-center rounded-xl ${color} text-white`}>{icon}</span>
    <div>
      <p className="text-sm text-plum-400">{label}</p>
      <p className="font-display text-2xl font-semibold text-plum-950 dark:text-plum-100">{value}</p>
    </div>
  </div>
);
