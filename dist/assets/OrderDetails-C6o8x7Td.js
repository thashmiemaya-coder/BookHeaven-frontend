import { e as createLucideIcon, i as useParams, a3 as useGetOrderQuery, a4 as useCancelOrderMutation, j as jsxRuntimeExports, c as Loader, L as Link, z as zt } from "./index-BtxuP7zD.js";
import { S as Seo } from "./Seo-CTQV06H5.js";
import { L as LazyImage } from "./LazyImage-BzZeTy7O.js";
import { C as ChevronLeft } from "./chevron-left-DO3rIEZJ.js";
import { M as MapPin } from "./map-pin-Xxv8PiCn.js";
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CircleCheck = createLucideIcon("CircleCheck", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CircleX = createLucideIcon("CircleX", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Circle = createLucideIcon("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
const FLOW = ["Processing", "Confirmed", "Shipped", "Out for Delivery", "Delivered"];
function OrderDetails() {
  var _a, _b, _c, _d, _e, _f;
  const { id } = useParams();
  const { data, isLoading, isError } = useGetOrderQuery(id);
  const [cancelOrder, { isLoading: cancelling }] = useCancelOrderMutation();
  if (isLoading) return /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { full: true });
  if (isError || !(data == null ? void 0 : data.order)) return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x py-20 text-center text-plum-500", children: [
    "Order not found. ",
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/orders", className: "text-plum-700 hover:underline", children: "Back to orders" })
  ] });
  const o = data.order;
  const cancelled = o.orderStatus === "Cancelled";
  const currentIdx = FLOW.indexOf(o.orderStatus);
  const canCancel = ["Processing", "Confirmed"].includes(o.orderStatus);
  const handleCancel = async () => {
    var _a2;
    try {
      await cancelOrder(o._id).unwrap();
      zt.success("Order cancelled");
    } catch (err) {
      zt.error(((_a2 = err == null ? void 0 : err.data) == null ? void 0 : _a2.message) || "Could not cancel order");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Seo, { title: `Order #${o._id.slice(-8).toUpperCase()}` }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-x py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/orders", className: "inline-flex items-center gap-1 text-sm text-plum-500 hover:text-plum-700 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 16 }),
        " Back to orders"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-4 mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-2xl md:text-3xl font-semibold text-plum-950 dark:text-plum-100", children: [
            "Order #",
            o._id.slice(-8).toUpperCase()
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-plum-400 mt-1", children: [
            "Placed on ",
            new Date(o.createdAt).toLocaleString()
          ] })
        ] }),
        canCancel && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: handleCancel,
            disabled: cancelling,
            className: "btn-ghost text-red-500 border border-red-200 hover:bg-red-50",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { size: 18 }),
              " Cancel Order"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1fr_360px] gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-lg text-plum-900 dark:text-plum-100 mb-6", children: "Order Tracking" }),
            cancelled ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-red-500", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { size: 24 }),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "This order was cancelled." })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "relative", children: FLOW.map((step, i) => {
              const done = i <= currentIdx;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-4 pb-6 last:pb-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
                  done ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "text-plum-700 dark:text-blush-400", size: 24 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Circle, { className: "text-plum-200 dark:text-plum-700", size: 24 }),
                  i < FLOW.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `w-0.5 flex-1 mt-1 ${i < currentIdx ? "bg-plum-700 dark:bg-blush-400" : "bg-plum-100 dark:bg-plum-800"}` })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `font-medium ${done ? "text-plum-900 dark:text-plum-100" : "text-plum-400"}`, children: step }),
                  step === o.orderStatus && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-plum-400", children: "Current status" })
                ] })
              ] }, step);
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-lg text-plum-900 dark:text-plum-100 mb-4", children: "Items" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: o.orderItems.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-20 w-14 shrink-0 rounded-lg overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LazyImage, { src: it.image, alt: it.title, className: "h-full w-full" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-plum-900 dark:text-plum-100", children: it.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-plum-400", children: it.author }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-plum-500 mt-1", children: [
                  "Qty: ",
                  it.quantity,
                  " × $",
                  it.price.toFixed(2)
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-plum-800 dark:text-plum-200", children: [
                "$",
                (it.price * it.quantity).toFixed(2)
              ] })
            ] }, i)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-semibold text-plum-900 dark:text-plum-100 mb-4 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 18 }),
              " Shipping"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-plum-600 dark:text-plum-300 space-y-0.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-plum-900 dark:text-plum-100", children: (_a = o.shippingAddress) == null ? void 0 : _a.fullName }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: (_b = o.shippingAddress) == null ? void 0 : _b.address }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                (_c = o.shippingAddress) == null ? void 0 : _c.city,
                ", ",
                (_d = o.shippingAddress) == null ? void 0 : _d.postalCode
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: (_e = o.shippingAddress) == null ? void 0 : _e.country }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: (_f = o.shippingAddress) == null ? void 0 : _f.phone })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-plum-900 dark:text-plum-100 mb-4", children: "Payment Summary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Items", value: `$${o.itemsPrice.toFixed(2)}` }),
              o.discount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Discount", value: `-$${o.discount.toFixed(2)}`, accent: true }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Shipping", value: o.shippingPrice === 0 ? "Free" : `$${o.shippingPrice.toFixed(2)}` }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Tax", value: `$${o.taxPrice.toFixed(2)}` }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-plum-100 dark:border-plum-800 pt-2 flex justify-between font-bold text-plum-900 dark:text-plum-100", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "$",
                  o.totalPrice.toFixed(2)
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-4 border-t border-plum-100 dark:border-plum-800 text-sm space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-plum-500", children: [
                "Method: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-plum-800 dark:text-plum-200 uppercase", children: o.paymentMethod })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-plum-500", children: [
                "Payment: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-medium ${o.isPaid ? "text-green-600" : "text-amber-600"}`, children: o.isPaid ? "Paid" : "Pending" })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
}
const Row = ({ label, value, accent }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-plum-600 dark:text-plum-300", children: label }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: accent ? "text-blush-500 font-medium" : "text-plum-800 dark:text-plum-200", children: value })
] });
export {
  OrderDetails as default
};
//# sourceMappingURL=OrderDetails-C6o8x7Td.js.map
