import { i as useParams, k as useDispatch, l as useSelector, s as selectUser, m as useGetBookQuery, r as reactExports, n as addRecentlyViewed, j as jsxRuntimeExports, c as Loader, L as Link, o as ShoppingCart, p as addToCart, z as zt, H as Heart, t as toggleWishlist, q as useAddReviewMutation, S as Star } from "./index-BtxuP7zD.js";
import { u as useForm } from "./index.esm-saVhEfjE.js";
import { S as Seo } from "./Seo-CTQV06H5.js";
import { R as Rating, B as BookCard } from "./BookCard-C4ZV7gK4.js";
import { L as LazyImage } from "./LazyImage-BzZeTy7O.js";
import { C as ChevronLeft } from "./chevron-left-DO3rIEZJ.js";
import { M as Minus } from "./minus-CLuDkCYG.js";
import { P as Plus } from "./plus-CYPWSy_R.js";
function BookDetails() {
  var _a, _b, _c, _d, _e;
  const { slug } = useParams();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const recent = useSelector((s) => s.ui.recentlyViewed);
  const { data, isLoading, isError } = useGetBookQuery(slug);
  const [qty, setQty] = reactExports.useState(1);
  const [activeImg, setActiveImg] = reactExports.useState(0);
  const book = data == null ? void 0 : data.book;
  const wished = useSelector((s) => book && s.wishlist.items.some((i) => i._id === book._id));
  reactExports.useEffect(() => {
    if (book) {
      setActiveImg(0);
      setQty(1);
      dispatch(addRecentlyViewed({
        _id: book._id,
        slug: book.slug,
        title: book.title,
        author: book.author,
        coverImage: book.coverImage,
        price: book.price,
        discountPrice: book.discountPrice,
        ratings: book.ratings
      }));
    }
  }, [book == null ? void 0 : book._id, dispatch]);
  if (isLoading) return /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { full: true });
  if (isError || !book) return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x py-20 text-center text-plum-500", children: [
    "Book not found. ",
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/books", className: "text-plum-700 hover:underline", children: "Back to shop" })
  ] });
  const price = book.discountPrice > 0 ? book.discountPrice : book.price;
  const images = ((_a = book.images) == null ? void 0 : _a.length) ? book.images : [book.coverImage];
  const recentOthers = recent.filter((r) => r._id !== book._id).slice(0, 4);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Seo, { title: book.title, description: (_b = book.description) == null ? void 0 : _b.slice(0, 150), image: book.coverImage }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-x py-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/books", className: "inline-flex items-center gap-1 text-sm text-plum-500 hover:text-plum-700 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 16 }),
        " Back to shop"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card overflow-hidden aspect-[3/4] max-w-md mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LazyImage, { src: images[activeImg], alt: book.title, className: "h-full w-full" }) }),
          images.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 mt-4 justify-center", children: images.map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setActiveImg(i),
              className: `h-20 w-16 rounded-lg overflow-hidden border-2 transition ${i === activeImg ? "border-plum-700" : "border-transparent opacity-60"}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(LazyImage, { src: img, alt: "", className: "h-full w-full" })
            },
            i
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          book.category && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: `/books?category=${book.category._id}`,
              className: "text-sm font-medium text-plum-700 dark:text-blush-400 hover:underline",
              children: book.category.name
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl md:text-4xl font-semibold text-plum-950 dark:text-plum-100 mt-1", children: book.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-plum-500 dark:text-plum-400 mt-1", children: [
            "by ",
            book.author
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mt-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Rating, { value: book.ratings, count: book.ratings, size: 18 }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-plum-400", children: [
              book.numReviews,
              " reviews"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-3 mt-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-3xl font-bold text-plum-800 dark:text-plum-200", children: [
              "$",
              price.toFixed(2)
            ] }),
            book.discountPrice > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-lg text-plum-300 line-through", children: [
              "$",
              book.price.toFixed(2)
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-plum-600 dark:text-plum-300 leading-relaxed mt-5", children: book.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "grid grid-cols-2 gap-y-2 gap-x-6 text-sm mt-6", children: [
            book.publisher && /* @__PURE__ */ jsxRuntimeExports.jsx(Meta, { label: "Publisher", value: book.publisher }),
            book.language && /* @__PURE__ */ jsxRuntimeExports.jsx(Meta, { label: "Language", value: book.language }),
            book.pages > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Meta, { label: "Pages", value: book.pages }),
            book.publishedYear > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Meta, { label: "Published", value: book.publishedYear }),
            book.isbn && /* @__PURE__ */ jsxRuntimeExports.jsx(Meta, { label: "ISBN", value: book.isbn }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Meta, { label: "Availability", value: book.stock > 0 ? `${book.stock} in stock` : "Out of stock" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 mt-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center rounded-xl border border-plum-200 dark:border-plum-700", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setQty((q) => Math.max(1, q - 1)),
                  className: "grid h-11 w-11 place-items-center text-plum-700 dark:text-plum-200",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { size: 16 })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-10 text-center font-medium text-plum-900 dark:text-plum-100", children: qty }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setQty((q) => Math.min(book.stock || 99, q + 1)),
                  className: "grid h-11 w-11 place-items-center text-plum-700 dark:text-plum-200",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 16 })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                disabled: book.stock === 0,
                onClick: () => {
                  dispatch(addToCart({ ...book, quantity: qty }));
                  zt.success("Added to cart");
                },
                className: "btn-primary flex-1 min-w-[160px] disabled:opacity-40",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { size: 18 }),
                  " Add to Cart"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => {
                  dispatch(toggleWishlist(book));
                  zt.success(wished ? "Removed from wishlist" : "Added to wishlist");
                },
                className: "grid h-11 w-11 place-items-center rounded-xl border border-plum-200 dark:border-plum-700 text-plum-700 dark:text-plum-200",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 18, className: wished ? "fill-blush-500 text-blush-500" : "" })
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-10 mt-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "section-title mb-6", children: [
            "Reviews (",
            ((_c = data.reviews) == null ? void 0 : _c.length) || 0,
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: ((_d = data.reviews) == null ? void 0 : _d.length) ? data.reviews.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-plum-900 dark:text-plum-100", children: r.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Rating, { value: r.rating, size: 14 })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-plum-600 dark:text-plum-300 mt-2", children: r.comment }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-plum-400 mt-2", children: new Date(r.createdAt).toLocaleDateString() })
          ] }, r._id)) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-plum-400", children: "No reviews yet. Be the first!" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "section-title mb-6", children: "Write a Review" }),
          user ? /* @__PURE__ */ jsxRuntimeExports.jsx(ReviewForm, { bookId: book._id }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card p-6 text-center text-plum-500 dark:text-plum-400", children: [
            "Please ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", className: "text-plum-700 dark:text-blush-400 hover:underline", children: "log in" }),
            " to leave a review."
          ] })
        ] })
      ] }),
      ((_e = data.related) == null ? void 0 : _e.length) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "section-title mb-6", children: "Related Books" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-5", children: data.related.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx(BookCard, { book: b }, b._id)) })
      ] }),
      recentOthers.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "section-title mb-6", children: "Recently Viewed" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-5", children: recentOthers.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx(BookCard, { book: b }, b._id)) })
      ] })
    ] })
  ] });
}
const Meta = ({ label, value }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-plum-400", children: label }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "font-medium text-plum-800 dark:text-plum-200", children: value })
] });
function ReviewForm({ bookId }) {
  const { register, handleSubmit, reset, setValue, watch, formState: { errors } } = useForm({ defaultValues: { rating: 5 } });
  const [addReview, { isLoading }] = useAddReviewMutation();
  const rating = watch("rating");
  const onSubmit = async (data) => {
    var _a;
    try {
      await addReview({ bookId, rating: Number(data.rating), comment: data.comment }).unwrap();
      zt.success("Review submitted!");
      reset({ rating: 5, comment: "" });
    } catch (err) {
      zt.error(((_a = err == null ? void 0 : err.data) == null ? void 0 : _a.message) || "Could not submit review");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "card p-6 space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "hidden", ...register("rating") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-plum-700 dark:text-plum-300 mb-2", children: "Your Rating" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1", children: [1, 2, 3, 4, 5].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setValue("rating", i), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 26, className: i <= rating ? "fill-blush-400 text-blush-400" : "text-plum-200" }) }, i)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-plum-700 dark:text-plum-300 mb-1.5", children: "Your Review" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "textarea",
        {
          rows: 4,
          className: "input resize-none",
          placeholder: "Share your thoughts...",
          ...register("comment", { required: "Please write a review", minLength: { value: 5, message: "Too short" } })
        }
      ),
      errors.comment && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-500 mt-1", children: errors.comment.message })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: isLoading, className: "btn-primary w-full", children: isLoading ? "Submitting..." : "Submit Review" })
  ] });
}
export {
  BookDetails as default
};
//# sourceMappingURL=BookDetails-WbhjKDal.js.map
