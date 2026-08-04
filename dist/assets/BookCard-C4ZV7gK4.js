import { j as jsxRuntimeExports, S as Star, k as useDispatch, l as useSelector, L as Link, H as Heart, t as toggleWishlist, z as zt, o as ShoppingCart, p as addToCart } from "./index-BtxuP7zD.js";
import { L as LazyImage } from "./LazyImage-BzZeTy7O.js";
function Rating({ value = 0, count, size = 16 }) {
  var _a;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
    [1, 2, 3, 4, 5].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Star,
      {
        size,
        className: i <= Math.round(value) ? "fill-blush-400 text-blush-400" : "text-plum-200"
      },
      i
    )),
    count != null && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-plum-400 ml-1", children: [
      "(",
      ((_a = value == null ? void 0 : value.toFixed) == null ? void 0 : _a.call(value, 1)) ?? value,
      ")"
    ] })
  ] });
}
function BookCard({ book }) {
  const dispatch = useDispatch();
  const wished = useSelector((state) => {
    var _a;
    const items = (_a = state.wishlist) == null ? void 0 : _a.items;
    if (!Array.isArray(items)) {
      return false;
    }
    return items.some((item) => item._id === (book == null ? void 0 : book._id));
  });
  if (!book) {
    return null;
  }
  const regularPrice = Number(book.price) || 0;
  const discountPrice = Number(book.discountPrice) || 0;
  const price = discountPrice > 0 ? discountPrice : regularPrice;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group bg-plum-50 dark:bg-plum-900/30 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden bg-white dark:bg-plum-800", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/books/${book.slug}`, className: "block aspect-[3/4]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        LazyImage,
        {
          src: book.coverImage,
          alt: book.title,
          className: "h-full w-full object-cover group-hover:scale-105 transition duration-300"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          "aria-label": "Add to wishlist",
          onClick: () => {
            dispatch(toggleWishlist(book));
            zt.success(
              wished ? "Removed from wishlist" : "Added to wishlist"
            );
          },
          className: "absolute top-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 backdrop-blur text-plum-700 shadow hover:scale-110 transition",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Heart,
            {
              size: 18,
              className: wished ? "fill-blush-500 text-blush-500" : ""
            }
          )
        }
      ),
      discountPrice > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-3 left-3 rounded-full bg-blush-500 px-2 py-1 text-xs font-semibold text-white", children: "Sale" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 flex flex-col flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/books/${book.slug}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-sm text-plum-950 dark:text-plum-100 line-clamp-2 hover:text-plum-700", children: book.title }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-plum-500 dark:text-plum-400 mt-1 mb-3", children: book.author }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Rating,
        {
          value: Number(book.ratings) || 0,
          count: Number(book.numReviews) || 0,
          size: 14
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto flex items-center justify-between pt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-base font-bold text-plum-900 dark:text-plum-100", children: [
            "$",
            price.toFixed(2)
          ] }),
          discountPrice > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-plum-400 dark:text-plum-500 line-through", children: [
            "$",
            regularPrice.toFixed(2)
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              dispatch(addToCart(book));
              zt.success("Added to cart");
            },
            disabled: Number(book.stock) === 0,
            className: "grid h-9 w-9 place-items-center rounded-lg bg-plum-200 text-plum-700 dark:bg-plum-700 dark:text-plum-200 hover:bg-plum-700 hover:text-white dark:hover:bg-plum-600 transition disabled:opacity-40",
            "aria-label": "Add to cart",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { size: 16 })
          }
        )
      ] })
    ] })
  ] });
}
export {
  BookCard as B,
  Rating as R
};
//# sourceMappingURL=BookCard-C4ZV7gK4.js.map
