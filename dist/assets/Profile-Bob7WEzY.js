import { l as useSelector, s as selectUser, r as reactExports, j as jsxRuntimeExports, W as User, H as Heart, L as Link, k as useDispatch, Y as useLogoutMutation, Z as LogOut, _ as useUpdateProfileMutation, $ as useUpdatePasswordMutation, a0 as logOut, z as zt, a1 as updateUser } from "./index-BtxuP7zD.js";
import { u as useForm } from "./index.esm-saVhEfjE.js";
import { S as Seo } from "./Seo-CTQV06H5.js";
import { L as Lock } from "./lock-DBYoAH3C.js";
import { P as Package } from "./package-BW29PJfH.js";
function Profile() {
  var _a;
  const user = useSelector(selectUser);
  const [tab, setTab] = reactExports.useState("profile");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Seo, { title: "My Profile" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-x py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "section-title mb-8", children: "My Account" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[260px_1fr] gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "card p-5 h-fit", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 pb-4 border-b border-plum-100 dark:border-plum-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-12 w-12 place-items-center rounded-full bg-plum-700 text-white font-display text-lg", children: (_a = user == null ? void 0 : user.name) == null ? void 0 : _a.charAt(0).toUpperCase() }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-plum-900 dark:text-plum-100 truncate", children: user == null ? void 0 : user.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-plum-400 truncate", children: user == null ? void 0 : user.email })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "mt-4 space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabBtn, { active: tab === "profile", onClick: () => setTab("profile"), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { size: 18 }), children: "Profile" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabBtn, { active: tab === "password", onClick: () => setTab("password"), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { size: 18 }), children: "Password" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { to: "/orders", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { size: 18 }), children: "My Orders" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { to: "/wishlist", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 18 }), children: "Wishlist" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(LogoutBtn, {})
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: tab === "profile" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ProfileForm, { user }) : /* @__PURE__ */ jsxRuntimeExports.jsx(PasswordForm, {}) })
      ] })
    ] })
  ] });
}
function ProfileForm({ user }) {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: { name: user == null ? void 0 : user.name, phone: (user == null ? void 0 : user.phone) || "" }
  });
  const [updateProfile, { isLoading }] = useUpdateProfileMutation();
  const onSubmit = async (data) => {
    var _a;
    try {
      const res = await updateProfile(data).unwrap();
      dispatch(updateUser(res.user));
      zt.success("Profile updated");
    } catch (err) {
      zt.error(((_a = err == null ? void 0 : err.data) == null ? void 0 : _a.message) || "Update failed");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "card p-6 md:p-8 max-w-xl space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-lg text-plum-900 dark:text-plum-100", children: "Profile Information" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-plum-700 dark:text-plum-300 mb-1.5", children: "Full Name" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input", ...register("name", { required: "Name is required" }) }),
      errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-500 mt-1", children: errors.name.message })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-plum-700 dark:text-plum-300 mb-1.5", children: "Email" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input opacity-60 cursor-not-allowed", value: user == null ? void 0 : user.email, disabled: true })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-plum-700 dark:text-plum-300 mb-1.5", children: "Phone" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input", placeholder: "Optional", ...register("phone") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: isLoading, className: "btn-primary", children: isLoading ? "Saving..." : "Save Changes" })
  ] });
}
function PasswordForm() {
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
  const [updatePassword, { isLoading }] = useUpdatePasswordMutation();
  const newPassword = watch("newPassword");
  const onSubmit = async ({ currentPassword, newPassword: newPassword2 }) => {
    var _a;
    try {
      await updatePassword({ currentPassword, newPassword: newPassword2 }).unwrap();
      zt.success("Password updated");
      reset();
    } catch (err) {
      zt.error(((_a = err == null ? void 0 : err.data) == null ? void 0 : _a.message) || "Update failed");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "card p-6 md:p-8 max-w-xl space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-lg text-plum-900 dark:text-plum-100", children: "Change Password" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-plum-700 dark:text-plum-300 mb-1.5", children: "Current Password" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", className: "input", ...register("currentPassword", { required: "Required" }) }),
      errors.currentPassword && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-500 mt-1", children: errors.currentPassword.message })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-plum-700 dark:text-plum-300 mb-1.5", children: "New Password" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", className: "input", ...register("newPassword", { required: "Required", minLength: { value: 6, message: "Min 6 characters" } }) }),
      errors.newPassword && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-500 mt-1", children: errors.newPassword.message })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-plum-700 dark:text-plum-300 mb-1.5", children: "Confirm New Password" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", className: "input", ...register("confirm", { validate: (v) => v === newPassword || "Passwords do not match" }) }),
      errors.confirm && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-500 mt-1", children: errors.confirm.message })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: isLoading, className: "btn-primary", children: isLoading ? "Updating..." : "Update Password" })
  ] });
}
const TabBtn = ({ active, onClick, icon, children }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  "button",
  {
    onClick,
    className: `w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${active ? "bg-plum-700 text-white" : "text-plum-600 dark:text-plum-300 hover:bg-plum-100 dark:hover:bg-plum-800"}`,
    children: [
      icon,
      " ",
      children
    ]
  }
);
const NavLink = ({ to, icon, children }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Link,
  {
    to,
    className: "w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-plum-600 dark:text-plum-300 hover:bg-plum-100 dark:hover:bg-plum-800 transition",
    children: [
      icon,
      " ",
      children
    ]
  }
);
function LogoutBtn() {
  const dispatch = useDispatch();
  const [logout] = useLogoutMutation();
  const handle = async () => {
    try {
      await logout().unwrap();
    } catch {
    }
    dispatch(logOut());
    zt.success("Logged out");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      onClick: handle,
      className: "w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 transition",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { size: 18 }),
        " Logout"
      ]
    }
  );
}
export {
  Profile as default
};
//# sourceMappingURL=Profile-Bob7WEzY.js.map
