import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, UserPlus } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import Seo from '../components/ui/Seo';
import { useRegisterMutation } from '../features/api/apiSlice';
import { setCredentials } from '../features/auth/authSlice';

export default function Register() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [signup, { isLoading }] = useRegisterMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const password = watch('password');

  const onSubmit = async ({ confirm, ...data }) => {
    try {
      const res = await signup(data).unwrap();
      dispatch(setCredentials({ user: res.user, token: res.token }));
      toast.success('Account created. Welcome to BookHaven!');
      navigate('/', { replace: true });
    } catch (err) {
      toast.error(err?.data?.message || 'Registration failed');
    }
  };

  return (
    <>
      <Seo title="Create Account" />
      <section className="container-x py-16 grid place-items-center">
        <div className="w-full max-w-md card p-8">
          <h1 className="font-display text-3xl font-semibold text-plum-950 dark:text-plum-100 text-center">
            Create your account
          </h1>
          <p className="text-center text-sm text-plum-500 dark:text-plum-400 mt-2">
            Join BookHaven and start your reading journey
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-4">
            <div>
              <label className="block text-sm font-medium text-plum-700 dark:text-plum-300 mb-1.5">Full Name</label>
              <input className="input" placeholder="Jane Reader"
                {...register('name', { required: 'Name is required', minLength: { value: 2, message: 'Too short' } })} />
              {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-plum-700 dark:text-plum-300 mb-1.5">Email</label>
              <input className="input" type="email" placeholder="you@example.com"
                {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/, message: 'Invalid email' } })} />
              {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-plum-700 dark:text-plum-300 mb-1.5">Password</label>
              <div className="relative">
                <input className="input pr-11" type={show ? 'text' : 'password'} placeholder="••••••••"
                  {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Min 6 characters' } })} />
                <button type="button" onClick={() => setShow((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-plum-400 hover:text-plum-700">
                  {show ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-plum-700 dark:text-plum-300 mb-1.5">Confirm Password</label>
              <input className="input" type="password" placeholder="••••••••"
                {...register('confirm', { required: 'Please confirm', validate: (v) => v === password || 'Passwords do not match' })} />
              {errors.confirm && <p className="text-xs text-red-500 mt-1">{errors.confirm.message}</p>}
            </div>

            <button disabled={isLoading} className="btn-primary w-full">
              {isLoading ? 'Creating...' : <>Create Account <UserPlus size={18} /></>}
            </button>
          </form>

          <p className="text-center text-sm text-plum-500 dark:text-plum-400 mt-6">
            Already have an account?{' '}
            <Link to="/login" className="text-plum-700 dark:text-blush-400 font-medium hover:underline">Sign in</Link>
          </p>
        </div>
      </section>
    </>
  );
}
