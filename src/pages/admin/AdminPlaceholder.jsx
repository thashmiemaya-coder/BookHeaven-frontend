import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Trash2, Check, Plus, X, Mail, Send } from 'lucide-react';
import toast from 'react-hot-toast';
import Seo from '../../components/ui/Seo';
import Loader from '../../components/ui/Loader';
import {
  useGetAllOrdersQuery, useUpdateOrderStatusMutation,
  useGetUsersQuery, useUpdateUserRoleMutation, useToggleUserActiveMutation, useDeleteUserMutation,
  useGetAllReviewsQuery, useApproveReviewMutation, useDeleteReviewMutation,
  useGetMessagesQuery, useUpdateMessageMutation,
  useGetCouponsQuery, useCreateCouponMutation, useDeleteCouponMutation,
  useGetSubscribersQuery, useBroadcastMutation,
  useGetCategoriesQuery, useCreateCategoryMutation, useDeleteCategoryMutation,
  useGetSalesReportQuery,
} from '../../features/api/apiSlice';

// Router: picks the right management panel based on the title prop set in App.jsx
const PANELS = {
  'Order Management': OrderPanel,
  'User Management': UserPanel,
  'Reviews Management': ReviewPanel,
  'Contact Messages': MessagePanel,
  'Coupons': CouponPanel,
  'Newsletter Subscribers': SubscriberPanel,
  'Category Management': CategoryPanel,
  'Sales Reports': ReportPanel,
  'Settings': SettingsPanel,
};

export default function AdminPlaceholder({ title }) {
  const Panel = PANELS[title];
  return (
    <>
      <Seo title={title} />
      <h1 className="font-display text-2xl font-semibold text-plum-950 dark:text-plum-100 mb-6">{title}</h1>
      {Panel ? <Panel /> : <ComingSoon title={title} />}
    </>
  );
}

/* ---------------- Shared ---------------- */
const Card = ({ children, className = '' }) => <div className={`card overflow-hidden ${className}`}>{children}</div>;
const Th = ({ children, right }) => <th className={`p-4 font-medium text-plum-400 ${right ? 'text-right' : 'text-left'}`}>{children}</th>;
const Td = ({ children, right }) => <td className={`p-4 text-plum-700 dark:text-plum-300 ${right ? 'text-right' : ''}`}>{children}</td>;
const Empty = ({ cols, text }) => <tr><td colSpan={cols} className="p-8 text-center text-plum-400">{text}</td></tr>;

const STATUS = ['Processing', 'Confirmed', 'Shipped', 'Out for Delivery', 'Delivered', 'Cancelled'];

/* ---------------- Orders ---------------- */
function OrderPanel() {
  const { data, isLoading } = useGetAllOrdersQuery();
  const [updateStatus] = useUpdateOrderStatusMutation();
  if (isLoading) return <Loader />;

  const change = async (id, orderStatus) => {
    try { await updateStatus({ id, orderStatus }).unwrap(); toast.success('Status updated'); }
    catch (e) { toast.error(e?.data?.message || 'Failed'); }
  };

  return (
    <>
      {data?.revenue != null && (
        <p className="mb-4 text-sm text-plum-500">Total revenue: <b className="text-plum-800 dark:text-plum-200">${data.revenue.toFixed(2)}</b> across {data.count} orders</p>
      )}
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-plum-100 dark:border-plum-800">
              <Th>Order</Th><Th>Customer</Th><Th>Date</Th><Th>Total</Th><Th>Paid</Th><Th>Status</Th>
            </tr></thead>
            <tbody>
              {data?.orders?.length ? data.orders.map((o) => (
                <tr key={o._id} className="border-b border-plum-50 dark:border-plum-800/50">
                  <Td>#{o._id.slice(-6).toUpperCase()}</Td>
                  <Td>{o.user?.name || 'Guest'}</Td>
                  <Td>{new Date(o.createdAt).toLocaleDateString()}</Td>
                  <Td>${o.totalPrice.toFixed(2)}</Td>
                  <Td><span className={o.isPaid ? 'text-green-600' : 'text-amber-600'}>{o.isPaid ? 'Yes' : 'No'}</span></Td>
                  <Td>
                    <select value={o.orderStatus} onChange={(e) => change(o._id, e.target.value)}
                      className="input py-1.5 text-xs w-auto">
                      {STATUS.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </Td>
                </tr>
              )) : <Empty cols={6} text="No orders" />}
            </tbody>
          </table>
        </div>
      </Card>
    </>
  );
}

/* ---------------- Users ---------------- */
function UserPanel() {
  const { data, isLoading } = useGetUsersQuery();
  const [updateRole] = useUpdateUserRoleMutation();
  const [toggleActive] = useToggleUserActiveMutation();
  const [deleteUser] = useDeleteUserMutation();
  if (isLoading) return <Loader />;

  const act = async (fn, ...args) => { try { await fn(...args).unwrap(); toast.success('Updated'); } catch (e) { toast.error(e?.data?.message || 'Failed'); } };

  return (
    <Card>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-plum-100 dark:border-plum-800">
            <Th>Name</Th><Th>Email</Th><Th>Role</Th><Th>Status</Th><Th right>Actions</Th>
          </tr></thead>
          <tbody>
            {data?.users?.map((u) => (
              <tr key={u._id} className="border-b border-plum-50 dark:border-plum-800/50">
                <Td>{u.name}</Td><Td>{u.email}</Td>
                <Td>
                  <select value={u.role} onChange={(e) => act(updateRole, { id: u._id, role: e.target.value })}
                    className="input py-1.5 text-xs w-auto">
                    <option value="customer">customer</option><option value="admin">admin</option>
                  </select>
                </Td>
                <Td>
                  <button onClick={() => act(toggleActive, u._id)}
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${u.isActive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {u.isActive ? 'Active' : 'Disabled'}
                  </button>
                </Td>
                <Td right>
                  <button onClick={() => confirm('Delete user?') && act(deleteUser, u._id)}
                    className="grid h-9 w-9 ml-auto place-items-center rounded-lg bg-red-50 text-red-500 hover:bg-red-100"><Trash2 size={16} /></button>
                </Td>
              </tr>
            ))}
            {!data?.users?.length && <Empty cols={5} text="No users" />}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

/* ---------------- Reviews ---------------- */
function ReviewPanel() {
  const { data, isLoading } = useGetAllReviewsQuery();
  const [approve] = useApproveReviewMutation();
  const [del] = useDeleteReviewMutation();
  if (isLoading) return <Loader />;
  const act = async (fn, id) => { try { await fn(id).unwrap(); toast.success('Done'); } catch (e) { toast.error('Failed'); } };

  return (
    <Card>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-plum-100 dark:border-plum-800">
            <Th>Reviewer</Th><Th>Book</Th><Th>Rating</Th><Th>Comment</Th><Th>Approved</Th><Th right>Actions</Th>
          </tr></thead>
          <tbody>
            {data?.reviews?.map((r) => (
              <tr key={r._id} className="border-b border-plum-50 dark:border-plum-800/50">
                <Td>{r.name}</Td>
                <Td>{r.book?.title || '—'}</Td>
                <Td>{r.rating}★</Td>
                <Td><span className="line-clamp-1 max-w-xs">{r.comment}</span></Td>
                <Td><span className={r.isApproved ? 'text-green-600' : 'text-amber-600'}>{r.isApproved ? 'Yes' : 'Pending'}</span></Td>
                <Td right>
                  <div className="flex justify-end gap-2">
                    {!r.isApproved && (
                      <button onClick={() => act(approve, r._id)} className="grid h-9 w-9 place-items-center rounded-lg bg-green-50 text-green-600 hover:bg-green-100"><Check size={16} /></button>
                    )}
                    <button onClick={() => confirm('Delete review?') && act(del, r._id)} className="grid h-9 w-9 place-items-center rounded-lg bg-red-50 text-red-500 hover:bg-red-100"><Trash2 size={16} /></button>
                  </div>
                </Td>
              </tr>
            ))}
            {!data?.reviews?.length && <Empty cols={6} text="No reviews" />}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

/* ---------------- Messages ---------------- */
function MessagePanel() {
  const { data, isLoading } = useGetMessagesQuery();
  const [updateMessage] = useUpdateMessageMutation();
  const [open, setOpen] = useState(null);
  if (isLoading) return <Loader />;
  const setStatus = async (id, status) => { try { await updateMessage({ id, status }).unwrap(); toast.success('Updated'); } catch { toast.error('Failed'); } };

  return (
    <>
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-plum-100 dark:border-plum-800">
              <Th>From</Th><Th>Subject</Th><Th>Date</Th><Th>Status</Th><Th right>Action</Th>
            </tr></thead>
            <tbody>
              {data?.messages?.map((m) => (
                <tr key={m._id} className="border-b border-plum-50 dark:border-plum-800/50 cursor-pointer hover:bg-plum-50/50 dark:hover:bg-plum-900/30" onClick={() => setOpen(m)}>
                  <Td>{m.name}<br /><span className="text-xs text-plum-400">{m.email}</span></Td>
                  <Td>{m.subject}</Td>
                  <Td>{new Date(m.createdAt).toLocaleDateString()}</Td>
                  <Td><span className="rounded-full bg-plum-100 dark:bg-plum-800 px-2.5 py-0.5 text-xs capitalize">{m.status}</span></Td>
                  <Td right>
                    <button onClick={(e) => { e.stopPropagation(); setStatus(m._id, m.status === 'new' ? 'read' : 'replied'); }}
                      className="text-xs text-plum-700 dark:text-blush-400 hover:underline">
                      Mark {m.status === 'new' ? 'read' : 'replied'}
                    </button>
                  </Td>
                </tr>
              ))}
              {!data?.messages?.length && <Empty cols={5} text="No messages" />}
            </tbody>
          </table>
        </div>
      </Card>
      {open && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4" onClick={() => setOpen(null)}>
          <div className="card w-full max-w-lg p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-semibold text-lg text-plum-900 dark:text-plum-100">{open.subject}</h3>
                <p className="text-sm text-plum-400">{open.name} · {open.email}</p>
              </div>
              <button onClick={() => setOpen(null)} className="text-plum-400 hover:text-plum-700"><X size={20} /></button>
            </div>
            <p className="text-plum-600 dark:text-plum-300 whitespace-pre-wrap">{open.message}</p>
          </div>
        </div>
      )}
    </>
  );
}

/* ---------------- Coupons ---------------- */
function CouponPanel() {
  const { data, isLoading } = useGetCouponsQuery();
  const [createCoupon, { isLoading: creating }] = useCreateCouponMutation();
  const [deleteCoupon] = useDeleteCouponMutation();
  const { register, handleSubmit, reset } = useForm({ defaultValues: { discountType: 'percentage' } });
  const [showForm, setShowForm] = useState(false);
  if (isLoading) return <Loader />;

  const onSubmit = async (f) => {
    try {
      await createCoupon({
        code: f.code.toUpperCase(), discountType: f.discountType,
        discountValue: Number(f.discountValue), minPurchase: Number(f.minPurchase || 0),
        maxDiscount: f.maxDiscount ? Number(f.maxDiscount) : undefined,
        usageLimit: f.usageLimit ? Number(f.usageLimit) : undefined,
        expiresAt: f.expiresAt || undefined,
      }).unwrap();
      toast.success('Coupon created'); reset(); setShowForm(false);
    } catch (e) { toast.error(e?.data?.message || 'Failed'); }
  };

  return (
    <>
      <button onClick={() => setShowForm((s) => !s)} className="btn-primary mb-5"><Plus size={18} /> New Coupon</button>
      {showForm && (
        <form onSubmit={handleSubmit(onSubmit)} className="card p-5 mb-5 grid sm:grid-cols-3 gap-4">
          <input className="input" placeholder="CODE" {...register('code', { required: true })} />
          <select className="input" {...register('discountType')}>
            <option value="percentage">Percentage</option><option value="fixed">Fixed ($)</option>
          </select>
          <input className="input" type="number" step="0.01" placeholder="Value" {...register('discountValue', { required: true })} />
          <input className="input" type="number" step="0.01" placeholder="Min purchase" {...register('minPurchase')} />
          <input className="input" type="number" step="0.01" placeholder="Max discount" {...register('maxDiscount')} />
          <input className="input" type="number" placeholder="Usage limit" {...register('usageLimit')} />
          <input className="input sm:col-span-2" type="date" {...register('expiresAt')} />
          <button disabled={creating} className="btn-primary">{creating ? 'Saving...' : 'Create'}</button>
        </form>
      )}
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-plum-100 dark:border-plum-800">
              <Th>Code</Th><Th>Type</Th><Th>Value</Th><Th>Min</Th><Th>Used</Th><Th>Expires</Th><Th right>Action</Th>
            </tr></thead>
            <tbody>
              {data?.coupons?.map((c) => (
                <tr key={c._id} className="border-b border-plum-50 dark:border-plum-800/50">
                  <Td><span className="font-mono font-medium text-plum-800 dark:text-plum-200">{c.code}</span></Td>
                  <Td>{c.discountType}</Td>
                  <Td>{c.discountType === 'percentage' ? `${c.discountValue}%` : `$${c.discountValue}`}</Td>
                  <Td>${c.minPurchase}</Td>
                  <Td>{c.usedCount}{c.usageLimit ? `/${c.usageLimit}` : ''}</Td>
                  <Td>{c.expiresAt ? new Date(c.expiresAt).toLocaleDateString() : '—'}</Td>
                  <Td right>
                    <button onClick={() => confirm('Delete coupon?') && deleteCoupon(c._id)} className="grid h-9 w-9 ml-auto place-items-center rounded-lg bg-red-50 text-red-500 hover:bg-red-100"><Trash2 size={16} /></button>
                  </Td>
                </tr>
              ))}
              {!data?.coupons?.length && <Empty cols={7} text="No coupons" />}
            </tbody>
          </table>
        </div>
      </Card>
    </>
  );
}

/* ---------------- Subscribers ---------------- */
function SubscriberPanel() {
  const { data, isLoading } = useGetSubscribersQuery();
  const [broadcast, { isLoading: sending }] = useBroadcastMutation();
  const { register, handleSubmit, reset } = useForm();
  if (isLoading) return <Loader />;

  const onSubmit = async (f) => {
    try { await broadcast(f).unwrap(); toast.success('Broadcast sent'); reset(); }
    catch (e) { toast.error(e?.data?.message || 'Failed'); }
  };

  return (
    <div className="grid lg:grid-cols-[1fr_360px] gap-6">
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-plum-100 dark:border-plum-800"><Th>Email</Th><Th>Subscribed</Th><Th>Since</Th></tr></thead>
            <tbody>
              {data?.subscribers?.map((s) => (
                <tr key={s._id} className="border-b border-plum-50 dark:border-plum-800/50">
                  <Td>{s.email}</Td>
                  <Td><span className={s.isSubscribed ? 'text-green-600' : 'text-red-500'}>{s.isSubscribed ? 'Yes' : 'No'}</span></Td>
                  <Td>{new Date(s.createdAt).toLocaleDateString()}</Td>
                </tr>
              ))}
              {!data?.subscribers?.length && <Empty cols={3} text="No subscribers" />}
            </tbody>
          </table>
        </div>
      </Card>
      <form onSubmit={handleSubmit(onSubmit)} className="card p-6 h-fit">
        <h2 className="font-semibold text-plum-900 dark:text-plum-100 mb-4 flex items-center gap-2"><Mail size={18} /> Send Broadcast</h2>
        <input className="input mb-3" placeholder="Subject" {...register('subject', { required: true })} />
        <textarea rows={5} className="input resize-none mb-3" placeholder="Message (HTML supported)" {...register('message', { required: true })} />
        <button disabled={sending} className="btn-primary w-full">{sending ? 'Sending...' : <>Send to All <Send size={16} /></>}</button>
      </form>
    </div>
  );
}

/* ---------------- Categories ---------------- */
function CategoryPanel() {
  const { data, isLoading } = useGetCategoriesQuery();
  const [createCategory, { isLoading: creating }] = useCreateCategoryMutation();
  const [deleteCategory] = useDeleteCategoryMutation();
  const { register, handleSubmit, reset } = useForm();
  if (isLoading) return <Loader />;

  const onSubmit = async (f) => {
    try { await createCategory(f).unwrap(); toast.success('Category created'); reset(); }
    catch (e) { toast.error(e?.data?.message || 'Failed'); }
  };

  return (
    <div className="grid lg:grid-cols-[1fr_320px] gap-6">
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-plum-100 dark:border-plum-800"><Th>Name</Th><Th>Slug</Th><Th right>Action</Th></tr></thead>
            <tbody>
              {data?.categories?.map((c) => (
                <tr key={c._id} className="border-b border-plum-50 dark:border-plum-800/50">
                  <Td>{c.name}</Td><Td>{c.slug}</Td>
                  <Td right>
                    <button onClick={() => confirm('Delete category?') && deleteCategory(c._id).unwrap().then(() => toast.success('Deleted')).catch((e) => toast.error(e?.data?.message || 'Failed'))}
                      className="grid h-9 w-9 ml-auto place-items-center rounded-lg bg-red-50 text-red-500 hover:bg-red-100"><Trash2 size={16} /></button>
                  </Td>
                </tr>
              ))}
              {!data?.categories?.length && <Empty cols={3} text="No categories" />}
            </tbody>
          </table>
        </div>
      </Card>
      <form onSubmit={handleSubmit(onSubmit)} className="card p-6 h-fit">
        <h2 className="font-semibold text-plum-900 dark:text-plum-100 mb-4">Add Category</h2>
        <input className="input mb-3" placeholder="Name" {...register('name', { required: true })} />
        <textarea rows={3} className="input resize-none mb-3" placeholder="Description (optional)" {...register('description')} />
        <button disabled={creating} className="btn-primary w-full">{creating ? 'Saving...' : 'Create Category'}</button>
      </form>
    </div>
  );
}

/* ---------------- Reports ---------------- */
function ReportPanel() {
  const [range, setRange] = useState('monthly');
  const { data, isLoading } = useGetSalesReportQuery(range);

  return (
    <>
      <div className="flex gap-2 mb-5">
        {['daily', 'monthly', 'yearly'].map((r) => (
          <button key={r} onClick={() => setRange(r)}
            className={`rounded-lg px-4 py-2 text-sm font-medium capitalize transition ${range === r ? 'bg-plum-700 text-white' : 'bg-plum-100 dark:bg-plum-800 text-plum-700 dark:text-plum-200'}`}>
            {r}
          </button>
        ))}
      </div>
      {isLoading ? <Loader /> : (
        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h2 className="font-semibold text-plum-900 dark:text-plum-100 mb-4">Sales ({range})</h2>
            <div className="space-y-2 text-sm max-h-72 overflow-auto">
              {data?.sales?.length ? data.sales.map((s) => (
                <div key={s._id} className="flex justify-between border-b border-plum-50 dark:border-plum-800/50 pb-2">
                  <span className="text-plum-500">{s._id}</span>
                  <span className="font-medium text-plum-800 dark:text-plum-200">${s.revenue?.toFixed(2)} · {s.orders} orders</span>
                </div>
              )) : <p className="text-plum-400">No sales data</p>}
            </div>
          </Card>
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="font-semibold text-plum-900 dark:text-plum-100 mb-4">Top Books</h2>
              <div className="space-y-2 text-sm">
                {data?.topBooks?.length ? data.topBooks.map((b, i) => (
                  <div key={i} className="flex justify-between">
                    <span className="text-plum-600 dark:text-plum-300 line-clamp-1 pr-2">{b.title || b._id}</span>
                    <span className="font-medium text-plum-800 dark:text-plum-200 shrink-0">{b.units} sold</span>
                  </div>
                )) : <p className="text-plum-400">No data</p>}
              </div>
            </Card>
            <Card className="p-6">
              <h2 className="font-semibold text-plum-900 dark:text-plum-100 mb-4">Top Categories</h2>
              <div className="space-y-2 text-sm">
                {data?.topCategories?.length ? data.topCategories.map((c, i) => (
                  <div key={i} className="flex justify-between">
                    <span className="text-plum-600 dark:text-plum-300">{c.name || c._id}</span>
                    <span className="font-medium text-plum-800 dark:text-plum-200">{c.units} sold</span>
                  </div>
                )) : <p className="text-plum-400">No data</p>}
              </div>
            </Card>
          </div>
        </div>
      )}
    </>
  );
}

/* ---------------- Settings ---------------- */
function SettingsPanel() {
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <Card className="p-6">
        <h2 className="font-semibold text-plum-900 dark:text-plum-100 mb-4">Store Information</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-plum-700 dark:text-plum-300 mb-1.5">Store Name</label>
            <input className="input" defaultValue="BookHaven" />
          </div>
          <div>
            <label className="block text-sm font-medium text-plum-700 dark:text-plum-300 mb-1.5">Support Email</label>
            <input className="input" defaultValue="hello@bookhaven.com" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-plum-700 dark:text-plum-300 mb-1.5">Free Shipping Over ($)</label>
              <input className="input" type="number" defaultValue={50} />
            </div>
            <div>
              <label className="block text-sm font-medium text-plum-700 dark:text-plum-300 mb-1.5">Tax Rate (%)</label>
              <input className="input" type="number" defaultValue={5} />
            </div>
          </div>
          <button onClick={() => toast.success('Settings saved (demo)')} className="btn-primary">Save Settings</button>
        </div>
      </Card>
      <Card className="p-6">
        <h2 className="font-semibold text-plum-900 dark:text-plum-100 mb-4">About</h2>
        <p className="text-sm text-plum-500 dark:text-plum-400 leading-relaxed">
          These store-level preferences are wired to the UI as a starting point. Persist them by adding a
          <code className="mx-1 rounded bg-plum-100 dark:bg-plum-800 px-1.5 py-0.5 text-xs">Settings</code>
          model and a small REST endpoint — the admin layout, auth, and RTK Query plumbing are already in place,
          so it's a matter of following the existing controller/route pattern.
        </p>
      </Card>
    </div>
  );
}

const ComingSoon = ({ title }) => (
  <div className="card p-16 text-center text-plum-400">{title} panel coming soon.</div>
);
