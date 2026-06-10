import { useForm } from 'react-hook-form';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import toast from 'react-hot-toast';
import Seo from '../components/ui/Seo';
import { useSubmitContactMutation } from '../features/api/apiSlice';

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [submitContact, { isLoading }] = useSubmitContactMutation();

  const onSubmit = async (data) => {
    try {
      await submitContact(data).unwrap();
      toast.success('Message sent! We\'ll get back to you soon.');
      reset();
    } catch (err) {
      toast.error(err?.data?.message || 'Failed to send message');
    }
  };

  return (
    <>
      <Seo title="Contact Us" description="Get in touch with the BookHaven team." />

      <section className="container-x py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="section-title">Get in Touch</h1>
          <p className="text-plum-500 dark:text-plum-400 mt-3">
            Questions, feedback, or just want to talk books? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-5">
            <ContactInfo icon={<Mail />} title="Email" text="hello@bookhaven.com" />
            <ContactInfo icon={<Phone />} title="Phone" text="+1 (555) 012-3456" />
            <ContactInfo icon={<MapPin />} title="Address" text="221B Reader's Lane, Booktown, BK 10101" />
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="lg:col-span-3 card p-6 md:p-8 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-plum-700 dark:text-plum-300 mb-1.5">Name</label>
                <input className="input" placeholder="Your name"
                  {...register('name', { required: 'Name is required' })} />
                {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-plum-700 dark:text-plum-300 mb-1.5">Email</label>
                <input className="input" placeholder="you@example.com"
                  {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/, message: 'Invalid email' } })} />
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-plum-700 dark:text-plum-300 mb-1.5">Subject</label>
              <input className="input" placeholder="How can we help?"
                {...register('subject', { required: 'Subject is required' })} />
              {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-plum-700 dark:text-plum-300 mb-1.5">Message</label>
              <textarea rows={5} className="input resize-none" placeholder="Your message..."
                {...register('message', { required: 'Message is required', minLength: { value: 10, message: 'Too short' } })} />
              {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
            </div>
            <button disabled={isLoading} className="btn-primary w-full">
              {isLoading ? 'Sending...' : <>Send Message <Send size={18} /></>}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

const ContactInfo = ({ icon, title, text }) => (
  <div className="card p-5 flex items-start gap-4">
    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-plum-100 dark:bg-plum-800 text-plum-700 dark:text-blush-400">
      {icon}
    </span>
    <div>
      <h3 className="font-semibold text-plum-900 dark:text-plum-100">{title}</h3>
      <p className="text-sm text-plum-500 dark:text-plum-400 mt-0.5">{text}</p>
    </div>
  </div>
);
