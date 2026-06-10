import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Heart } from 'lucide-react';
import Seo from '../components/ui/Seo';
import BookCard from '../components/ui/BookCard';
import { selectWishlist } from '../features/wishlist/wishlistSlice';

export default function Wishlist() {
  const items = useSelector(selectWishlist);

  return (
    <>
      <Seo title="Wishlist" />
      <section className="container-x py-10">
        <h1 className="section-title mb-8">My Wishlist</h1>

        {items.length ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {items.map((b) => <BookCard key={b._id} book={b} />)}
          </div>
        ) : (
          <div className="text-center py-20">
            <Heart className="mx-auto text-plum-200" size={96} strokeWidth={1} />
            <h2 className="font-display text-2xl font-semibold text-plum-950 dark:text-plum-100 mt-6">Your wishlist is empty</h2>
            <p className="text-plum-500 dark:text-plum-400 mt-2">Save books you love to find them easily later.</p>
            <Link to="/books" className="btn-primary mt-8 inline-flex">Discover Books</Link>
          </div>
        )}
      </section>
    </>
  );
}
