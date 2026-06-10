import { useEffect } from 'react';
import { BookMarked, Star, Truck, Heart, Users, ShieldCheck } from 'lucide-react';
import Seo from '../components/ui/Seo';
import AboutBg from '../assets/images/aboutus.png';

const values = [
  { icon: <BookMarked />, title: 'Carefully Curated', text: 'Every title is handpicked by our team of avid readers and literary experts.' },
  { icon: <Star />, title: 'Exclusive Editions', text: 'Discover special editions and rare finds you won\'t see anywhere else.' },
  { icon: <Truck />, title: 'Fast Shipping', text: 'Quick, reliable delivery so your next great read arrives without the wait.' },
  { icon: <Heart />, title: 'Reader First', text: 'We exist to connect people with stories that move, teach, and inspire them.' },
  { icon: <Users />, title: 'A Community', text: 'Reviews, ratings, and recommendations from a community that loves books.' },
  { icon: <ShieldCheck />, title: 'Secure & Trusted', text: 'Safe checkout, protected data, and support whenever you need it.' },
];

export default function About() {
  useEffect(() => {
    const previousBackground = document.body.style.backgroundColor;
    document.body.style.backgroundColor = '#fcd7dd';
    return () => {
      document.body.style.backgroundColor = previousBackground;
    };
  }, []);

  return (
    <div className="bg-[#fcd7dd]">
      <Seo title="About Us" description="BookHaven is your destination for exclusive books and unforgettable stories." />

      <section className="relative overflow-hidden bg-cover bg-center bg-no-repeat min-h-[720px] md:min-h-[840px] lg:min-h-[980px]" style={{ backgroundImage: `url(${AboutBg})` }}>
        <div className="container-x relative mx-auto h-full px-4 sm:px-6 lg:px-8">
          {/* Hero background only, no title text */}
        </div>
      </section>

      <section className="container-x mx-auto max-w-[1200px] pt-20">
        <div className="text-center">
          <h2 className="font-display font-bold text-[38px] md:text-[56px] text-[#3F256D] leading-tight" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
            Stories Worth Sharing
          </h2>
          <div className="mt-6 flex items-center justify-center gap-4 text-[#C74F9B] text-lg">
            <span className="inline-block h-[1px] w-20 bg-[#C74F9B]" />
            <span className="inline-block">♥</span>
            <span className="inline-block h-[1px] w-20 bg-[#C74F9B]" />
          </div>
        </div>
      </section>

      <section className="container-x mx-auto max-w-[1200px] py-20">
        <div className="mx-auto text-center px-4 sm:px-6 lg:px-8">
          <p className="mx-auto max-w-3xl text-[#5E4F78] text-[18px] leading-[32px]" style={{ fontFamily: 'Poppins, sans-serif' }}>
            BookHaven began with a simple idea: that the right book, at the right time, can change everything.
            We're a small team of readers building a thoughtfully curated bookshop for people who believe the
            same — bringing exclusive editions and unforgettable stories to your doorstep.
          </p>
        </div>
      </section>

      <section className="container-x py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v) => (
            <div key={v.title} className="card p-6">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-plum-700 text-white mb-4">
                {v.icon}
              </span>
              <h3 className="font-display font-semibold text-lg text-plum-950 dark:text-plum-100">{v.title}</h3>
              <p className="text-sm text-plum-500 dark:text-plum-400 mt-2 leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x pb-20">
        <div className="card p-8 md:p-12 grid sm:grid-cols-3 gap-8 text-center">
          <Stat number="10k+" label="Curated Titles" />
          <Stat number="50k+" label="Happy Readers" />
          <Stat number="4.8★" label="Average Rating" />
        </div>
      </section>
    </div>
  );
}

const Stat = ({ number, label }) => (
  <div>
    <div className="font-display text-4xl font-semibold text-plum-700 dark:text-blush-400">{number}</div>
    <div className="text-sm text-plum-500 dark:text-plum-400 mt-1">{label}</div>
  </div>
);
