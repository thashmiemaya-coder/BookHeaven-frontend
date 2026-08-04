import { e as createLucideIcon, i as useParams, x as useNavigate, V as useResetPasswordMutation, j as jsxRuntimeExports, L as Link, z as zt } from "./index-BtxuP7zD.js";
import { u as useForm } from "./index.esm-saVhEfjE.js";
import { S as Seo } from "./Seo-CTQV06H5.js";
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const KeyRound = createLucideIcon("KeyRound", [
  [
    "path",
    {
      d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",
      key: "1s6t7t"
    }
  ],
  ["circle", { cx: "16.5", cy: "7.5", r: ".5", fill: "currentColor", key: "w0ekpg" }]
]);
function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [reset, { isLoading }] = useResetPasswordMutation();
  const password = watch("password");
  const onSubmit = async ({ password: password2 }) => {
    var _a;
    try {
      await reset({ token, password: password2 }).unwrap();
      zt.success("Password reset! Please log in.");
      navigate("/login", { replace: true });
    } catch (err) {
      zt.error(((_a = err == null ? void 0 : err.data) == null ? void 0 : _a.message) || "Reset failed or link expired");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Seo, { title: "Reset Password" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-x py-16 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md card p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-12 w-12 mx-auto place-items-center rounded-full bg-plum-100 dark:bg-plum-800 text-plum-700 dark:text-blush-400 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(KeyRound, { size: 22 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-semibold text-plum-950 dark:text-plum-100 text-center", children: "Set a new password" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "mt-8 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-plum-700 dark:text-plum-300 mb-1.5", children: "New Password" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              className: "input",
              type: "password",
              placeholder: "••••••••",
              ...register("password", { required: "Password is required", minLength: { value: 6, message: "Min 6 characters" } })
            }
          ),
          errors.password && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-500 mt-1", children: errors.password.message })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-plum-700 dark:text-plum-300 mb-1.5", children: "Confirm Password" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              className: "input",
              type: "password",
              placeholder: "••••••••",
              ...register("confirm", { required: "Please confirm", validate: (v) => v === password || "Passwords do not match" })
            }
          ),
          errors.confirm && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-500 mt-1", children: errors.confirm.message })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: isLoading, className: "btn-primary w-full", children: isLoading ? "Resetting..." : "Reset Password" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-sm text-plum-500 dark:text-plum-400 mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", className: "text-plum-700 dark:text-blush-400 font-medium hover:underline", children: "Back to login" }) })
    ] }) })
  ] });
}
export {
  ResetPassword as default
};
//# sourceMappingURL=ResetPassword-rByXPKLD.js.map
