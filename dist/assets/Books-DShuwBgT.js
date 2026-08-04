import { e as createLucideIcon, r as reactExports, f as useSearchParams, g as useGetCategoriesQuery, b as useGetBooksQuery, j as jsxRuntimeExports, h as Search, X, c as Loader } from "./index-BtxuP7zD.js";
import { S as Seo } from "./Seo-CTQV06H5.js";
import { B as BookCard } from "./BookCard-C4ZV7gK4.js";
import { C as ChevronLeft } from "./chevron-left-DO3rIEZJ.js";
import { C as ChevronRight } from "./chevron-right-DmuPKAUI.js";
import "./LazyImage-BzZeTy7O.js";
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const SlidersHorizontal = createLucideIcon("SlidersHorizontal", [
  ["line", { x1: "21", x2: "14", y1: "4", y2: "4", key: "obuewd" }],
  ["line", { x1: "10", x2: "3", y1: "4", y2: "4", key: "1q6298" }],
  ["line", { x1: "21", x2: "12", y1: "12", y2: "12", key: "1iu8h1" }],
  ["line", { x1: "8", x2: "3", y1: "12", y2: "12", key: "ntss68" }],
  ["line", { x1: "21", x2: "16", y1: "20", y2: "20", key: "14d8ph" }],
  ["line", { x1: "12", x2: "3", y1: "20", y2: "20", key: "m0wm8r" }],
  ["line", { x1: "14", x2: "14", y1: "2", y2: "6", key: "14e1ph" }],
  ["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }],
  ["line", { x1: "16", x2: "16", y1: "18", y2: "22", key: "1lctlv" }]
]);
const ShopHero = "/assets/shop-CbOVN8sc.png";
const SORTS = [
  { label: "Newest", value: "-createdAt" },
  { label: "Top Rated", value: "-ratings" },
  { label: "Best Selling", value: "-sold" },
  { label: "Price: Low to High", value: "price" },
  { label: "Price: High to Low", value: "-price" }
];
function Books() {
  var _a, _b, _c, _d;
  reactExports.useEffect(() => {
    const previousBackground = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "#ffffff";
    return () => {
      document.body.style.backgroundColor = previousBackground;
    };
  }, []);
  const [params, setParams] = useSearchParams();
  const [showFilters, setShowFilters] = reactExports.useState(false);
  const keyword = params.get("keyword") || "";
  const category = params.get("category") || "";
  const sort = params.get("sort") || "-createdAt";
  const page = Number(params.get("page") || 1);
  const [searchInput, setSearchInput] = reactExports.useState(keyword);
  const { data: catData } = useGetCategoriesQuery();
  const queryArgs = reactExports.useMemo(() => {
    const a = { page, limit: 12, sort };
    if (keyword) a.keyword = keyword;
    if (category) a.category = category;
    return a;
  }, [page, sort, keyword, category]);
  const { data, isLoading, isFetching } = useGetBooksQuery(queryArgs);
  const update = (patch) => {
    const next = new URLSearchParams(params);
    Object.entries(patch).forEach(([k, v]) => {
      if (v) next.set(k, v);
      else next.delete(k);
    });
    if (!("page" in patch)) next.set("page", "1");
    setParams(next);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    update({ keyword: searchInput });
  };
  const clearAll = () => {
    setSearchInput("");
    setParams(new URLSearchParams());
  };
  const totalPages = (data == null ? void 0 : data.pages) || 1;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#ffffff]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Seo, { title: "Shop Books", description: "Browse the full BookHaven collection." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "relative overflow-hidden bg-cover bg-center",
        style: { backgroundImage: `url(${ShopHero})` },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x relative mx-auto flex min-h-[940px] items-center px-4 py-32 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl text-slate-900" }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-x py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "section-title", children: "Browse Books" }),
          data && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-plum-500 dark:text-plum-400 mt-1", children: [
            data.total,
            " titles available"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submitSearch, className: "relative w-full md:w-80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 18, className: "absolute left-3 top-1/2 -translate-y-1/2 text-plum-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              value: searchInput,
              onChange: (e) => setSearchInput(e.target.value),
              placeholder: "Search for books...",
              className: "input pl-10"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[240px_1fr] gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: `${showFilters ? "block" : "hidden"} lg:block`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card p-5 space-y-6 lg:sticky lg:top-24", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-plum-900 dark:text-plum-100", children: "Filters" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: clearAll, className: "text-xs text-plum-500 hover:text-plum-700 dark:text-blush-400", children: "Clear all" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-medium text-plum-700 dark:text-plum-300 mb-2", children: "Category" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FilterBtn, { active: !category, onClick: () => update({ category: "" }), children: "All Categories" }),
              (_a = catData == null ? void 0 : catData.categories) == null ? void 0 : _a.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(FilterBtn, { active: category === c._id, onClick: () => update({ category: c._id }), children: c.name }, c._id))
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-medium text-plum-700 dark:text-plum-300 mb-2", children: "Sort By" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: sort, onChange: (e) => update({ sort: e.target.value }), className: "input", children: SORTS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: s.value, children: s.label }, s.value)) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3 mb-4 lg:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setShowFilters((s) => !s), className: "btn-ghost", children: [
            showFilters ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 18 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(SlidersHorizontal, { size: 18 }),
            " Filters"
          ] }) }),
          (keyword || category) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 mb-4", children: [
            keyword && /* @__PURE__ */ jsxRuntimeExports.jsxs(Chip, { onClear: () => {
              setSearchInput("");
              update({ keyword: "" });
            }, children: [
              "Search: ",
              keyword
            ] }),
            category && /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { onClear: () => update({ category: "" }), children: ((_c = (_b = catData == null ? void 0 : catData.categories) == null ? void 0 : _b.find((c) => c._id === category)) == null ? void 0 : _c.name) || "Category" })
          ] }),
          isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { full: true }) : ((_d = data == null ? void 0 : data.books) == null ? void 0 : _d.length) ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `grid grid-cols-2 md:grid-cols-3 gap-5 transition-opacity ${isFetching ? "opacity-60" : ""}`, children: data.books.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx(BookCard, { book: b }, b._id)) }),
            totalPages > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2 mt-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(PageBtn, { disabled: page <= 1, onClick: () => update({ page: String(page - 1) }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 18 }) }),
              Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => update({ page: String(p) }),
                  className: `h-10 w-10 rounded-xl text-sm font-medium transition ${p === page ? "bg-plum-700 text-white" : "bg-plum-100 dark:bg-plum-800 text-plum-700 dark:text-plum-200 hover:bg-plum-200"}`,
                  children: p
                },
                p
              )),
              /* @__PURE__ */ jsxRuntimeExports.jsx(PageBtn, { disabled: page >= totalPages, onClick: () => update({ page: String(page + 1) }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 18 }) })
            ] })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card p-16 text-center text-plum-500 dark:text-plum-400", children: "No books match your search. Try adjusting your filters." })
        ] })
      ] })
    ] })
  ] });
}
const FilterBtn = ({ active, children, onClick }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "button",
  {
    onClick,
    className: `block w-full text-left text-sm rounded-lg px-3 py-2 transition ${active ? "bg-plum-700 text-white" : "text-plum-600 dark:text-plum-300 hover:bg-plum-100 dark:hover:bg-plum-800"}`,
    children
  }
);
const Chip = ({ children, onClear }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full bg-plum-100 dark:bg-plum-800 px-3 py-1 text-xs text-plum-700 dark:text-plum-200", children: [
  children,
  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClear, className: "hover:text-plum-900", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 12 }) })
] });
const PageBtn = ({ children, disabled, onClick }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "button",
  {
    disabled,
    onClick,
    className: "grid h-10 w-10 place-items-center rounded-xl bg-plum-100 dark:bg-plum-800 text-plum-700 dark:text-plum-200 disabled:opacity-40 hover:bg-plum-200 transition",
    children
  }
);
export {
  Books as default
};
//# sourceMappingURL=Books-DShuwBgT.js.map
