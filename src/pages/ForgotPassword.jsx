import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import Seo from '../components/ui/Seo';
import { useForgotPasswordMutation } from '../features/api/apiSlice';

export default function ForgotPassword() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [forgot, { isLoading }] = useForgotPasswordMutation();
  const [sent, setSent] = useState(false);

  const onSubmit = async (data) => {
    try {
      await forgot(data).unwrap();
      setSent(true);
      toast.success('Reset link sent if the email exists');
    } catch (err) {
      toast.error(err?.data?.message || 'Request failed');
    }
  };

  return (
    <>
      <Seo title="Forgot Password" />
      <section className="container-x py-16 grid place-items-center">
        <div className="w-full max-w-md card p-8">
          <span className="grid h-12 w-12 mx-auto place-items-center rounded-full bg-plum-100 dark:bg-plum-800 text-plum-700 dark:text-blush-400 mb-4">
            <Mail size={22} />
          </span>
          <h1 className="font-display text-2xl font-semibold text-plum-950 dark:text-plum-100 text-center">
            Forgot your password?
          </h1>
          <p className="text-center text-sm text-plum-500 dark:text-plum-400 mt-2">
            Enter your email and we'll send you a link to reset it.
          </p>

          {sent ? (
            <div className="mt-8 rounded-xl bg-plum-50 dark:bg-plum-900/50 p-4 text-center text-sm text-plum-600 dark:text-plum-300">
              Check your inbox for a reset link. It expires in 15 minutes.
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-4">
              <div>
                <label className="block text-sm font-medium text-plum-700 dark:text-plum-300 mb-1.5">Email</label>
                <input className="input" type="email" placeholder="you@example.com"
                  {...register('email', { required: 'Email is required' })} />
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
              </div>
              <button disabled={isLoading} className="btn-primary w-full">
                {isLoading ? 'Sending...' : 'Send Reset Link'}
              </button>
            </form>
          )}

          <p className="text-center text-sm text-plum-500 dark:text-plum-400 mt-6">
            <Link to="/login" className="text-plum-700 dark:text-blush-400 font-medium hover:underline">
              Back to login
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
