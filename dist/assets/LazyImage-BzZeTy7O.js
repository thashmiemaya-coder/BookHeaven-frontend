import { r as reactExports, j as jsxRuntimeExports } from "./index-BtxuP7zD.js";
function LazyImage({ src, alt, className = "" }) {
  const [loaded, setLoaded] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `relative overflow-hidden bg-plum-100 ${className}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "img",
    {
      src,
      alt,
      loading: "lazy",
      decoding: "async",
      onLoad: () => setLoaded(true),
      className: `h-full w-full object-cover transition-all duration-700 ${loaded ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-md scale-105"}`
    }
  ) });
}
export {
  LazyImage as L
};
//# sourceMappingURL=LazyImage-BzZeTy7O.js.map
