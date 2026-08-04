import { a2 as useGetMyOrdersQuery, j as jsxRuntimeExports, c as Loader, L as Link } from "./index-BtxuP7zD.js";
import { S as Seo } from "./Seo-CTQV06H5.js";
import { P as Package } from "./package-BW29PJfH.js";
import { C as ChevronRight } from "./chevron-right-DmuPKAUI.js";
const STATUS_STYLES = {
  Processing: "bg-amber-100 text-amber-700",
  Confirmed: "bg-blue-100 text-blue-700",
  Shipped: "bg-indigo-100 text-indigo-700",
  "Out for Delivery": "bg-purple-100 text-purple-700",
  Delivered: "bg-green-100 text-green-700",
  Cancelled: "bg-red-100 text-red-700"
};
function Orders() {
  var _a;
  const { data, isLoading } = useGetMyOrdersQuery();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Seo, { title: "My Orders" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-x py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "section-title mb-8", children: "Order History" }),
      isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { full: true }) : ((_a = data == null ? void 0 : data.orders) == null ? void 0 : _a.length) ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: data.orders.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: `/orders/${o._id}`,
          className: "card p-5 flex items-center justify-between gap-4 hover:shadow-soft transition",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-12 w-12 shrink-0 place-items-center rounded-full bg-plum-100 dark:bg-plum-800 text-plum-700 dark:text-blush-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { size: 20 }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold text-plum-900 dark:text-plum-100", children: [
                  "Order #",
                  o._id.slice(-8).toUpperCase()
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-plum-400", children: [
                  new Date(o.createdAt).toLocaleDateString(),
                  " · ",
                  o.orderItems.length,
                  " item",
                  o.orderItems.length > 1 ? "s" : ""
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-block rounded-full px-3 py-1 text-xs font-medium ${STATUS_STYLES[o.orderStatus] || "bg-plum-100 text-plum-700"}`, children: o.orderStatus }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold text-plum-800 dark:text-plum-200 mt-1", children: [
                  "$",
                  o.totalPrice.toFixed(2)
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "text-plum-300", size: 20 })
            ] })
          ]
        },
        o._id
      )) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "mx-auto text-plum-200", size: 96, strokeWidth: 1 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-semibold text-plum-950 dark:text-plum-100 mt-6", children: "No orders yet" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-plum-500 dark:text-plum-400 mt-2", children: "When you place an order, it will appear here." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/books", className: "btn-primary mt-8 inline-flex", children: "Start Shopping" })
      ] })
    ] })
  ] });
}
export {
  Orders as default
};
//# sourceMappingURL=Orders-BbkA7UHp.js.map
