import { T as useForgotPasswordMutation, r as reactExports, j as jsxRuntimeExports, M as Mail, L as Link, z as zt } from "./index-BtxuP7zD.js";
import { u as useForm } from "./index.esm-saVhEfjE.js";
import { S as Seo } from "./Seo-CTQV06H5.js";
function ForgotPassword() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [forgot, { isLoading }] = useForgotPasswordMutation();
  const [sent, setSent] = reactExports.useState(false);
  const onSubmit = async (data) => {
    var _a;
    try {
      await forgot(data).unwrap();
      setSent(true);
      zt.success("Reset link sent if the email exists");
    } catch (err) {
      zt.error(((_a = err == null ? void 0 : err.data) == null ? void 0 : _a.message) || "Request failed");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Seo, { title: "Forgot Password" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-x py-16 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md card p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-12 w-12 mx-auto place-items-center rounded-full bg-plum-100 dark:bg-plum-800 text-plum-700 dark:text-blush-400 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 22 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-semibold text-plum-950 dark:text-plum-100 text-center", children: "Forgot your password?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-sm text-plum-500 dark:text-plum-400 mt-2", children: "Enter your email and we'll send you a link to reset it." }),
      sent ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 rounded-xl bg-plum-50 dark:bg-plum-900/50 p-4 text-center text-sm text-plum-600 dark:text-plum-300", children: "Check your inbox for a reset link. It expires in 15 minutes." }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "mt-8 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-plum-700 dark:text-plum-300 mb-1.5", children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              className: "input",
              type: "email",
              placeholder: "you@example.com",
              ...register("email", { required: "Email is required" })
            }
          ),
          errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-500 mt-1", children: errors.email.message })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: isLoading, className: "btn-primary w-full", children: isLoading ? "Sending..." : "Send Reset Link" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-sm text-plum-500 dark:text-plum-400 mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", className: "text-plum-700 dark:text-blush-400 font-medium hover:underline", children: "Back to login" }) })
    ] }) })
  ] });
}
export {
  ForgotPassword as default
};
//# sourceMappingURL=ForgotPassword-DZ9ay1nv.js.map
