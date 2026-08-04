import { e as createLucideIcon, N as useLoginMutation, k as useDispatch, x as useNavigate, O as useLocation, r as reactExports, j as jsxRuntimeExports, L as Link, P as setCredentials, z as zt } from "./index-BtxuP7zD.js";
import { u as useForm } from "./index.esm-saVhEfjE.js";
import { S as Seo } from "./Seo-CTQV06H5.js";
import { E as EyeOff, a as Eye } from "./eye-l8aOt-Jm.js";
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const LogIn = createLucideIcon("LogIn", [
  ["path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4", key: "u53s6r" }],
  ["polyline", { points: "10 17 15 12 10 7", key: "1ail0h" }],
  ["line", { x1: "15", x2: "3", y1: "12", y2: "12", key: "v6grx8" }]
]);
function Login() {
  var _a, _b;
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [show, setShow] = reactExports.useState(false);
  const from = (_b = (_a = location.state) == null ? void 0 : _a.from) == null ? void 0 : _b.pathname;
  const onSubmit = async (data) => {
    var _a2;
    try {
      const res = await login(data).unwrap();
      dispatch(setCredentials({ user: res.user, token: res.token }));
      zt.success(`Welcome back, ${res.user.name.split(" ")[0]}!`);
      if (res.user.role === "admin") {
        navigate("/admin", { replace: true });
      } else {
        navigate(from || "/", { replace: true });
      }
    } catch (err) {
      zt.error(((_a2 = err == null ? void 0 : err.data) == null ? void 0 : _a2.message) || "Invalid credentials");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Seo, { title: "Login" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-x py-16 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md card p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-semibold text-plum-950 dark:text-plum-100 text-center", children: "Welcome back" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-sm text-plum-500 dark:text-plum-400 mt-2", children: "Log in to continue to BookHaven" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "mt-8 space-y-4", children: [
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-plum-700 dark:text-plum-300 mb-1.5", children: "Password" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                className: "input pr-11",
                type: show ? "text" : "password",
                placeholder: "••••••••",
                ...register("password", { required: "Password is required" })
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/forgot-password", className: "text-sm text-plum-700 dark:text-blush-400 hover:underline", children: "Forgot password?" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: isLoading, className: "btn-primary w-full", children: isLoading ? "Signing in..." : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Sign In ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { size: 18 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-sm text-plum-500 dark:text-plum-400 mt-6", children: [
        "Don't have an account?",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/register", className: "text-plum-700 dark:text-blush-400 font-medium hover:underline", children: "Create one" })
      ] })
    ] }) })
  ] });
}
export {
  Login as default
};
//# sourceMappingURL=Login-DV4LUMwB.js.map
