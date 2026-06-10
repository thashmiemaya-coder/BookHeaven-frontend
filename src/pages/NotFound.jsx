import { Link } from 'react-router-dom';
import { BookX } from 'lucide-react';
import Seo from '../components/ui/Seo';

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" />
      <section className="container-x min-h-[60vh] grid place-items-center text-center py-20">
        <div>
          <BookX className="mx-auto text-plum-300" size={96} strokeWidth={1} />
          <h1 className="font-display text-6xl font-semibold text-plum-950 dark:text-plum-100 mt-6">404</h1>
          <p className="text-plum-500 dark:text-plum-300 mt-3 max-w-sm mx-auto">
            The page you're looking for has wandered off the shelf.
          </p>
          <Link to="/" className="btn-primary mt-8 inline-flex">Back to Home</Link>
        </div>
      </section>
    </>
  );
}
