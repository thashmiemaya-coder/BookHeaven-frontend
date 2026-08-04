import { l as useSelector, v as selectCartItems, w as selectCartSubtotal, s as selectUser, k as useDispatch, x as useNavigate, j as jsxRuntimeExports, y as ShoppingBag, L as Link, A as removeFromCart, B as updateQty } from "./index-BtxuP7zD.js";
import { S as Seo } from "./Seo-CTQV06H5.js";
import { L as LazyImage } from "./LazyImage-BzZeTy7O.js";
import { T as Trash2 } from "./trash-2-DMOeXMOr.js";
import { M as Minus } from "./minus-CLuDkCYG.js";
import { P as Plus } from "./plus-CYPWSy_R.js";
import { A as ArrowRight } from "./arrow-right-_6J08D8D.js";
const SHIPPING_FLAT = 5;
const FREE_SHIPPING_THRESHOLD = 50;
function Cart() {
  const items = useSelector(selectCartItems);
  const subtotal = useSelector(selectCartSubtotal);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const shipping = subtotal > FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : SHIPPING_FLAT;
  const tax = subtotal * 0.05;
  const total = subtotal + shipping + tax;
  const goCheckout = () => navigate(user ? "/checkout" : "/login", { state: { from: { pathname: "/checkout" } } });
  if (!items.length) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Seo, { title: "Cart" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-x py-20 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "mx-auto text-plum-200", size: 96, strokeWidth: 1 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-semibold text-plum-950 dark:text-plum-100 mt-6", children: "Your cart is empty" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-plum-500 dark:text-plum-400 mt-2", children: "Looks like you haven't added any books yet." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/books", className: "btn-primary mt-8 inline-flex", children: "Start Shopping" })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Seo, { title: "Cart" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-x py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "section-title mb-8", children: "Shopping Cart" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1fr_360px] gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: items.map((item) => {
          const price = item.discountPrice > 0 ? item.discountPrice : item.price;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card p-4 flex gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/books/${item.slug}`, className: "h-28 w-20 shrink-0 rounded-lg overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LazyImage, { src: item.coverImage, alt: item.title, className: "h-full w-full" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/books/${item.slug}`, className: "font-display font-semibold text-plum-950 dark:text-plum-100 hover:text-plum-700 line-clamp-1", children: item.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-plum-400", children: item.author })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => dispatch(removeFromCart(item._id)),
                    className: "text-plum-300 hover:text-red-500 transition h-fit",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 18 })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center rounded-lg border border-plum-200 dark:border-plum-700", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => dispatch(updateQty({ _id: item._id, quantity: Math.max(1, item.quantity - 1) })),
                      className: "grid h-9 w-9 place-items-center text-plum-700 dark:text-plum-200",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { size: 14 })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-9 text-center text-sm font-medium text-plum-900 dark:text-plum-100", children: item.quantity }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => dispatch(updateQty({ _id: item._id, quantity: Math.min(item.stock || 99, item.quantity + 1) })),
                      className: "grid h-9 w-9 place-items-center text-plum-700 dark:text-plum-200",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 14 })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-plum-800 dark:text-plum-200", children: [
                  "$",
                  (price * item.quantity).toFixed(2)
                ] })
              ] })
            ] })
          ] }, item._id);
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card p-6 h-fit lg:sticky lg:top-24", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-lg text-plum-900 dark:text-plum-100 mb-4", children: "Order Summary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Subtotal", value: `$${subtotal.toFixed(2)}` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Shipping", value: shipping === 0 ? "Free" : `$${shipping.toFixed(2)}` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Estimated Tax", value: `$${tax.toFixed(2)}` }),
            subtotal < FREE_SHIPPING_THRESHOLD && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-plum-400", children: [
              "Add $",
              (FREE_SHIPPING_THRESHOLD - subtotal).toFixed(2),
              " more for free shipping."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-plum-100 dark:border-plum-800 pt-3 flex justify-between font-bold text-plum-900 dark:text-plum-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "$",
                total.toFixed(2)
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: goCheckout, className: "btn-primary w-full mt-6", children: [
            "Proceed to Checkout ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 18 })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/books", className: "block text-center text-sm text-plum-500 hover:text-plum-700 mt-4", children: "Continue shopping" })
        ] })
      ] })
    ] })
  ] });
}
const Row = ({ label, value }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-plum-600 dark:text-plum-300", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: label }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: value })
] });
export {
  Cart as default
};
//# sourceMappingURL=Cart-CKOgoIOL.js.map
