import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ShoppingCart, Heart } from 'lucide-react';
import toast from 'react-hot-toast';
import Rating from './Rating';
import LazyImage from './LazyImage';
import { addToCart } from '../../features/cart/cartSlice';
import { toggleWishlist } from '../../features/wishlist/wishlistSlice';

export default function BookCard({ book }) {
  const dispatch = useDispatch();
  const wished = useSelector((s) => s.wishlist.items.some((i) => i._id === book._id));
  const price = book.discountPrice > 0 ? book.discountPrice : book.price;

  return (
    <article className="group bg-plum-50 dark:bg-plum-900/30 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
      <div className="relative overflow-hidden bg-white dark:bg-plum-800">
        <Link to={`/books/${book.slug}`} className="block aspect-[3/4]">
          <LazyImage src={book.coverImage} alt={book.title} className="h-full w-full object-cover group-hover:scale-105 transition duration-300" />
        </Link>
        <button
          aria-label="Add to wishlist"
          onClick={() => {
            dispatch(toggleWishlist(book));
            toast.success(wished ? 'Removed from wishlist' : 'Added to wishlist');
          }}
          className="absolute top-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 backdrop-blur
                     text-plum-700 shadow hover:scale-110 transition"
        >
          <Heart size={18} className={wished ? 'fill-blush-500 text-blush-500' : ''} />
        </button>
        {book.discountPrice > 0 && (
          <span className="absolute top-3 left-3 rounded-full bg-blush-500 px-2 py-1 text-xs font-semibold text-white">
            Sale
          </span>
        )}
      </div>

      <div className="p-4 flex flex-col flex-1">
        <Link to={`/books/${book.slug}`}>
          <h3 className="font-semibold text-sm text-plum-950 dark:text-plum-100 line-clamp-2 hover:text-plum-700">
            {book.title}
          </h3>
        </Link>
        <p className="text-xs text-plum-500 dark:text-plum-400 mt-1 mb-3">{book.author}</p>
        <div className="mb-3"><Rating value={book.ratings} count={book.reviewCount || book.ratings} size={14} /></div>

        <div className="mt-auto flex items-center justify-between pt-2">
          <div className="flex items-baseline gap-2">
            <span className="text-base font-bold text-plum-900 dark:text-plum-100">${price.toFixed(2)}</span>
            {book.discountPrice > 0 && (
              <span className="text-xs text-plum-400 dark:text-plum-500 line-through">${book.price.toFixed(2)}</span>
            )}
          </div>
          <button
            onClick={() => {
              dispatch(addToCart(book));
              toast.success('Added to cart');
            }}
            disabled={book.stock === 0}
            className="grid h-9 w-9 place-items-center rounded-lg bg-plum-200 text-plum-700 dark:bg-plum-700 dark:text-plum-200
                       hover:bg-plum-700 hover:text-white dark:hover:bg-plum-600 transition disabled:opacity-40"
            aria-label="Add to cart"
          >
            <ShoppingCart size={16} />
          </button>
        </div>
      </div>
    </article>
  );
}
