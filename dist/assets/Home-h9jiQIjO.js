import { u as useGetFeaturedQuery, a as useGetBestSellersQuery, b as useGetBooksQuery, j as jsxRuntimeExports, L as Link, S as Star, c as Loader, r as reactExports, d as useSubmitContactMutation } from "./index-BtxuP7zD.js";
import { S as Seo } from "./Seo-CTQV06H5.js";
import { B as BookCard } from "./BookCard-C4ZV7gK4.js";
import { A as ArrowRight } from "./arrow-right-_6J08D8D.js";
import { B as BookMarked } from "./book-marked-D1T2pBni.js";
import { T as Truck } from "./truck-DbU3V43c.js";
import "./LazyImage-BzZeTy7O.js";
const Hero = "/assets/Hero-C7eFg77l.png";
const AboutUsImg = "/assets/AboutUs-CmZFAbU-.jpg";
function Home() {
  const { data: featured, isLoading: l1 } = useGetFeaturedQuery();
  const { data: best, isLoading: l2 } = useGetBestSellersQuery();
  const { data: collection } = useGetBooksQuery({ limit: 4, sort: "-ratings" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Seo, { title: "Home", description: "Experience our new exclusive books at BookHeaven." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden min-h-[125vh] -mt-16 pt-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-center bg-no-repeat", style: { backgroundImage: `url(${Hero})`, backgroundSize: "cover" } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x relative grid lg:grid-cols-2 gap-10 items-center pt-52 pb-52 md:pt-56 md:pb-56", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-fade-up", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] text-plum-950 dark:text-plum-100", children: [
            "Experience our",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "New Exclusive",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-plum-700 dark:text-blush-400", children: "Books" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-md text-plum-600 dark:text-plum-300 leading-relaxed", children: "Discover handpicked titles, exclusive editions, and unforgettable stories — curated by readers who love books as much as you do." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/books", className: "btn-primary", children: [
              "Browse Now ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 18 })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "btn-ghost", children: "Learn More" })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-x -mt-24 relative z-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Feature,
          {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(BookMarked, { size: 30 }),
            title: "Carefully Curated",
            text: "Handpicked books selected by passionate readers and experts."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Feature,
          {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 30 }),
            title: "Exclusive Editions",
            text: "Discover unique titles and special editions unavailable elsewhere."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Feature,
          {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { size: 30 }),
            title: "Fast Shipping",
            text: "Reliable doorstep delivery so your next adventure arrives quickly."
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-x py-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block w-16 h-[4px] rounded bg-plum-100" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl md:text-3xl font-bold text-plum-700 px-3", children: "About Us" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block w-16 h-[4px] rounded bg-plum-100" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-2xl md:text-3xl font-semibold leading-tight text-primary-heading", children: "Welcome to BookHeaven — Your Literary Escape" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-10 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: AboutUsImg, alt: "About BookHeaven", className: "w-full h-auto rounded-2xl shadow-lg" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-feature-desc leading-relaxed mb-6", children: "At BookHeaven we curate a diverse collection of books from timeless classics to contemporary bestsellers. Our mission is to create a welcoming space for readers to discover, learn, and connect through stories. From exclusive editions to personalized recommendations, we make reading a delightful experience." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "btn-pink", children: "Read More" }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(BookSection, { title: "Our Popular Books", link: "/books", loading: l1, books: featured == null ? void 0 : featured.books }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(BookSection, { title: "Best Collection", link: "/books?sort=-ratings", books: collection == null ? void 0 : collection.books }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(BookSection, { title: "Our Best Selling Books", link: "/books?sort=-sold", loading: l2, books: best == null ? void 0 : best.books }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ContactSection, {})
    ] })
  ] });
}
function ContactSection() {
  const [formData, setFormData] = reactExports.useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitContact, { isLoading, isError, isSuccess }] = useSubmitContactMutation();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
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
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-[120px]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block h-1 w-24 rounded-full bg-plum-100" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl md:text-3xl font-bold text-plum-700 px-3", children: "Contact Us" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block h-1 w-24 rounded-full bg-plum-100" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-3xl md:text-4xl font-semibold text-primary-heading", style: { fontFamily: "Playfair Display, Georgia, serif" }, children: "BookHeaven Contact Center" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-3xl font-semibold text-[#3F256D]", style: { fontFamily: "Playfair Display, Georgia, serif" }, children: "We'd Love to Hear From You" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-6 max-w-2xl text-base leading-8 text-[#5E4F78]", style: { fontFamily: "Poppins, sans-serif" }, children: "Have questions, suggestions, or need assistance? Our team is here to help you find your next great read." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-16 lg:grid-cols-[1.1fr_0.9fr] items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[32px] border border-[#E8D7EA] bg-white p-10 shadow-[0_26px_60px_-40px_rgba(78,42,132,0.22)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[18px] font-semibold text-[#3F256D]", children: "Location" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-[16px] text-[#5E4F78]", children: "📍 Negombo, Sri Lanka" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[32px] border border-[#E8D7EA] bg-white p-10 shadow-[0_26px_60px_-40px_rgba(78,42,132,0.22)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[18px] font-semibold text-[#3F256D]", children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-[16px] text-[#5E4F78]", children: [
            "📧 ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:bookheaven@gmail.com", className: "hover:underline", children: "bookheaven@gmail.com" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[32px] border border-[#E8D7EA] bg-white p-10 shadow-[0_26px_60px_-40px_rgba(78,42,132,0.22)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[18px] font-semibold text-[#3F256D]", children: "Phone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-[16px] text-[#5E4F78]", children: "📞 +94 77 123 4567" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[32px] border border-[#E8D7EA] bg-white p-10 shadow-[0_26px_60px_-40px_rgba(78,42,132,0.22)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[18px] font-semibold text-[#3F256D]", children: "Business Hours" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-[16px] text-[#5E4F78]", children: [
            "🕒 Monday – Saturday",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "9:00 AM – 6:00 PM"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2 rounded-[32px] border border-[#E8D7EA] bg-white p-10 shadow-[0_26px_60px_-40px_rgba(78,42,132,0.22)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[18px] font-semibold text-[#3F256D]", children: "Social Media" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-2 text-[16px] text-[#5E4F78]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Facebook" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Instagram" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "TikTok" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-[32px] border border-[#E8D7EA] bg-white p-10 shadow-[0_26px_60px_-40px_rgba(78,42,132,0.22)]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-2 block text-sm font-semibold text-[#3F256D]", children: "Full Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              name: "name",
              value: formData.name,
              onChange: handleChange,
              placeholder: "Your name",
              className: "h-14 w-full rounded-[16px] border border-[#E8D7EA] bg-[#FBF7FF] px-4 text-[#5E4F78] placeholder:text-[#9f8fa8] focus:border-[#C74F9B] focus:outline-none focus:ring-2 focus:ring-[#C74F9B]/20",
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-2 block text-sm font-semibold text-[#3F256D]", children: "Email Address" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "email",
              name: "email",
              value: formData.email,
              onChange: handleChange,
              placeholder: "you@example.com",
              className: "h-14 w-full rounded-[16px] border border-[#E8D7EA] bg-[#FBF7FF] px-4 text-[#5E4F78] placeholder:text-[#9f8fa8] focus:border-[#C74F9B] focus:outline-none focus:ring-2 focus:ring-[#C74F9B]/20",
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-2 block text-sm font-semibold text-[#3F256D]", children: "Subject" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              name: "subject",
              value: formData.subject,
              onChange: handleChange,
              placeholder: "Subject",
              className: "h-14 w-full rounded-[16px] border border-[#E8D7EA] bg-[#FBF7FF] px-4 text-[#5E4F78] placeholder:text-[#9f8fa8] focus:border-[#C74F9B] focus:outline-none focus:ring-2 focus:ring-[#C74F9B]/20",
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-2 block text-sm font-semibold text-[#3F256D]", children: "Message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              name: "message",
              value: formData.message,
              onChange: handleChange,
              placeholder: "Write your message here",
              className: "h-[200px] w-full rounded-[16px] border border-[#E8D7EA] bg-[#FBF7FF] px-4 py-4 text-[#5E4F78] placeholder:text-[#9f8fa8] focus:border-[#C74F9B] focus:outline-none focus:ring-2 focus:ring-[#C74F9B]/20 resize-none",
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "submit",
            className: "mt-2 inline-flex h-14 w-[220px] items-center justify-center rounded-[16px] btn-pink",
            disabled: isLoading,
            children: isLoading ? "Sending..." : "Send Message"
          }
        ),
        isError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 mt-2", children: "Failed to send message. Please try again." }),
        isSuccess && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-green-500 mt-2", children: "Message sent successfully!" })
      ] }) })
    ] })
  ] }) });
}
const Feature = ({ icon, title, text }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  "div",
  {
    className: "\r\n      group\r\n      bg-white\r\n      rounded-3xl\r\n      p-10\r\n      text-center\r\n      border border-[#F0E6F7]\r\n      shadow-lg\r\n      hover:shadow-2xl\r\n      hover:-translate-y-2\r\n      transition-all\r\n      duration-300\r\n    ",
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "\r\n        mx-auto\r\n        mb-6\r\n        flex\r\n        h-20\r\n        w-20\r\n        items-center\r\n        justify-center\r\n        rounded-full\r\n        bg-gradient-to-r\r\n        from-[#6036A0]\r\n        to-[#C74F9B]\r\n        text-white\r\n        shadow-lg\r\n        group-hover:scale-110\r\n        transition-transform\r\n        duration-300\r\n      ",
          children: icon
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-[#3F256D] mb-3", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#6B5D86] leading-relaxed", children: text })
    ]
  }
);
function BookSection({ title, link, books, loading }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-x py-14", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "section-title", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: link, className: "text-sm font-medium text-plum-700 dark:text-blush-400 hover:underline", children: "View All" })
    ] }),
    loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5", children: books == null ? void 0 : books.slice(0, 12).map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx(BookCard, { book: b }, b._id)) })
  ] });
}
export {
  Home as default
};
//# sourceMappingURL=Home-h9jiQIjO.js.map
