jsx
import { useEffect } from 'react';
import Seo from '../components/ui/Seo';
import AboutBg from '../assets/images/aboutus.png';

export default function About() {
  useEffect(() => {
    const previousBackground = document.body.style.backgroundColor;
    document.body.style.backgroundColor = '#ffffff';

    return () => {
      document.body.style.backgroundColor = previousBackground;
    };
  }, []);

  return (
    <div className="bg-[#ffffff]">
      <Seo
        title="About Us"
        description="BookHaven is your destination for exclusive books and unforgettable stories."
      />

      {/* HERO */}
      <section
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat min-h-[720px] md:min-h-[840px] lg:min-h-[980px]"
        style={{ backgroundImage: `url(${aboutus.png})` }}
      >
        <div className="container-x relative mx-auto h-full px-4 sm:px-6 lg:px-8">
          {/* Hero background only */}
        </div>
      </section>

      {/* INTRO */}
      <section className="container-x mx-auto max-w-[1200px] pt-20">
        <div className="text-center">
          <h2
            className="font-display font-bold text-[38px] md:text-[56px] text-[#3F256D] leading-tight"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            Stories Worth Sharing
          </h2>

          <div className="mt-6 flex items-center justify-center gap-4 text-[#C74F9B] text-lg">
            <span className="inline-block h-[1px] w-20 bg-[#C74F9B]" />
            <span>♥</span>
            <span className="inline-block h-[1px] w-20 bg-[#C74F9B]" />
          </div>
        </div>
      </section>

      <section className="container-x mx-auto max-w-[1200px] py-20">
        <div className="mx-auto text-center px-4 sm:px-6 lg:px-8">
          <p
            className="mx-auto max-w-3xl text-[#5E4F78] text-[18px] leading-[32px]"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            BookHaven began with a simple idea: that the right book, at the
            right time, can change everything. We're a team of passionate
            readers building a thoughtfully curated bookstore where every
            reader can discover stories that inspire, educate, and entertain.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="container-x py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-display font-bold text-4xl text-[#3F256D] mb-6">
            Our Story
          </h2>

          <p className="text-[#5E4F78] text-lg leading-8">
            Book Heaven was created with the goal of making books accessible
            to everyone. We wanted to build a platform where readers can
            easily explore new titles, find their favorite authors, and enjoy
            a seamless shopping experience from the comfort of their homes.
          </p>
        </div>
      </section>

      {/* OUR MISSION */}
      <section className="container-x py-16">
        <div className="rounded-[32px] bg-gradient-to-r from-[#F9F3FF] to-[#FFF6FB] p-10 md:p-16">
          <div className="text-center">
            <h2 className="font-display font-bold text-4xl text-[#3F256D] mb-6">
              Our Mission
            </h2>

            <p className="max-w-3xl mx-auto text-[#5E4F78] text-lg leading-8">
              Our mission is to inspire a love of reading by offering quality
              books, affordable prices, and exceptional customer service while
              helping readers discover stories that educate, entertain, and
              inspire.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="container-x py-16">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-4xl text-[#3F256D]">
            What We Offer
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            'Wide Collection of Books',
            'Fantasy, Romance, Mystery & Sci-Fi',
            'Secure Online Ordering',
            'Easy Search & Filtering',
            'Fast Delivery Service',
            'Customer Reviews & Ratings',
            'Personalized Recommendations',
            'New Releases & Bestsellers',
          ].map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-[#F0E5FF] bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-full bg-[#6B3FA0] text-white flex items-center justify-center mb-4">
                📚
              </div>

              <p className="font-medium text-[#3F256D]">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="container-x py-16">
        <div className="rounded-[32px] bg-[#3F256D] p-10 md:p-16 text-white">
          <div className="text-center mb-10">
            <h2 className="font-display font-bold text-4xl">
              Why Choose Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Carefully Curated Collection',
              'User-Friendly Experience',
              'Competitive Pricing',
              'Reliable Customer Support',
            ].map((item) => (
              <div
                key={item}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
              >
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="container-x py-16">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-4xl text-[#3F256D]">
            Our Values
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            'Customer Satisfaction',
            'Quality Selection',
            'Integrity & Trust',
            'Love for Reading',
            'Continuous Improvement',
          ].map((item) => (
            <div
              key={item}
              className="rounded-3xl bg-[#FAF7FF] p-8 text-center"
            >
              <div className="text-4xl mb-4">♥</div>

              <h3 className="font-semibold text-[#3F256D]">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* CUSTOMER COMMITMENT */}
      <section className="container-x py-16">
        <div className="rounded-[32px] border border-[#EADCF8] p-10 md:p-16 text-center">
          <h2 className="font-display font-bold text-4xl text-[#3F256D] mb-6">
            Customer Commitment
          </h2>

          <p className="max-w-3xl mx-auto text-[#5E4F78] text-lg leading-8">
            We are committed to providing a smooth and enjoyable shopping
            experience, from browsing books to receiving orders at your
            doorstep. Your satisfaction remains at the heart of everything we do.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="container-x pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-3xl bg-[#FAF7FF] p-8 text-center">
            <div className="text-5xl mb-3">📚</div>
            <h3 className="text-4xl font-bold text-[#6B3FA0]">10,000+</h3>
            <p className="mt-2 text-[#5E4F78]">Books Available</p>
          </div>

          <div className="rounded-3xl bg-[#FAF7FF] p-8 text-center">
            <div className="text-5xl mb-3">👥</div>
            <h3 className="text-4xl font-bold text-[#6B3FA0]">5,000+</h3>
            <p className="mt-2 text-[#5E4F78]">Happy Customers</p>
          </div>

          <div className="rounded-3xl bg-[#FAF7FF] p-8 text-center">
            <div className="text-5xl mb-3">⭐</div>
            <h3 className="text-4xl font-bold text-[#6B3FA0]">4.8/5</h3>
            <p className="mt-2 text-[#5E4F78]">Average Rating</p>
          </div>

          <div className="rounded-3xl bg-[#FAF7FF] p-8 text-center">
            <div className="text-5xl mb-3">🚚</div>
            <h3 className="text-4xl font-bold text-[#6B3FA0]">Fast</h3>
            <p className="mt-2 text-[#5E4F78]">Nationwide Delivery</p>
          </div>
        </div>
      </section>
    </div>
  );
}

