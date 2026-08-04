import { e as createLucideIcon, r as reactExports, j as jsxRuntimeExports, S as Star, H as Heart, U as Users } from "./index-BtxuP7zD.js";
import { S as Seo } from "./Seo-CTQV06H5.js";
import { B as BookMarked } from "./book-marked-D1T2pBni.js";
import { T as Truck } from "./truck-DbU3V43c.js";
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ShieldCheck = createLucideIcon("ShieldCheck", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
const AboutBg = "/assets/aboutus-JsiV1iWv.png";
const values = [
  { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(BookMarked, {}), title: "Carefully Curated", text: "Every title is handpicked by our team of avid readers and literary experts." },
  { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, {}), title: "Exclusive Editions", text: "Discover special editions and rare finds you won't see anywhere else." },
  { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, {}), title: "Fast Shipping", text: "Quick, reliable delivery so your next great read arrives without the wait." },
  { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, {}), title: "Reader First", text: "We exist to connect people with stories that move, teach, and inspire them." },
  { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, {}), title: "A Community", text: "Reviews, ratings, and recommendations from a community that loves books." },
  { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, {}), title: "Secure & Trusted", text: "Safe checkout, protected data, and support whenever you need it." }
];
function About() {
  reactExports.useEffect(() => {
    const previousBackground = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "#ffffff";
    return () => {
      document.body.style.backgroundColor = previousBackground;
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#ffffff]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Seo, { title: "About Us", description: "BookHaven is your destination for exclusive books and unforgettable stories." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative overflow-hidden bg-cover bg-center bg-no-repeat min-h-[720px] md:min-h-[840px] lg:min-h-[980px]", style: { backgroundImage: `url(${AboutBg})` }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x relative mx-auto h-full px-4 sm:px-6 lg:px-8" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-x mx-auto max-w-[1200px] pt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-[38px] md:text-[56px] text-[#3F256D] leading-tight", style: { fontFamily: "Playfair Display, Georgia, serif" }, children: "Stories Worth Sharing" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-center gap-4 text-[#C74F9B] text-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block h-[1px] w-20 bg-[#C74F9B]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block", children: "♥" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block h-[1px] w-20 bg-[#C74F9B]" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-x mx-auto max-w-[1200px] py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto text-center px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto max-w-3xl text-[#5E4F78] text-[18px] leading-[32px]", style: { fontFamily: "Poppins, sans-serif" }, children: "BookHaven began with a simple idea: that the right book, at the right time, can change everything. We're a small team of readers building a thoughtfully curated bookshop for people who believe the same — bringing exclusive editions and unforgettable stories to your doorstep." }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-x py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: values.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-12 w-12 place-items-center rounded-full bg-plum-700 text-white mb-4", children: v.icon }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-lg text-plum-950 dark:text-plum-100", children: v.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-plum-500 dark:text-plum-400 mt-2 leading-relaxed", children: v.text })
    ] }, v.title)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-x pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card p-8 md:p-12 grid sm:grid-cols-3 gap-8 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { number: "10k+", label: "Curated Titles" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { number: "50k+", label: "Happy Readers" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { number: "4.8★", label: "Average Rating" })
    ] }) })
  ] });
}
const Stat = ({ number, label }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-4xl font-semibold text-plum-700 dark:text-blush-400", children: number }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-plum-500 dark:text-plum-400 mt-1", children: label })
] });
export {
  About as default
};
//# sourceMappingURL=About-DtMpJolX.js.map
