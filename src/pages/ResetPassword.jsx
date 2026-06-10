import { useForm } from 'react-hook-form';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { KeyRound } from 'lucide-react';
import toast from 'react-hot-toast';
import Seo from '../components/ui/Seo';
import { useResetPasswordMutation } from '../features/api/apiSlice';

export default function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [reset, { isLoading }] = useResetPasswordMutation();
  const password = watch('password');

  const onSubmit = async ({ password }) => {
    try {
      await reset({ token, password }).unwrap();
      toast.success('Password reset! Please log in.');
      navigate('/login', { replace: true });
    } catch (err) {
      toast.error(err?.data?.message || 'Reset failed or link expired');
    }
  };

  return (
    <>
      <Seo title="Reset Password" />
      <section className="container-x py-16 grid place-items-center">
        <div className="w-full max-w-md card p-8">
          <span className="grid h-12 w-12 mx-auto place-items-center rounded-full bg-plum-100 dark:bg-plum-800 text-plum-700 dark:text-blush-400 mb-4">
            <KeyRound size={22} />
          </span>
          <h1 className="font-display text-2xl font-semibold text-plum-950 dark:text-plum-100 text-center">
            Set a new password
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-4">
            <div>
              <label className="block text-sm font-medium text-plum-700 dark:text-plum-300 mb-1.5">New Password</label>
              <input className="input" type="password" placeholder="••••••••"
                {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Min 6 characters' } })} />
              {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-plum-700 dark:text-plum-300 mb-1.5">Confirm Password</label>
              <input className="input" type="password" placeholder="••••••••"
                {...register('confirm', { required: 'Please confirm', validate: (v) => v === password || 'Passwords do not match' })} />
              {errors.confirm && <p className="text-xs text-red-500 mt-1">{errors.confirm.message}</p>}
            </div>
            <button disabled={isLoading} className="btn-primary w-full">
              {isLoading ? 'Resetting...' : 'Reset Password'}
            </button>
          </form>

          <p className="text-center text-sm text-plum-500 dark:text-plum-400 mt-6">
            <Link to="/login" className="text-plum-700 dark:text-blush-400 font-medium hover:underline">Back to login</Link>
          </p>
        </div>
      </section>
    </>
  );
}
