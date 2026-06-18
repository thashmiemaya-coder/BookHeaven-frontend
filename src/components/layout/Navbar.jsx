import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Search, Heart, ShoppingCart, Moon, Sun, User, Menu, X, LogOut, LayoutDashboard } from 'lucide-react';
import { selectCartCount } from '../../features/cart/cartSlice';
import { logOut } from '../../features/auth/authSlice';
import { toggleTheme } from '../../features/uiSlice';

const links = [
  { to: '/', label: 'Home' },
  { to: '/books', label: 'Shop' },
  { to: '/about', label: 'About Us' },
];

export default function Navbar() {
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((s) => s.auth.user);
  const theme = useSelector((s) => s.ui.theme);
  const cartCount = useSelector(selectCartCount);
  const wishCount = useSelector((s) => s.wishlist.items.length);

  const submitSearch = (e) => {
    e.preventDefault();
    navigate(`/books?keyword=${encodeURIComponent(q)}`);
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <nav className="container-x flex items-center gap-4 h-16 bg-transparent max-w-full">
        <Link to="/" className="font-display text-2xl font-bold text-primary-heading shrink-0">
          Book<span className="text-primary-heading">Haven</span>
        </Link>

        <ul className="hidden md:flex items-center gap-1 ml-4">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-sm font-medium transition ${
                    isActive ? 'bg-plum-100 text-nav-active dark:bg-plum-800 dark:text-nav-active' : 'text-nav-text dark:text-plum-300 hover:text-nav-active'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <form onSubmit={submitSearch} className="hidden lg:flex items-center gap-3 w-72 lg:ml-4">
          <div className="relative w-full">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search for books..."
              className="input w-full pl-4 pr-11 py-2.5 rounded-full"
            />
            <button type="submit" aria-label="Search" className="absolute right-1.5 top-1/2 -translate-y-1/2 grid h-8 w-8 place-items-center rounded-full bg-plum-700 text-white">
              <Search size={16} />
            </button>
          </div>
        </form>

        <div className="flex items-center gap-1 ml-auto">
          <button onClick={() => dispatch(toggleTheme())} aria-label="Toggle theme"
            className="grid h-10 w-10 place-items-center rounded-full hover:bg-plum-100 dark:hover:bg-plum-800 text-white">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <Link to="/wishlist" className="relative grid h-10 w-10 place-items-center rounded-full hover:bg-plum-100 dark:hover:bg-plum-800 text-white">
            <Heart size={20} />
            {wishCount > 0 && <Badge>{wishCount}</Badge>}
          </Link>

          <Link to="/cart" className="relative grid h-10 w-10 place-items-center rounded-full hover:bg-plum-100 dark:hover:bg-plum-800 text-white">
            <ShoppingCart size={20} />
            {cartCount > 0 && <Badge>{cartCount}</Badge>}
          </Link>

          {user ? (
            <div className="relative">
              <button onClick={() => setMenu((m) => !m)} className="grid h-10 w-10 place-items-center rounded-full bg-plum-700 text-white font-semibold">
                {user.name?.[0]?.toUpperCase() || <User size={18} />}
              </button>
              {menu && (
                <div className="absolute right-0 mt-2 w-52 card p-2 z-50" onMouseLeave={() => setMenu(false)}>
                  <p className="px-3 py-2 text-sm text-plum-400 truncate">{user.email}</p>
                  {user.role === 'admin' && (
                    <MenuItem to="/admin" onClick={() => setMenu(false)} icon={<LayoutDashboard size={16} />}>Admin Dashboard</MenuItem>
                  )}
                  <MenuItem to="/profile" onClick={() => setMenu(false)} icon={<User size={16} />}>My Profile</MenuItem>
                  <MenuItem to="/orders" onClick={() => setMenu(false)} icon={<ShoppingCart size={16} />}>My Orders</MenuItem>
                  <button onClick={() => { dispatch(logOut()); setMenu(false); navigate('/'); }}
                    className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-blush-600 hover:bg-blush-50">
                    <LogOut size={16} /> Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="hidden sm:inline-flex btn-primary py-2 px-5 text-sm">Login</Link>
          )}

          <button className="md:hidden grid h-10 w-10 place-items-center rounded-full text-plum-700 dark:text-plum-200" onClick={() => setOpen((o) => !o)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-plum-100 dark:border-plum-800 px-4 py-4 space-y-2 bg-plum-50 dark:bg-plum-950">
          <form onSubmit={submitSearch} className="relative">
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search for books..." className="input pr-11 rounded-full" />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-plum-600"><Search size={18} /></button>
          </form>
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)}
              className="block px-4 py-2 rounded-lg text-plum-700 dark:text-plum-200 hover:bg-plum-100 dark:hover:bg-plum-800">
              {l.label}
            </NavLink>
          ))}
          {!user && <Link to="/login" onClick={() => setOpen(false)} className="btn-primary w-full">Login</Link>}
        </div>
      )}
    </header>
  );
}

const Badge = ({ children }) => (
  <span className="absolute -top-0.5 -right-0.5 grid h-5 min-w-5 place-items-center rounded-full bg-blush-500 px-1 text-[10px] font-bold text-white">
    {children}
  </span>
);

const MenuItem = ({ to, children, icon, onClick }) => (
  <Link to={to} onClick={onClick} className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-plum-700 dark:text-plum-200 hover:bg-plum-100 dark:hover:bg-plum-800">
    {icon} {children}
  </Link>
);
