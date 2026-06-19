import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookMarked, Star, Truck } from 'lucide-react';
import Seo from '../components/ui/Seo';
import Hero from '../assets/images/Hero.png';
import ChildrenImg from '../assets/images/children.png';
import AboutUsImg from '../assets/images/AboutUs.jpg';
import BookCard from '../components/ui/BookCard';
import Loader from '../components/ui/Loader';
import { useGetFeaturedQuery, useGetBestSellersQuery, useGetBooksQuery, useSubmitContactMutation } from '../features/api/apiSlice';

export default function Home() {

  const { data: featured, isLoading: l1 } = useGetFeaturedQuery();
  const { data: best, isLoading: l2 } = useGetBestSellersQuery();
  const { data: collection } = useGetBooksQuery({ limit: 4, sort: '-ratings' });

  return (
    <>
      <Seo title="Home" description="Experience our new exclusive books at BookHeaven." />

            <div className="min-h-screen">
        {/* Hero */}
        <section className="relative overflow-hidden min-h-[125vh] -mt-16 pt-16">
          <div className="absolute inset-0 bg-center bg-no-repeat" style={{ backgroundImage: `url(${Hero})`, backgroundSize: 'cover' }} />
          <div className="container-x relative grid lg:grid-cols-2 gap-10 items-center pt-52 pb-52 md:pt-56 md:pb-56">
          <div className="animate-fade-up">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] text-plum-950 dark:text-plum-100">
              Experience our<br />New Exclusive<br /><span className="text-plum-700 dark:text-blush-400">Books</span>
            </h1>
            <p className="mt-6 max-w-md text-plum-600 dark:text-plum-300 leading-relaxed">
              Discover handpicked titles, exclusive editions, and unforgettable stories — curated by readers who love books as much as you do.
            </p>
            <div className="mt-8 flex gap-3">
              <Link to="/books" className="btn-primary">Browse Now <ArrowRight size={18} /></Link>
              <Link to="/about" className="btn-ghost">Learn More</Link>
            </div>
          </div>
          <div className="hidden lg:flex justify-end">
            <img src={ChildrenImg} alt="Children reading" className="max-w-full h-auto xl:w-[90%]" />
          </div>
        </div>
      </section>

      {/* Feature strip */}
      <section className="container-x mt-48 relative z-10">
        <div className="card p-4 md:p-6 lg:p-8 shadow-[0_35px_80px_-40px_rgba(78,42,132,0.18)] border border-[#f3e9f8] grid sm:grid-cols-3 gap-4 md:gap-6">
          <Feature icon={<BookMarked />} title="Carefully Curated" text="Handpicked books by our experts" />
          <Feature icon={<Star />} title="Exclusive Editions" text="Find books you won't find anywhere else" />
          <Feature icon={<Truck />} title="Fast Shipping" text="Quick and reliable delivery" />
        </div>
      </section>

      {/* About */}
      <section className="container-x py-20">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-4">
            <span className="block w-16 h-[4px] rounded bg-plum-100"></span>
            <h3 className="text-2xl md:text-3xl font-bold text-plum-700 px-3">About Us</h3>
            <span className="block w-16 h-[4px] rounded bg-plum-100"></span>
          </div>
          <h2 className="mt-4 font-display text-2xl md:text-3xl font-semibold leading-tight text-primary-heading">
            Welcome to BookHeaven — Your Literary Escape
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <img src={AboutUsImg} alt="About BookHeaven" className="w-full h-auto rounded-2xl shadow-lg" />
          </div>
          <div>
            <p className="text-feature-desc leading-relaxed mb-6">
              At BookHeaven we curate a diverse collection of books from timeless classics to contemporary bestsellers. Our mission is to create a welcoming space for readers to discover, learn, and connect through stories. From exclusive editions to personalized recommendations, we make reading a delightful experience.
            </p>
            <div className="flex gap-3">
              <Link to="/about" className="btn-pink">Read More</Link>
            </div>
          </div>
        </div>
      </section>

      <BookSection title="Our Popular Books" link="/books" loading={l1} books={featured?.books} />
      <BookSection title="Best Collection" link="/books?sort=-ratings" books={collection?.books} />
      <BookSection title="Our Best Selling Books" link="/books?sort=-sold" loading={l2} books={best?.books} />
      <ContactSection />
      </div>
    </>
  );
}

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [submitContact, { isLoading, isError, isSuccess }] = useSubmitContactMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await submitContact({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      }).unwrap();
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };

  return (
    <section className="py-[120px]">
      <div className="container-x mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4">
            <span className="block h-1 w-24 rounded-full bg-plum-100" />
            <h3 className="text-2xl md:text-3xl font-bold text-plum-700 px-3">Contact Us</h3>
            <span className="block h-1 w-24 rounded-full bg-plum-100" />
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-primary-heading" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
            BookHeaven Contact Center
          </h2>
          <p className="mt-4 text-3xl font-semibold text-[#3F256D]" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
            We'd Love to Hear From You
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#5E4F78]" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Have questions, suggestions, or need assistance? Our team is here to help you find your next great read.
          </p>
        </div>

        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-[32px] border border-[#E8D7EA] bg-white p-10 shadow-[0_26px_60px_-40px_rgba(78,42,132,0.22)]">
              <p className="text-[18px] font-semibold text-[#3F256D]">Location</p>
              <p className="mt-4 text-[16px] text-[#5E4F78]">📍 Negombo, Sri Lanka</p>
            </div>
            <div className="rounded-[32px] border border-[#E8D7EA] bg-white p-10 shadow-[0_26px_60px_-40px_rgba(78,42,132,0.22)]">
              <p className="text-[18px] font-semibold text-[#3F256D]">Email</p>
              <p className="mt-4 text-[16px] text-[#5E4F78]">📧 <a href="mailto:support@bookheaven.com" className="hover:underline">support@bookheaven.com</a></p>
            </div>
            <div className="rounded-[32px] border border-[#E8D7EA] bg-white p-10 shadow-[0_26px_60px_-40px_rgba(78,42,132,0.22)]">
              <p className="text-[18px] font-semibold text-[#3F256D]">Phone</p>
              <p className="mt-4 text-[16px] text-[#5E4F78]">📞 +94 77 123 4567</p>
            </div>
            <div className="rounded-[32px] border border-[#E8D7EA] bg-white p-10 shadow-[0_26px_60px_-40px_rgba(78,42,132,0.22)]">
              <p className="text-[18px] font-semibold text-[#3F256D]">Business Hours</p>
              <p className="mt-4 text-[16px] text-[#5E4F78]">🕒 Monday – Saturday<br />9:00 AM – 6:00 PM</p>
            </div>
            <div className="sm:col-span-2 rounded-[32px] border border-[#E8D7EA] bg-white p-10 shadow-[0_26px_60px_-40px_rgba(78,42,132,0.22)]">
              <p className="text-[18px] font-semibold text-[#3F256D]">Social Media</p>
              <div className="mt-4 space-y-2 text-[16px] text-[#5E4F78]">
                <p>Facebook</p>
                <p>Instagram</p>
                <p>TikTok</p>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-[#E8D7EA] bg-white p-10 shadow-[0_26px_60px_-40px_rgba(78,42,132,0.22)]">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#3F256D]">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name" 
                  className="h-14 w-full rounded-[16px] border border-[#E8D7EA] bg-[#FBF7FF] px-4 text-[#5E4F78] placeholder:text-[#9f8fa8] focus:border-[#C74F9B] focus:outline-none focus:ring-2 focus:ring-[#C74F9B]/20" 
                  required
                />
              </div>
              
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#3F256D]">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com" 
                  className="h-14 w-full rounded-[16px] border border-[#E8D7EA] bg-[#FBF7FF] px-4 text-[#5E4F78] placeholder:text-[#9f8fa8] focus:border-[#C74F9B] focus:outline-none focus:ring-2 focus:ring-[#C74F9B]/20" 
                  required
                />
              </div>
              
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#3F256D]">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject" 
                  className="h-14 w-full rounded-[16px] border border-[#E8D7EA] bg-[#FBF7FF] px-4 text-[#5E4F78] placeholder:text-[#9f8fa8] focus:border-[#C74F9B] focus:outline-none focus:ring-2 focus:ring-[#C74F9B]/20" 
                  required
                />
              </div>
              
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#3F256D]">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here" 
                  className="h-[200px] w-full rounded-[16px] border border-[#E8D7EA] bg-[#FBF7FF] px-4 py-4 text-[#5E4F78] placeholder:text-[#9f8fa8] focus:border-[#C74F9B] focus:outline-none focus:ring-2 focus:ring-[#C74F9B]/20 resize-none" 
                  required
                />
              </div>
              
              <button 
                type="submit" 
                className="mt-2 inline-flex h-14 w-[220px] items-center justify-center rounded-[16px] btn-pink"
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
              
              {isError && <p className="text-red-500 mt-2">Failed to send message. Please try again.</p>}
              {isSuccess && <p className="text-green-500 mt-2">Message sent successfully!</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

const Feature = ({ icon, title, text }) => (
  <div className="flex flex-col items-center text-center px-4 py-6 sm:px-6 sm:py-8">
    <span className="grid h-14 w-14 place-items-center rounded-full bg-[#4E2A84] text-white shadow-soft mb-4">{icon}</span>
    <h3 className="font-semibold text-lg" style={{ color: '#33245A' }}>{title}</h3>
    <p className="text-sm mt-3 max-w-xs" style={{ color: '#6B5D86' }}>{text}</p>
  </div>
);

function BookSection({ title, link, books, loading }) {
  return (
    <section className="container-x py-14">
      <div className="flex items-end justify-between mb-7">
        <h2 className="section-title">{title}</h2>
        <Link to={link} className="text-sm font-medium text-plum-700 dark:text-blush-400 hover:underline">View All</Link>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {books?.slice(0, 12).map((b) => <BookCard key={b._id} book={b} />)}
        </div>
      )}
    </section>
  );
}