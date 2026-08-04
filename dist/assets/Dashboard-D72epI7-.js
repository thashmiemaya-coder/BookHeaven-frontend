import { e as createLucideIcon, a5 as useGetStatsQuery, j as jsxRuntimeExports, c as Loader, o as ShoppingCart, a6 as BookOpen, U as Users, L as Link } from "./index-BtxuP7zD.js";
import { S as Seo } from "./Seo-CTQV06H5.js";
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const DollarSign = createLucideIcon("DollarSign", [
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
  ["path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const TrendingUp = createLucideIcon("TrendingUp", [
  ["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }],
  ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const TriangleAlert = createLucideIcon("TriangleAlert", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);
const STATUS_STYLES = {
  Processing: "bg-amber-100 text-amber-700",
  Confirmed: "bg-blue-100 text-blue-700",
  Shipped: "bg-indigo-100 text-indigo-700",
  "Out for Delivery": "bg-purple-100 text-purple-700",
  Delivered: "bg-green-100 text-green-700",
  Cancelled: "bg-red-100 text-red-700"
};
function Dashboard() {
  var _a, _b, _c;
  const { data, isLoading } = useGetStatsQuery();
  if (isLoading) return /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { full: true });
  const s = (data == null ? void 0 : data.stats) || {};
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Seo, { title: "Admin Dashboard" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-semibold text-plum-950 dark:text-plum-100 mb-6", children: "Dashboard" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, {}), label: "Total Revenue", value: `$${(s.totalRevenue || 0).toFixed(2)}`, color: "bg-green-500" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, {}), label: "Total Orders", value: s.totalOrders || 0, color: "bg-blue-500" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, {}), label: "Total Books", value: s.totalBooks || 0, color: "bg-plum-600" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, {}), label: "Total Users", value: s.totalUsers || 0, color: "bg-blush-500" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 card p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-plum-900 dark:text-plum-100", children: "Recent Orders" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/admin/orders", className: "text-sm text-plum-700 dark:text-blush-400 hover:underline", children: "View all" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-left text-plum-400 border-b border-plum-100 dark:border-plum-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "pb-2 font-medium", children: "Order" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "pb-2 font-medium", children: "Customer" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "pb-2 font-medium", children: "Status" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "pb-2 font-medium text-right", children: "Total" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: ((_a = data == null ? void 0 : data.recentOrders) == null ? void 0 : _a.length) ? data.recentOrders.map((o) => {
              var _a2;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-plum-50 dark:border-plum-800/50", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 font-medium text-plum-800 dark:text-plum-200", children: [
                  "#",
                  o._id.slice(-6).toUpperCase()
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 text-plum-600 dark:text-plum-300", children: ((_a2 = o.user) == null ? void 0 : _a2.name) || "Guest" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `rounded-full px-2.5 py-0.5 text-xs font-medium ${STATUS_STYLES[o.orderStatus] || "bg-plum-100 text-plum-700"}`, children: o.orderStatus }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 text-right font-semibold text-plum-800 dark:text-plum-200", children: [
                  "$",
                  o.totalPrice.toFixed(2)
                ] })
              ] }, o._id);
            }) : /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 4, className: "py-6 text-center text-plum-400", children: "No orders yet" }) }) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-semibold text-plum-900 dark:text-plum-100 mb-4 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { size: 18 }),
              " Orders by Status"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: ((_b = data == null ? void 0 : data.ordersByStatus) == null ? void 0 : _b.length) ? data.ordersByStatus.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-plum-600 dark:text-plum-300", children: g._id }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-plum-800 dark:text-plum-200", children: g.count })
            ] }, g._id)) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-plum-400", children: "No data" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-semibold text-plum-900 dark:text-plum-100 mb-4 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { size: 18, className: "text-amber-500" }),
              " Low Stock"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: ((_c = data == null ? void 0 : data.lowStock) == null ? void 0 : _c.length) ? data.lowStock.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-plum-600 dark:text-plum-300 line-clamp-1 pr-2", children: b.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-amber-600 shrink-0", children: [
                b.stock,
                " left"
              ] })
            ] }, b._id)) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-plum-400", children: "All stocked up 🎉" }) })
          ] })
        ] })
      ] })
    ] })
  ] });
}
const StatCard = ({ icon, label, value, color }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card p-5 flex items-center gap-4", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `grid h-12 w-12 place-items-center rounded-xl ${color} text-white`, children: icon }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-plum-400", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl font-semibold text-plum-950 dark:text-plum-100", children: value })
  ] })
] });
export {
  Dashboard as default
};
//# sourceMappingURL=Dashboard-D72epI7-.js.map
