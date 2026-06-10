import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { ShoppingCart, Heart, Minus, Plus, Star, ChevronLeft } from 'lucide-react';
import toast from 'react-hot-toast';
import Seo from '../components/ui/Seo';
import Loader from '../components/ui/Loader';
import Rating from '../components/ui/Rating';
import LazyImage from '../components/ui/LazyImage';
import BookCard from '../components/ui/BookCard';
import { useGetBookQuery, useAddReviewMutation } from '../features/api/apiSlice';
import { addToCart } from '../features/cart/cartSlice';
import { toggleWishlist } from '../features/wishlist/wishlistSlice';
import { addRecentlyViewed } from '../features/uiSlice';
import { selectUser } from '../features/auth/authSlice';

export default function BookDetails() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const recent = useSelector((s) => s.ui.recentlyViewed);
  const { data, isLoading, isError } = useGetBookQuery(slug);
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);

  const book = data?.book;
  const wished = useSelector((s) => book && s.wishlist.items.some((i) => i._id === book._id));

  useEffect(() => {
    if (book) {
      setActiveImg(0);
      setQty(1);
      dispatch(addRecentlyViewed({
        _id: book._id, slug: book.slug, title: book.title, author: book.author,
        coverImage: book.coverImage, price: book.price, discountPrice: book.discountPrice, ratings: book.ratings,
      }));
    }
  }, [book?._id, dispatch]);

  if (isLoading) return <Loader full />;
  if (isError || !book) return (
    <div className="container-x py-20 text-center text-plum-500">
      Book not found. <Link to="/books" className="text-plum-700 hover:underline">Back to shop</Link>
    </div>
  );

  const price = book.discountPrice > 0 ? book.discountPrice : book.price;
  const images = book.images?.length ? book.images : [book.coverImage];
  const recentOthers = recent.filter((r) => r._id !== book._id).slice(0, 4);

  return (
    <>
      <Seo title={book.title} description={book.description?.slice(0, 150)} image={book.coverImage} />

      <section className="container-x py-8">
        <Link to="/books" className="inline-flex items-center gap-1 text-sm text-plum-500 hover:text-plum-700 mb-6">
          <ChevronLeft size={16} /> Back to shop
        </Link>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Gallery */}
          <div>
            <div className="card overflow-hidden aspect-[3/4] max-w-md mx-auto">
              <LazyImage src={images[activeImg]} alt={book.title} className="h-full w-full" />
            </div>
            {images.length > 1 && (
              <div className="flex gap-3 mt-4 justify-center">
                {images.map((img, i) => (
                  <button key={i} onClick={() => setActiveImg(i)}
                    className={`h-20 w-16 rounded-lg overflow-hidden border-2 transition ${
                      i === activeImg ? 'border-plum-700' : 'border-transparent opacity-60'
                    }`}>
                    <LazyImage src={img} alt="" className="h-full w-full" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            {book.category && (
              <Link to={`/books?category=${book.category._id}`}
                className="text-sm font-medium text-plum-700 dark:text-blush-400 hover:underline">
                {book.category.name}
              </Link>
            )}
            <h1 className="font-display text-3xl md:text-4xl font-semibold text-plum-950 dark:text-plum-100 mt-1">
              {book.title}
            </h1>
            <p className="text-plum-500 dark:text-plum-400 mt-1">by {book.author}</p>

            <div className="flex items-center gap-3 mt-3">
              <Rating value={book.ratings} count={book.ratings} size={18} />
              <span className="text-sm text-plum-400">{book.numReviews} reviews</span>
            </div>

            <div className="flex items-baseline gap-3 mt-5">
              <span className="font-display text-3xl font-bold text-plum-800 dark:text-plum-200">${price.toFixed(2)}</span>
              {book.discountPrice > 0 && (
                <span className="text-lg text-plum-300 line-through">${book.price.toFixed(2)}</span>
              )}
            </div>

            <p className="text-plum-600 dark:text-plum-300 leading-relaxed mt-5">{book.description}</p>

            <dl className="grid grid-cols-2 gap-y-2 gap-x-6 text-sm mt-6">
              {book.publisher && <Meta label="Publisher" value={book.publisher} />}
              {book.language && <Meta label="Language" value={book.language} />}
              {book.pages > 0 && <Meta label="Pages" value={book.pages} />}
              {book.publishedYear > 0 && <Meta label="Published" value={book.publishedYear} />}
              {book.isbn && <Meta label="ISBN" value={book.isbn} />}
              <Meta label="Availability" value={book.stock > 0 ? `${book.stock} in stock` : 'Out of stock'} />
            </dl>

            <div className="flex flex-wrap items-center gap-3 mt-8">
              <div className="flex items-center rounded-xl border border-plum-200 dark:border-plum-700">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="grid h-11 w-11 place-items-center text-plum-700 dark:text-plum-200"><Minus size={16} /></button>
                <span className="w-10 text-center font-medium text-plum-900 dark:text-plum-100">{qty}</span>
                <button onClick={() => setQty((q) => Math.min(book.stock || 99, q + 1))}
                  className="grid h-11 w-11 place-items-center text-plum-700 dark:text-plum-200"><Plus size={16} /></button>
              </div>

              <button disabled={book.stock === 0}
                onClick={() => { dispatch(addToCart({ ...book, quantity: qty })); toast.success('Added to cart'); }}
                className="btn-primary flex-1 min-w-[160px] disabled:opacity-40">
                <ShoppingCart size={18} /> Add to Cart
              </button>

              <button onClick={() => { dispatch(toggleWishlist(book)); toast.success(wished ? 'Removed from wishlist' : 'Added to wishlist'); }}
                className="grid h-11 w-11 place-items-center rounded-xl border border-plum-200 dark:border-plum-700 text-plum-700 dark:text-plum-200">
                <Heart size={18} className={wished ? 'fill-blush-500 text-blush-500' : ''} />
              </button>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="grid lg:grid-cols-2 gap-10 mt-16">
          <div>
            <h2 className="section-title mb-6">Reviews ({data.reviews?.length || 0})</h2>
            <div className="space-y-4">
              {data.reviews?.length ? data.reviews.map((r) => (
                <div key={r._id} className="card p-5">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-plum-900 dark:text-plum-100">{r.name}</span>
                    <Rating value={r.rating} size={14} />
                  </div>
                  <p className="text-sm text-plum-600 dark:text-plum-300 mt-2">{r.comment}</p>
                  <p className="text-xs text-plum-400 mt-2">{new Date(r.createdAt).toLocaleDateString()}</p>
                </div>
              )) : <p className="text-plum-400">No reviews yet. Be the first!</p>}
            </div>
          </div>

          <div>
            <h2 className="section-title mb-6">Write a Review</h2>
            {user ? <ReviewForm bookId={book._id} /> : (
              <div className="card p-6 text-center text-plum-500 dark:text-plum-400">
                Please <Link to="/login" className="text-plum-700 dark:text-blush-400 hover:underline">log in</Link> to leave a review.
              </div>
            )}
          </div>
        </div>

        {/* Related */}
        {data.related?.length > 0 && (
          <div className="mt-16">
            <h2 className="section-title mb-6">Related Books</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {data.related.map((b) => <BookCard key={b._id} book={b} />)}
            </div>
          </div>
        )}

        {/* Recently viewed */}
        {recentOthers.length > 0 && (
          <div className="mt-16">
            <h2 className="section-title mb-6">Recently Viewed</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {recentOthers.map((b) => <BookCard key={b._id} book={b} />)}
            </div>
          </div>
        )}
      </section>
    </>
  );
}

const Meta = ({ label, value }) => (
  <div>
    <dt className="text-plum-400">{label}</dt>
    <dd className="font-medium text-plum-800 dark:text-plum-200">{value}</dd>
  </div>
);

function ReviewForm({ bookId }) {
  const { register, handleSubmit, reset, setValue, watch, formState: { errors } } = useForm({ defaultValues: { rating: 5 } });
  const [addReview, { isLoading }] = useAddReviewMutation();
  const rating = watch('rating');

  const onSubmit = async (data) => {
    try {
      await addReview({ bookId, rating: Number(data.rating), comment: data.comment }).unwrap();
      toast.success('Review submitted!');
      reset({ rating: 5, comment: '' });
    } catch (err) {
      toast.error(err?.data?.message || 'Could not submit review');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card p-6 space-y-4">
      <input type="hidden" {...register('rating')} />
      <div>
        <label className="block text-sm font-medium text-plum-700 dark:text-plum-300 mb-2">Your Rating</label>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <button type="button" key={i} onClick={() => setValue('rating', i)}>
              <Star size={26} className={i <= rating ? 'fill-blush-400 text-blush-400' : 'text-plum-200'} />
            </button>
          ))}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-plum-700 dark:text-plum-300 mb-1.5">Your Review</label>
        <textarea rows={4} className="input resize-none" placeholder="Share your thoughts..."
          {...register('comment', { required: 'Please write a review', minLength: { value: 5, message: 'Too short' } })} />
        {errors.comment && <p className="text-xs text-red-500 mt-1">{errors.comment.message}</p>}
      </div>
      <button disabled={isLoading} className="btn-primary w-full">
        {isLoading ? 'Submitting...' : 'Submit Review'}
      </button>
    </form>
  );
}
