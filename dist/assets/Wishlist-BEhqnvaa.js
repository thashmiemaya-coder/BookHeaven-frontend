import { l as useSelector, K as selectWishlist, j as jsxRuntimeExports, H as Heart, L as Link } from "./index-BtxuP7zD.js";
import { S as Seo } from "./Seo-CTQV06H5.js";
import { B as BookCard } from "./BookCard-C4ZV7gK4.js";
import "./LazyImage-BzZeTy7O.js";
function Wishlist() {
  const items = useSelector(selectWishlist);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Seo, { title: "Wishlist" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-x py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "section-title mb-8", children: "My Wishlist" }),
      items.length ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5", children: items.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx(BookCard, { book: b }, b._id)) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "mx-auto text-plum-200", size: 96, strokeWidth: 1 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-semibold text-plum-950 dark:text-plum-100 mt-6", children: "Your wishlist is empty" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-plum-500 dark:text-plum-400 mt-2", children: "Save books you love to find them easily later." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/books", className: "btn-primary mt-8 inline-flex", children: "Discover Books" })
      ] })
    ] })
  ] });
}
export {
  Wishlist as default
};
//# sourceMappingURL=Wishlist-BEhqnvaa.js.map
