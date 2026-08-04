import { j as jsxRuntimeExports, at as Helmet } from "./index-BtxuP7zD.js";
function Seo({ title, description, image }) {
  const full = title ? `${title} · BookHaven` : "BookHaven — Exclusive Books";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Helmet, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: full }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "description", content: description || "Your destination for exclusive and unforgettable books." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:title", content: full }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:description", content: description || "" }),
    image && /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:image", content: image })
  ] });
}
export {
  Seo as S
};
//# sourceMappingURL=Seo-CTQV06H5.js.map
