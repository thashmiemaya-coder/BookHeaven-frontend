import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Github } from 'lucide-react';
import toast from 'react-hot-toast';
import { useSubscribeMutation } from '../../features/api/apiSlice';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribe, { isLoading }] = useSubscribeMutation();

  const onSubscribe = async (e) => {
    e.preventDefault();
    try {
      await subscribe({ email }).unwrap();
      toast.success('Subscribed! 📚');
      setEmail('');
    } catch (err) {
      toast.error(err?.data?.message || 'Subscription failed');
    }
  };

  return (
    <footer className="bg-plum-950 text-plum-200 mt-20">
      <div className="container-x py-14 grid gap-10 md:grid-cols-4">
        <div>
          <h3 className="font-display text-2xl font-bold text-white mb-3">
            Book<span className="text-blush-400">Heaven</span>
          </h3>
          <p className="text-sm text-plum-300 leading-relaxed">
            Your destination for exclusive books and unforgettable stories.
          </p>
          <div className="flex gap-3 mt-5">
            {[Facebook, Instagram, Twitter, Github].map((Icon, i) => (
              <a key={i} href="#" aria-label="social"
                className="grid h-9 w-9 place-items-center rounded-full bg-plum-800 hover:bg-blush-500 transition">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <FooterCol title="Quick Links" items={[['Home', '/'], ['Shop', '/books'], ['Blog', '/blog'], ['Contact', '/contact']]} />
        <FooterCol title="Customer Service" items={[['My Account', '/profile'], ['Order Tracking', '/orders'], ['Wishlist', '/wishlist'], ['FAQs', '/about']]} />

        <div>
          <h4 className="font-semibold text-white mb-4">Newsletter</h4>
          <p className="text-sm text-plum-300 mb-4">Subscribe to get updates on new exclusive books.</p>
          <form onSubmit={onSubscribe} className="space-y-3">
            <input
              type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full rounded-full bg-plum-900 border border-plum-700 px-4 py-2.5 text-sm text-white placeholder:text-plum-400 outline-none focus:border-blush-400"
            />
            <button disabled={isLoading} className="btn-pink w-full py-2.5 text-sm">
              {isLoading ? 'Subscribing…' : 'Subscribe'}
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-plum-800">
        <div className="container-x py-5 flex flex-col sm:flex-row justify-between gap-3 text-xs text-plum-400">
          <p>© {new Date().getFullYear()} BookHaven. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/refund">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

const FooterCol = ({ title, items }) => (
  <div>
    <h4 className="font-semibold text-white mb-4">{title}</h4>
    <ul className="space-y-2.5 text-sm">
      {items.map(([label, to]) => (
        <li key={label}>
          <Link to={to} className="text-plum-300 hover:text-blush-400 transition">{label}</Link>
        </li>
      ))}
    </ul>
  </div>
);
