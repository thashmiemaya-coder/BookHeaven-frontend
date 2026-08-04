import { e as createLucideIcon, j as jsxRuntimeExports, z as zt, r as reactExports, aa as useGetSalesReportQuery, c as Loader, g as useGetCategoriesQuery, ab as useCreateCategoryMutation, ac as useDeleteCategoryMutation, ad as useGetSubscribersQuery, ae as useBroadcastMutation, M as Mail, af as useGetCouponsQuery, ag as useCreateCouponMutation, ah as useDeleteCouponMutation, ai as useGetMessagesQuery, aj as useUpdateMessageMutation, X, ak as useGetAllReviewsQuery, al as useApproveReviewMutation, am as useDeleteReviewMutation, an as useGetUsersQuery, ao as useUpdateUserRoleMutation, ap as useToggleUserActiveMutation, aq as useDeleteUserMutation, ar as useGetAllOrdersQuery, as as useUpdateOrderStatusMutation } from "./index-BtxuP7zD.js";
import { u as useForm } from "./index.esm-saVhEfjE.js";
import { S as Seo } from "./Seo-CTQV06H5.js";
import { T as Trash2 } from "./trash-2-DMOeXMOr.js";
import { S as Send } from "./send-DT5B-dD3.js";
import { P as Plus } from "./plus-CYPWSy_R.js";
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Check = createLucideIcon("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
const PANELS = {
  "Order Management": OrderPanel,
  "User Management": UserPanel,
  "Reviews Management": ReviewPanel,
  "Contact Messages": MessagePanel,
  "Coupons": CouponPanel,
  "Newsletter Subscribers": SubscriberPanel,
  "Category Management": CategoryPanel,
  "Sales Reports": ReportPanel,
  "Settings": SettingsPanel
};
function AdminPlaceholder({ title }) {
  const Panel = PANELS[title];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Seo, { title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-semibold text-plum-950 dark:text-plum-100 mb-6", children: title }),
    Panel ? /* @__PURE__ */ jsxRuntimeExports.jsx(Panel, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(ComingSoon, { title })
  ] });
}
const Card = ({ children, className = "" }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `card overflow-hidden ${className}`, children });
const Th = ({ children, right }) => /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: `p-4 font-medium text-plum-400 ${right ? "text-right" : "text-left"}`, children });
const Td = ({ children, right }) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: `p-4 text-plum-700 dark:text-plum-300 ${right ? "text-right" : ""}`, children });
const Empty = ({ cols, text }) => /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: cols, className: "p-8 text-center text-plum-400", children: text }) });
const STATUS = ["Processing", "Confirmed", "Shipped", "Out for Delivery", "Delivered", "Cancelled"];
function OrderPanel() {
  var _a;
  const { data, isLoading } = useGetAllOrdersQuery();
  const [updateStatus] = useUpdateOrderStatusMutation();
  if (isLoading) return /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {});
  const change = async (id, orderStatus) => {
    var _a2;
    try {
      await updateStatus({ id, orderStatus }).unwrap();
      zt.success("Status updated");
    } catch (e) {
      zt.error(((_a2 = e == null ? void 0 : e.data) == null ? void 0 : _a2.message) || "Failed");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    (data == null ? void 0 : data.revenue) != null && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-4 text-sm text-plum-500", children: [
      "Total revenue: ",
      /* @__PURE__ */ jsxRuntimeExports.jsxs("b", { className: "text-plum-800 dark:text-plum-200", children: [
        "$",
        data.revenue.toFixed(2)
      ] }),
      " across ",
      data.count,
      " orders"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-plum-100 dark:border-plum-800", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Order" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Customer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Date" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Total" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Paid" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Status" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: ((_a = data == null ? void 0 : data.orders) == null ? void 0 : _a.length) ? data.orders.map((o) => {
        var _a2;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-plum-50 dark:border-plum-800/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Td, { children: [
            "#",
            o._id.slice(-6).toUpperCase()
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: ((_a2 = o.user) == null ? void 0 : _a2.name) || "Guest" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: new Date(o.createdAt).toLocaleDateString() }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Td, { children: [
            "$",
            o.totalPrice.toFixed(2)
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: o.isPaid ? "text-green-600" : "text-amber-600", children: o.isPaid ? "Yes" : "No" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "select",
            {
              value: o.orderStatus,
              onChange: (e) => change(o._id, e.target.value),
              className: "input py-1.5 text-xs w-auto",
              children: STATUS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: s, children: s }, s))
            }
          ) })
        ] }, o._id);
      }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Empty, { cols: 6, text: "No orders" }) })
    ] }) }) })
  ] });
}
function UserPanel() {
  var _a, _b;
  const { data, isLoading } = useGetUsersQuery();
  const [updateRole] = useUpdateUserRoleMutation();
  const [toggleActive] = useToggleUserActiveMutation();
  const [deleteUser] = useDeleteUserMutation();
  if (isLoading) return /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {});
  const act = async (fn, ...args) => {
    var _a2;
    try {
      await fn(...args).unwrap();
      zt.success("Updated");
    } catch (e) {
      zt.error(((_a2 = e == null ? void 0 : e.data) == null ? void 0 : _a2.message) || "Failed");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-plum-100 dark:border-plum-800", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Name" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Email" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Role" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Status" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { right: true, children: "Actions" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
      (_a = data == null ? void 0 : data.users) == null ? void 0 : _a.map((u) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-plum-50 dark:border-plum-800/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: u.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: u.email }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            value: u.role,
            onChange: (e) => act(updateRole, { id: u._id, role: e.target.value }),
            className: "input py-1.5 text-xs w-auto",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "customer", children: "customer" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "admin", children: "admin" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => act(toggleActive, u._id),
            className: `rounded-full px-2.5 py-0.5 text-xs font-medium ${u.isActive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`,
            children: u.isActive ? "Active" : "Disabled"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { right: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => confirm("Delete user?") && act(deleteUser, u._id),
            className: "grid h-9 w-9 ml-auto place-items-center rounded-lg bg-red-50 text-red-500 hover:bg-red-100",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 16 })
          }
        ) })
      ] }, u._id)),
      !((_b = data == null ? void 0 : data.users) == null ? void 0 : _b.length) && /* @__PURE__ */ jsxRuntimeExports.jsx(Empty, { cols: 5, text: "No users" })
    ] })
  ] }) }) });
}
function ReviewPanel() {
  var _a, _b;
  const { data, isLoading } = useGetAllReviewsQuery();
  const [approve] = useApproveReviewMutation();
  const [del] = useDeleteReviewMutation();
  if (isLoading) return /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {});
  const act = async (fn, id) => {
    try {
      await fn(id).unwrap();
      zt.success("Done");
    } catch (e) {
      zt.error("Failed");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-plum-100 dark:border-plum-800", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Reviewer" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Book" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Rating" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Comment" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Approved" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { right: true, children: "Actions" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
      (_a = data == null ? void 0 : data.reviews) == null ? void 0 : _a.map((r) => {
        var _a2;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-plum-50 dark:border-plum-800/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: r.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: ((_a2 = r.book) == null ? void 0 : _a2.title) || "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Td, { children: [
            r.rating,
            "★"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "line-clamp-1 max-w-xs", children: r.comment }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: r.isApproved ? "text-green-600" : "text-amber-600", children: r.isApproved ? "Yes" : "Pending" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { right: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2", children: [
            !r.isApproved && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => act(approve, r._id), className: "grid h-9 w-9 place-items-center rounded-lg bg-green-50 text-green-600 hover:bg-green-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 16 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => confirm("Delete review?") && act(del, r._id), className: "grid h-9 w-9 place-items-center rounded-lg bg-red-50 text-red-500 hover:bg-red-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 16 }) })
          ] }) })
        ] }, r._id);
      }),
      !((_b = data == null ? void 0 : data.reviews) == null ? void 0 : _b.length) && /* @__PURE__ */ jsxRuntimeExports.jsx(Empty, { cols: 6, text: "No reviews" })
    ] })
  ] }) }) });
}
function MessagePanel() {
  var _a, _b;
  const { data, isLoading } = useGetMessagesQuery();
  const [updateMessage] = useUpdateMessageMutation();
  const [open, setOpen] = reactExports.useState(null);
  if (isLoading) return /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {});
  const setStatus = async (id, status) => {
    try {
      await updateMessage({ id, status }).unwrap();
      zt.success("Updated");
    } catch {
      zt.error("Failed");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-plum-100 dark:border-plum-800", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "From" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Subject" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Date" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { right: true, children: "Action" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
        (_a = data == null ? void 0 : data.messages) == null ? void 0 : _a.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-plum-50 dark:border-plum-800/50 cursor-pointer hover:bg-plum-50/50 dark:hover:bg-plum-900/30", onClick: () => setOpen(m), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Td, { children: [
            m.name,
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-plum-400", children: m.email })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: m.subject }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: new Date(m.createdAt).toLocaleDateString() }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-plum-100 dark:bg-plum-800 px-2.5 py-0.5 text-xs capitalize", children: m.status }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { right: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: (e) => {
                e.stopPropagation();
                setStatus(m._id, m.status === "new" ? "read" : "replied");
              },
              className: "text-xs text-plum-700 dark:text-blush-400 hover:underline",
              children: [
                "Mark ",
                m.status === "new" ? "read" : "replied"
              ]
            }
          ) })
        ] }, m._id)),
        !((_b = data == null ? void 0 : data.messages) == null ? void 0 : _b.length) && /* @__PURE__ */ jsxRuntimeExports.jsx(Empty, { cols: 5, text: "No messages" })
      ] })
    ] }) }) }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 grid place-items-center bg-black/40 p-4", onClick: () => setOpen(null), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card w-full max-w-lg p-6", onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-lg text-plum-900 dark:text-plum-100", children: open.subject }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-plum-400", children: [
            open.name,
            " · ",
            open.email
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setOpen(null), className: "text-plum-400 hover:text-plum-700", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 20 }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-plum-600 dark:text-plum-300 whitespace-pre-wrap", children: open.message })
    ] }) })
  ] });
}
function CouponPanel() {
  var _a, _b;
  const { data, isLoading } = useGetCouponsQuery();
  const [createCoupon, { isLoading: creating }] = useCreateCouponMutation();
  const [deleteCoupon] = useDeleteCouponMutation();
  const { register, handleSubmit, reset } = useForm({ defaultValues: { discountType: "percentage" } });
  const [showForm, setShowForm] = reactExports.useState(false);
  if (isLoading) return /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {});
  const onSubmit = async (f) => {
    var _a2;
    try {
      await createCoupon({
        code: f.code.toUpperCase(),
        discountType: f.discountType,
        discountValue: Number(f.discountValue),
        minPurchase: Number(f.minPurchase || 0),
        maxDiscount: f.maxDiscount ? Number(f.maxDiscount) : void 0,
        usageLimit: f.usageLimit ? Number(f.usageLimit) : void 0,
        expiresAt: f.expiresAt || void 0
      }).unwrap();
      zt.success("Coupon created");
      reset();
      setShowForm(false);
    } catch (e) {
      zt.error(((_a2 = e == null ? void 0 : e.data) == null ? void 0 : _a2.message) || "Failed");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setShowForm((s) => !s), className: "btn-primary mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 18 }),
      " New Coupon"
    ] }),
    showForm && /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "card p-5 mb-5 grid sm:grid-cols-3 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input", placeholder: "CODE", ...register("code", { required: true }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "input", ...register("discountType"), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "percentage", children: "Percentage" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "fixed", children: "Fixed ($)" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input", type: "number", step: "0.01", placeholder: "Value", ...register("discountValue", { required: true }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input", type: "number", step: "0.01", placeholder: "Min purchase", ...register("minPurchase") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input", type: "number", step: "0.01", placeholder: "Max discount", ...register("maxDiscount") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input", type: "number", placeholder: "Usage limit", ...register("usageLimit") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input sm:col-span-2", type: "date", ...register("expiresAt") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: creating, className: "btn-primary", children: creating ? "Saving..." : "Create" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-plum-100 dark:border-plum-800", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Code" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Type" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Value" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Min" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Used" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Expires" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { right: true, children: "Action" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
        (_a = data == null ? void 0 : data.coupons) == null ? void 0 : _a.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-plum-50 dark:border-plum-800/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-medium text-plum-800 dark:text-plum-200", children: c.code }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: c.discountType }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: c.discountType === "percentage" ? `${c.discountValue}%` : `$${c.discountValue}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Td, { children: [
            "$",
            c.minPurchase
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Td, { children: [
            c.usedCount,
            c.usageLimit ? `/${c.usageLimit}` : ""
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: c.expiresAt ? new Date(c.expiresAt).toLocaleDateString() : "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { right: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => confirm("Delete coupon?") && deleteCoupon(c._id), className: "grid h-9 w-9 ml-auto place-items-center rounded-lg bg-red-50 text-red-500 hover:bg-red-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 16 }) }) })
        ] }, c._id)),
        !((_b = data == null ? void 0 : data.coupons) == null ? void 0 : _b.length) && /* @__PURE__ */ jsxRuntimeExports.jsx(Empty, { cols: 7, text: "No coupons" })
      ] })
    ] }) }) })
  ] });
}
function SubscriberPanel() {
  var _a, _b;
  const { data, isLoading } = useGetSubscribersQuery();
  const [broadcast, { isLoading: sending }] = useBroadcastMutation();
  const { register, handleSubmit, reset } = useForm();
  if (isLoading) return /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {});
  const onSubmit = async (f) => {
    var _a2;
    try {
      await broadcast(f).unwrap();
      zt.success("Broadcast sent");
      reset();
    } catch (e) {
      zt.error(((_a2 = e == null ? void 0 : e.data) == null ? void 0 : _a2.message) || "Failed");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1fr_360px] gap-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-plum-100 dark:border-plum-800", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Subscribed" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Since" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
        (_a = data == null ? void 0 : data.subscribers) == null ? void 0 : _a.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-plum-50 dark:border-plum-800/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: s.email }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: s.isSubscribed ? "text-green-600" : "text-red-500", children: s.isSubscribed ? "Yes" : "No" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: new Date(s.createdAt).toLocaleDateString() })
        ] }, s._id)),
        !((_b = data == null ? void 0 : data.subscribers) == null ? void 0 : _b.length) && /* @__PURE__ */ jsxRuntimeExports.jsx(Empty, { cols: 3, text: "No subscribers" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "card p-6 h-fit", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-semibold text-plum-900 dark:text-plum-100 mb-4 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 18 }),
        " Send Broadcast"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input mb-3", placeholder: "Subject", ...register("subject", { required: true }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 5, className: "input resize-none mb-3", placeholder: "Message (HTML supported)", ...register("message", { required: true }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: sending, className: "btn-primary w-full", children: sending ? "Sending..." : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Send to All ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 16 })
      ] }) })
    ] })
  ] });
}
function CategoryPanel() {
  var _a, _b;
  const { data, isLoading } = useGetCategoriesQuery();
  const [createCategory, { isLoading: creating }] = useCreateCategoryMutation();
  const [deleteCategory] = useDeleteCategoryMutation();
  const { register, handleSubmit, reset } = useForm();
  if (isLoading) return /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {});
  const onSubmit = async (f) => {
    var _a2;
    try {
      await createCategory(f).unwrap();
      zt.success("Category created");
      reset();
    } catch (e) {
      zt.error(((_a2 = e == null ? void 0 : e.data) == null ? void 0 : _a2.message) || "Failed");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1fr_320px] gap-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-plum-100 dark:border-plum-800", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Slug" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { right: true, children: "Action" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
        (_a = data == null ? void 0 : data.categories) == null ? void 0 : _a.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-plum-50 dark:border-plum-800/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: c.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: c.slug }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { right: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => confirm("Delete category?") && deleteCategory(c._id).unwrap().then(() => zt.success("Deleted")).catch((e) => {
                var _a2;
                return zt.error(((_a2 = e == null ? void 0 : e.data) == null ? void 0 : _a2.message) || "Failed");
              }),
              className: "grid h-9 w-9 ml-auto place-items-center rounded-lg bg-red-50 text-red-500 hover:bg-red-100",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 16 })
            }
          ) })
        ] }, c._id)),
        !((_b = data == null ? void 0 : data.categories) == null ? void 0 : _b.length) && /* @__PURE__ */ jsxRuntimeExports.jsx(Empty, { cols: 3, text: "No categories" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "card p-6 h-fit", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-plum-900 dark:text-plum-100 mb-4", children: "Add Category" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input mb-3", placeholder: "Name", ...register("name", { required: true }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 3, className: "input resize-none mb-3", placeholder: "Description (optional)", ...register("description") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: creating, className: "btn-primary w-full", children: creating ? "Saving..." : "Create Category" })
    ] })
  ] });
}
function ReportPanel() {
  var _a, _b, _c;
  const [range, setRange] = reactExports.useState("monthly");
  const { data, isLoading } = useGetSalesReportQuery(range);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 mb-5", children: ["daily", "monthly", "yearly"].map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => setRange(r),
        className: `rounded-lg px-4 py-2 text-sm font-medium capitalize transition ${range === r ? "bg-plum-700 text-white" : "bg-plum-100 dark:bg-plum-800 text-plum-700 dark:text-plum-200"}`,
        children: r
      },
      r
    )) }),
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-semibold text-plum-900 dark:text-plum-100 mb-4", children: [
          "Sales (",
          range,
          ")"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 text-sm max-h-72 overflow-auto", children: ((_a = data == null ? void 0 : data.sales) == null ? void 0 : _a.length) ? data.sales.map((s) => {
          var _a2;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-b border-plum-50 dark:border-plum-800/50 pb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-plum-500", children: s._id }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium text-plum-800 dark:text-plum-200", children: [
              "$",
              (_a2 = s.revenue) == null ? void 0 : _a2.toFixed(2),
              " · ",
              s.orders,
              " orders"
            ] })
          ] }, s._id);
        }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-plum-400", children: "No sales data" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-plum-900 dark:text-plum-100 mb-4", children: "Top Books" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 text-sm", children: ((_b = data == null ? void 0 : data.topBooks) == null ? void 0 : _b.length) ? data.topBooks.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-plum-600 dark:text-plum-300 line-clamp-1 pr-2", children: b.title || b._id }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium text-plum-800 dark:text-plum-200 shrink-0", children: [
              b.units,
              " sold"
            ] })
          ] }, i)) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-plum-400", children: "No data" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-plum-900 dark:text-plum-100 mb-4", children: "Top Categories" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 text-sm", children: ((_c = data == null ? void 0 : data.topCategories) == null ? void 0 : _c.length) ? data.topCategories.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-plum-600 dark:text-plum-300", children: c.name || c._id }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium text-plum-800 dark:text-plum-200", children: [
              c.units,
              " sold"
            ] })
          ] }, i)) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-plum-400", children: "No data" }) })
        ] })
      ] })
    ] })
  ] });
}
function SettingsPanel() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-plum-900 dark:text-plum-100 mb-4", children: "Store Information" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-plum-700 dark:text-plum-300 mb-1.5", children: "Store Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input", defaultValue: "BookHaven" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-plum-700 dark:text-plum-300 mb-1.5", children: "Support Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input", defaultValue: "hello@bookhaven.com" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-plum-700 dark:text-plum-300 mb-1.5", children: "Free Shipping Over ($)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input", type: "number", defaultValue: 50 })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-plum-700 dark:text-plum-300 mb-1.5", children: "Tax Rate (%)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input", type: "number", defaultValue: 5 })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => zt.success("Settings saved (demo)"), className: "btn-primary", children: "Save Settings" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-plum-900 dark:text-plum-100 mb-4", children: "About" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-plum-500 dark:text-plum-400 leading-relaxed", children: [
        "These store-level preferences are wired to the UI as a starting point. Persist them by adding a",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "mx-1 rounded bg-plum-100 dark:bg-plum-800 px-1.5 py-0.5 text-xs", children: "Settings" }),
        "model and a small REST endpoint — the admin layout, auth, and RTK Query plumbing are already in place, so it's a matter of following the existing controller/route pattern."
      ] })
    ] })
  ] });
}
const ComingSoon = ({ title }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card p-16 text-center text-plum-400", children: [
  title,
  " panel coming soon."
] });
export {
  AdminPlaceholder as default
};
//# sourceMappingURL=AdminPlaceholder-BYNt-j3A.js.map
