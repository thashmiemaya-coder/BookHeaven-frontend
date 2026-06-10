import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { User, Lock, Package, Heart, LogOut } from 'lucide-react';
import toast from 'react-hot-toast';
import Seo from '../components/ui/Seo';
import { selectUser, updateUser, logOut } from '../features/auth/authSlice';
import { useUpdateProfileMutation, useUpdatePasswordMutation, useLogoutMutation } from '../features/api/apiSlice';

export default function Profile() {
  const user = useSelector(selectUser);
  const [tab, setTab] = useState('profile');

  return (
    <>
      <Seo title="My Profile" />
      <section className="container-x py-10">
        <h1 className="section-title mb-8">My Account</h1>

        <div className="grid lg:grid-cols-[260px_1fr] gap-8">
          <aside className="card p-5 h-fit">
            <div className="flex items-center gap-3 pb-4 border-b border-plum-100 dark:border-plum-800">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-plum-700 text-white font-display text-lg">
                {user?.name?.charAt(0).toUpperCase()}
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-plum-900 dark:text-plum-100 truncate">{user?.name}</p>
                <p className="text-xs text-plum-400 truncate">{user?.email}</p>
              </div>
            </div>
            <nav className="mt-4 space-y-1">
              <TabBtn active={tab === 'profile'} onClick={() => setTab('profile')} icon={<User size={18} />}>Profile</TabBtn>
              <TabBtn active={tab === 'password'} onClick={() => setTab('password')} icon={<Lock size={18} />}>Password</TabBtn>
              <NavLink to="/orders" icon={<Package size={18} />}>My Orders</NavLink>
              <NavLink to="/wishlist" icon={<Heart size={18} />}>Wishlist</NavLink>
              <LogoutBtn />
            </nav>
          </aside>

          <div>
            {tab === 'profile' ? <ProfileForm user={user} /> : <PasswordForm />}
          </div>
        </div>
      </section>
    </>
  );
}

function ProfileForm({ user }) {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: { name: user?.name, phone: user?.phone || '' },
  });
  const [updateProfile, { isLoading }] = useUpdateProfileMutation();

  const onSubmit = async (data) => {
    try {
      const res = await updateProfile(data).unwrap();
      dispatch(updateUser(res.user));
      toast.success('Profile updated');
    } catch (err) {
      toast.error(err?.data?.message || 'Update failed');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card p-6 md:p-8 max-w-xl space-y-4">
      <h2 className="font-semibold text-lg text-plum-900 dark:text-plum-100">Profile Information</h2>
      <div>
        <label className="block text-sm font-medium text-plum-700 dark:text-plum-300 mb-1.5">Full Name</label>
        <input className="input" {...register('name', { required: 'Name is required' })} />
        {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-plum-700 dark:text-plum-300 mb-1.5">Email</label>
        <input className="input opacity-60 cursor-not-allowed" value={user?.email} disabled />
      </div>
      <div>
        <label className="block text-sm font-medium text-plum-700 dark:text-plum-300 mb-1.5">Phone</label>
        <input className="input" placeholder="Optional" {...register('phone')} />
      </div>
      <button disabled={isLoading} className="btn-primary">{isLoading ? 'Saving...' : 'Save Changes'}</button>
    </form>
  );
}

function PasswordForm() {
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
  const [updatePassword, { isLoading }] = useUpdatePasswordMutation();
  const newPassword = watch('newPassword');

  const onSubmit = async ({ currentPassword, newPassword }) => {
    try {
      await updatePassword({ currentPassword, newPassword }).unwrap();
      toast.success('Password updated');
      reset();
    } catch (err) {
      toast.error(err?.data?.message || 'Update failed');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card p-6 md:p-8 max-w-xl space-y-4">
      <h2 className="font-semibold text-lg text-plum-900 dark:text-plum-100">Change Password</h2>
      <div>
        <label className="block text-sm font-medium text-plum-700 dark:text-plum-300 mb-1.5">Current Password</label>
        <input type="password" className="input" {...register('currentPassword', { required: 'Required' })} />
        {errors.currentPassword && <p className="text-xs text-red-500 mt-1">{errors.currentPassword.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-plum-700 dark:text-plum-300 mb-1.5">New Password</label>
        <input type="password" className="input" {...register('newPassword', { required: 'Required', minLength: { value: 6, message: 'Min 6 characters' } })} />
        {errors.newPassword && <p className="text-xs text-red-500 mt-1">{errors.newPassword.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-plum-700 dark:text-plum-300 mb-1.5">Confirm New Password</label>
        <input type="password" className="input" {...register('confirm', { validate: (v) => v === newPassword || 'Passwords do not match' })} />
        {errors.confirm && <p className="text-xs text-red-500 mt-1">{errors.confirm.message}</p>}
      </div>
      <button disabled={isLoading} className="btn-primary">{isLoading ? 'Updating...' : 'Update Password'}</button>
    </form>
  );
}

const TabBtn = ({ active, onClick, icon, children }) => (
  <button onClick={onClick}
    className={`w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
      active ? 'bg-plum-700 text-white' : 'text-plum-600 dark:text-plum-300 hover:bg-plum-100 dark:hover:bg-plum-800'
    }`}>
    {icon} {children}
  </button>
);

const NavLink = ({ to, icon, children }) => (
  <Link to={to}
    className="w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-plum-600 dark:text-plum-300 hover:bg-plum-100 dark:hover:bg-plum-800 transition">
    {icon} {children}
  </Link>
);

function LogoutBtn() {
  const dispatch = useDispatch();
  const [logout] = useLogoutMutation();
  const handle = async () => {
    try { await logout().unwrap(); } catch { /* ignore */ }
    dispatch(logOut());
    toast.success('Logged out');
  };
  return (
    <button onClick={handle}
      className="w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 transition">
      <LogOut size={18} /> Logout
    </button>
  );
}
