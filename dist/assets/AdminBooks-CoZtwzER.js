import { e as createLucideIcon, r as reactExports, b as useGetBooksQuery, g as useGetCategoriesQuery, a7 as useDeleteBookMutation, j as jsxRuntimeExports, h as Search, c as Loader, z as zt, a8 as useCreateBookMutation, a9 as useUpdateBookMutation, X } from "./index-BtxuP7zD.js";
import { u as useForm } from "./index.esm-saVhEfjE.js";
import { S as Seo } from "./Seo-CTQV06H5.js";
import { L as LazyImage } from "./LazyImage-BzZeTy7O.js";
import { P as Plus } from "./plus-CYPWSy_R.js";
import { T as Trash2 } from "./trash-2-DMOeXMOr.js";
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pencil = createLucideIcon("Pencil", [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
]);
function AdminBooks() {
  var _a, _b;
  const [keyword, setKeyword] = reactExports.useState("");
  const [modal, setModal] = reactExports.useState(null);
  const { data, isLoading } = useGetBooksQuery({ limit: 100, keyword: keyword || void 0 });
  const { data: catData } = useGetCategoriesQuery();
  const [deleteBook] = useDeleteBookMutation();
  const handleDelete = async (id) => {
    var _a2;
    if (!confirm("Delete this book? This cannot be undone.")) return;
    try {
      await deleteBook(id).unwrap();
      zt.success("Book deleted");
    } catch (err) {
      zt.error(((_a2 = err == null ? void 0 : err.data) == null ? void 0 : _a2.message) || "Delete failed");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Seo, { title: "Manage Books" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-4 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-semibold text-plum-950 dark:text-plum-100", children: "Book Management" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setModal({}), className: "btn-primary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 18 }),
        " Add Book"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full sm:w-80 mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 18, className: "absolute left-3 top-1/2 -translate-y-1/2 text-plum-400" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: keyword, onChange: (e) => setKeyword(e.target.value), placeholder: "Search books...", className: "input pl-10" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card overflow-hidden", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-left text-plum-400 border-b border-plum-100 dark:border-plum-800", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-4 font-medium", children: "Book" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-4 font-medium", children: "Category" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-4 font-medium", children: "Price" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-4 font-medium", children: "Stock" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-4 font-medium text-right", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
        (_a = data == null ? void 0 : data.books) == null ? void 0 : _a.map((b) => {
          var _a2, _b2;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-plum-50 dark:border-plum-800/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-14 w-10 shrink-0 rounded overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LazyImage, { src: b.coverImage, alt: b.title, className: "h-full w-full" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-plum-900 dark:text-plum-100 line-clamp-1", children: b.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-plum-400 text-xs", children: b.author })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 text-plum-600 dark:text-plum-300", children: ((_a2 = b.category) == null ? void 0 : _a2.name) || "—" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-4 text-plum-800 dark:text-plum-200", children: [
              "$",
              (_b2 = b.price) == null ? void 0 : _b2.toFixed(2)
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: b.stock < 5 ? "text-amber-600 font-medium" : "text-plum-600 dark:text-plum-300", children: b.stock }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setModal(b), className: "grid h-9 w-9 place-items-center rounded-lg bg-plum-100 dark:bg-plum-800 text-plum-700 dark:text-plum-200 hover:bg-plum-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { size: 16 }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleDelete(b._id), className: "grid h-9 w-9 place-items-center rounded-lg bg-red-50 text-red-500 hover:bg-red-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 16 }) })
            ] }) })
          ] }, b._id);
        }),
        !((_b = data == null ? void 0 : data.books) == null ? void 0 : _b.length) && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 5, className: "p-8 text-center text-plum-400", children: "No books found" }) })
      ] })
    ] }) }) }),
    modal && /* @__PURE__ */ jsxRuntimeExports.jsx(BookModal, { book: modal, categories: (catData == null ? void 0 : catData.categories) || [], onClose: () => setModal(null) })
  ] });
}
function BookModal({ book, categories, onClose }) {
  var _a;
  const isEdit = !!book._id;
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      title: book.title || "",
      author: book.author || "",
      description: book.description || "",
      category: ((_a = book.category) == null ? void 0 : _a._id) || book.category || "",
      price: book.price || "",
      discountPrice: book.discountPrice || 0,
      stock: book.stock || 0,
      coverImage: book.coverImage || "",
      isbn: book.isbn || "",
      publisher: book.publisher || "",
      language: book.language || "English",
      pages: book.pages || 0,
      publishedYear: book.publishedYear || "",
      isFeatured: book.isFeatured || false,
      isBestSeller: book.isBestSeller || false
    }
  });
  const [createBook, { isLoading: creating }] = useCreateBookMutation();
  const [updateBook, { isLoading: updating }] = useUpdateBookMutation();
  const onSubmit = async (form) => {
    var _a2;
    const payload = {
      ...form,
      price: Number(form.price),
      discountPrice: Number(form.discountPrice),
      stock: Number(form.stock),
      pages: Number(form.pages),
      publishedYear: form.publishedYear ? Number(form.publishedYear) : void 0
    };
    try {
      if (isEdit) await updateBook({ id: book._id, body: payload }).unwrap();
      else await createBook(payload).unwrap();
      zt.success(isEdit ? "Book updated" : "Book created");
      onClose();
    } catch (err) {
      zt.error(((_a2 = err == null ? void 0 : err.data) == null ? void 0 : _a2.message) || "Save failed");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 grid place-items-center bg-black/40 p-4", onClick: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card w-full max-w-2xl max-h-[90vh] overflow-auto p-6", onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-semibold text-plum-950 dark:text-plum-100", children: isEdit ? "Edit Book" : "Add New Book" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "text-plum-400 hover:text-plum-700", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 22 }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Title", error: errors.title, ...register("title", { required: "Required" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Author", error: errors.author, ...register("author", { required: "Required" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-plum-700 dark:text-plum-300 mb-1.5", children: "Description" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 3, className: "input resize-none", ...register("description", { required: "Required" }) }),
        errors.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-500 mt-1", children: errors.description.message })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-3 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-plum-700 dark:text-plum-300 mb-1.5", children: "Category" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "input", ...register("category", { required: "Required" }), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select..." }),
            categories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: c._id, children: c.name }, c._id))
          ] }),
          errors.category && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-500 mt-1", children: errors.category.message })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Price ($)", type: "number", step: "0.01", error: errors.price, ...register("price", { required: "Required" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Discount Price ($)", type: "number", step: "0.01", ...register("discountPrice") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-3 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Stock", type: "number", error: errors.stock, ...register("stock", { required: "Required" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Pages", type: "number", ...register("pages") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Published Year", type: "number", ...register("publishedYear") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "ISBN", ...register("isbn") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Publisher", ...register("publisher") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Cover Image URL", placeholder: "https://...", error: errors.coverImage, ...register("coverImage", { required: "Required" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-6 pt-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 text-sm text-plum-700 dark:text-plum-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", ...register("isFeatured"), className: "rounded" }),
          " Featured"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 text-sm text-plum-700 dark:text-plum-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", ...register("isBestSeller"), className: "rounded" }),
          " Best Seller"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 pt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: onClose, className: "btn-ghost flex-1", children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: creating || updating, className: "btn-primary flex-1", children: creating || updating ? "Saving..." : isEdit ? "Update Book" : "Create Book" })
      ] })
    ] })
  ] }) });
}
const Field = reactExports.forwardRef(({ label, error, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-plum-700 dark:text-plum-300 mb-1.5", children: label }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ref, className: "input", ...props }),
  error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-500 mt-1", children: error.message })
] }));
Field.displayName = "Field";
export {
  AdminBooks as default
};
//# sourceMappingURL=AdminBooks-CoZtwzER.js.map
