import { e as createLucideIcon, Q as useRegisterMutation, k as useDispatch, x as useNavigate, r as reactExports, j as jsxRuntimeExports, L as Link, P as setCredentials, z as zt } from "./index-BtxuP7zD.js";
import { u as useForm } from "./index.esm-saVhEfjE.js";
import { S as Seo } from "./Seo-CTQV06H5.js";
import { E as EyeOff, a as Eye } from "./eye-l8aOt-Jm.js";
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const UserPlus = createLucideIcon("UserPlus", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }],
  ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }]
]);
function Register() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [signup, { isLoading }] = useRegisterMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = reactExports.useState(false);
  const password = watch("password");
  const onSubmit = async ({ confirm, ...data }) => {
    var _a;
    try {
      const res = await signup(data).unwrap();
      dispatch(setCredentials({ user: res.user, token: res.token }));
      zt.success("Account created. Welcome to BookHaven!");
      navigate("/", { replace: true });
    } catch (err) {
      zt.error(((_a = err == null ? void 0 : err.data) == null ? void 0 : _a.message) || "Registration failed");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Seo, { title: "Create Account" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-x py-16 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md card p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-semibold text-plum-950 dark:text-plum-100 text-center", children: "Create your account" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-sm text-plum-500 dark:text-plum-400 mt-2", children: "Join BookHaven and start your reading journey" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "mt-8 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-plum-700 dark:text-plum-300 mb-1.5", children: "Full Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              className: "input",
              placeholder: "Jane Reader",
              ...register("name", { required: "Name is required", minLength: { value: 2, message: "Too short" } })
            }
          ),
          errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-500 mt-1", children: errors.name.message })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-plum-700 dark:text-plum-300 mb-1.5", children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              className: "input",
              type: "email",
              placeholder: "you@example.com",
              ...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/, message: "Invalid email" } })
            }
          ),
          errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-500 mt-1", children: errors.email.message })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-plum-700 dark:text-plum-300 mb-1.5", children: "Password" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                className: "input pr-11",
                type: show ? "text" : "password",
                placeholder: "••••••••",
                ...register("password", { required: "Password is required", minLength: { value: 6, message: "Min 6 characters" } })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setShow((s) => !s),
                className: "absolute right-3 top-1/2 -translate-y-1/2 text-plum-400 hover:text-plum-700",
                children: show ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { size: 18 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { size: 18 })
              }
            )
          ] }),
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: isLoading, className: "btn-primary w-full", children: isLoading ? "Creating..." : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Create Account ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { size: 18 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-sm text-plum-500 dark:text-plum-400 mt-6", children: [
        "Already have an account?",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", className: "text-plum-700 dark:text-blush-400 font-medium hover:underline", children: "Sign in" })
      ] })
    ] }) })
  ] });
}
export {
  Register as default
};
//# sourceMappingURL=Register-mPunkl5t.js.map
