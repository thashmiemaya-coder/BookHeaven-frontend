import { useState } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  LayoutDashboard, BookOpen, Tags, ShoppingBag, Users, Star,
  MessageSquare, Ticket, Mail, BarChart3, Settings, LogOut, Menu, X,
} from 'lucide-react';
import { logOut } from '../../features/auth/authSlice';

const nav = [
  { to: '/admin', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/admin/books', label: 'Books', icon: BookOpen },
  { to: '/admin/categories', label: 'Categories', icon: Tags },
  { to: '/admin/orders', label: 'Orders', icon: ShoppingBag },
  { to: '/admin/users', label: 'Users', icon: Users },
  { to: '/admin/reviews', label: 'Reviews', icon: Star },
  { to: '/admin/messages', label: 'Messages', icon: MessageSquare },
  { to: '/admin/coupons', label: 'Coupons', icon: Ticket },
  { to: '/admin/subscribers', label: 'Subscribers', icon: Mail },
  { to: '/admin/reports', label: 'Sales Reports', icon: BarChart3 },
  { to: '/admin/settings', label: 'Settings', icon: Settings },
];

export default function AdminLayout() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((s) => s.auth.user);

  return (
    <div className="min-h-screen bg-plum-50 dark:bg-plum-950 flex">
      {/* Sidebar */}
      <aside className={`fixed lg:static z-40 inset-y-0 left-0 w-64 bg-plum-950 text-plum-200 transition-transform
        ${open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="h-16 flex items-center px-6 border-b border-plum-800">
          <Link to="/" className="font-display text-xl font-bold text-white">
            Book<span className="text-blush-400">Haven</span>
          </Link>
        </div>
        <nav className="p-3 space-y-1 overflow-y-auto h-[calc(100vh-4rem)]">
          {nav.map(({ to, label, icon: Icon, end }) => (
            <NavLink key={to} to={to} end={end} onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition ${
                  isActive ? 'bg-plum-700 text-white' : 'hover:bg-plum-900 text-plum-300'
                }`
              }>
              <Icon size={18} /> {label}
            </NavLink>
          ))}
          <button onClick={() => { dispatch(logOut()); navigate('/'); }}
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-blush-400 hover:bg-plum-900 mt-4">
            <LogOut size={18} /> Logout
          </button>
        </nav>
      </aside>

      {open && <div className="fixed inset-0 bg-black/40 z-30 lg:hidden" onClick={() => setOpen(false)} />}

      <div className="flex-1 min-w-0">
        <header className="h-16 bg-white dark:bg-plum-900 border-b border-plum-100 dark:border-plum-800 flex items-center justify-between px-4 sm:px-6 sticky top-0 z-20">
          <button className="lg:hidden text-plum-700" onClick={() => setOpen(true)}><Menu /></button>
          <h1 className="font-display text-lg font-semibold text-plum-900 dark:text-plum-100">Admin Panel</h1>
          <div className="flex items-center gap-2 text-sm text-plum-600 dark:text-plum-300">
            <span className="hidden sm:inline">{user?.name}</span>
            <span className="grid h-9 w-9 place-items-center rounded-full bg-plum-700 text-white">{user?.name?.[0]}</span>
          </div>
        </header>
        <div className="p-4 sm:p-6 lg:p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
