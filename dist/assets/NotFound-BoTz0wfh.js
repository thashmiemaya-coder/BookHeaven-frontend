import { e as createLucideIcon, j as jsxRuntimeExports, L as Link } from "./index-BtxuP7zD.js";
import { S as Seo } from "./Seo-CTQV06H5.js";
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const BookX = createLucideIcon("BookX", [
  ["path", { d: "m14.5 7-5 5", key: "dy991v" }],
  [
    "path",
    {
      d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
      key: "k3hazp"
    }
  ],
  ["path", { d: "m9.5 7 5 5", key: "s45iea" }]
]);
function NotFound() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Seo, { title: "Page Not Found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-x min-h-[60vh] grid place-items-center text-center py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BookX, { className: "mx-auto text-plum-300", size: 96, strokeWidth: 1 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-6xl font-semibold text-plum-950 dark:text-plum-100 mt-6", children: "404" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-plum-500 dark:text-plum-300 mt-3 max-w-sm mx-auto", children: "The page you're looking for has wandered off the shelf." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "btn-primary mt-8 inline-flex", children: "Back to Home" })
    ] }) })
  ] });
}
export {
  NotFound as default
};
//# sourceMappingURL=NotFound-BoTz0wfh.js.map
