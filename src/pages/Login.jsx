import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Eye, EyeOff, LogIn } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import Seo from '../components/ui/Seo';
import { useLoginMutation } from '../features/api/apiSlice';
import { setCredentials } from '../features/auth/authSlice';

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [show, setShow] = useState(false);

  const from = location.state?.from?.pathname;

  const onSubmit = async (data) => {
    try {
      const res = await login(data).unwrap();
      dispatch(setCredentials({ user: res.user, token: res.token }));
      toast.success(`Welcome back, ${res.user.name.split(' ')[0]}!`);

      // Single shared login: admins go straight to the dashboard.
      if (res.user.role === 'admin') {
        navigate('/admin', { replace: true });
      } else {
        navigate(from || '/', { replace: true });
      }
    } catch (err) {
      toast.error(err?.data?.message || 'Invalid credentials');
    }
  };

  return (
    <>
      <Seo title="Login" />
      <section className="container-x py-16 grid place-items-center">
        <div className="w-full max-w-md card p-8">
          <h1 className="font-display text-3xl font-semibold text-plum-950 dark:text-plum-100 text-center">
            Welcome back
          </h1>
          <p className="text-center text-sm text-plum-500 dark:text-plum-400 mt-2">
            Log in to continue to BookHaven
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-4">
            <div>
              <label className="block text-sm font-medium text-plum-700 dark:text-plum-300 mb-1.5">Email</label>
              <input className="input" type="email" placeholder="you@example.com"
                {...register('email', { required: 'Email is required' })} />
              {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-plum-700 dark:text-plum-300 mb-1.5">Password</label>
              <div className="relative">
                <input className="input pr-11" type={show ? 'text' : 'password'} placeholder="••••••••"
                  {...register('password', { required: 'Password is required' })} />
                <button type="button" onClick={() => setShow((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-plum-400 hover:text-plum-700">
                  {show ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password.message}</p>}
            </div>

            <div className="flex justify-end">
              <Link to="/forgot-password" className="text-sm text-plum-700 dark:text-blush-400 hover:underline">
                Forgot password?
              </Link>
            </div>

            <button disabled={isLoading} className="btn-primary w-full">
              {isLoading ? 'Signing in...' : <>Sign In <LogIn size={18} /></>}
            </button>
          </form>

          <p className="text-center text-sm text-plum-500 dark:text-plum-400 mt-6">
            Don't have an account?{' '}
            <Link to="/register" className="text-plum-700 dark:text-blush-400 font-medium hover:underline">
              Create one
            </Link>
          </p>

          
        </div>
      </section>
    </>
  );
}
