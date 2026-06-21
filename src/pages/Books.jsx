import { useEffect, useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, Search, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Seo from '../components/ui/Seo';
import Loader from '../components/ui/Loader';
import BookCard from '../components/ui/BookCard';
import ShopHero from '../assets/images/shop.png';
import { useGetBooksQuery, useGetCategoriesQuery } from '../features/api/apiSlice';

const SORTS = [
  { label: 'Newest', value: '-createdAt' },
  { label: 'Top Rated', value: '-ratings' },
  { label: 'Best Selling', value: '-sold' },
  { label: 'Price: Low to High', value: 'price' },
  { label: 'Price: High to Low', value: '-price' },
];

export default function Books() {
  useEffect(() => {
    const previousBackground = document.body.style.backgroundColor;
    document.body.style.backgroundColor = '#ffffff';
    return () => {
      document.body.style.backgroundColor = previousBackground;
    };
  }, []);

  const [params, setParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);

  const keyword = params.get('keyword') || '';
  const category = params.get('category') || '';
  const sort = params.get('sort') || '-createdAt';
  const page = Number(params.get('page') || 1);
  const [searchInput, setSearchInput] = useState(keyword);

  const { data: catData } = useGetCategoriesQuery();
  const queryArgs = useMemo(() => {
    const a = { page, limit: 12, sort };
    if (keyword) a.keyword = keyword;
    if (category) a.category = category;
    return a;
  }, [page, sort, keyword, category]);

  const { data, isLoading, isFetching } = useGetBooksQuery(queryArgs);

  const update = (patch) => {
    const next = new URLSearchParams(params);
    Object.entries(patch).forEach(([k, v]) => {
      if (v) next.set(k, v); else next.delete(k);
    });
    if (!('page' in patch)) next.set('page', '1');
    setParams(next);
  };

  const submitSearch = (e) => { e.preventDefault(); update({ keyword: searchInput }); };
  const clearAll = () => { setSearchInput(''); setParams(new URLSearchParams()); };

  const totalPages = data?.pages || 1;

  return (
    <div className="bg-[#ffffff]">
      <Seo title="Shop Books" description="Browse the full BookHaven collection." />

      <section
        className="relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${ShopHero})` }}
      >
        <div className="container-x relative mx-auto flex min-h-[940px] items-center px-4 py-32 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-slate-900">
            
          </div>
        </div>
      </section>

      <section className="container-x py-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h1 className="section-title">Browse Books</h1>
            {data && <p className="text-sm text-plum-500 dark:text-plum-400 mt-1">{data.total} titles available</p>}
          </div>
          <form onSubmit={submitSearch} className="relative w-full md:w-80">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-plum-400" />
            <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search for books..." className="input pl-10" />
          </form>
        </div>

        <div className="grid lg:grid-cols-[240px_1fr] gap-8">
          {/* Filters sidebar */}
          <aside className={`${showFilters ? 'block' : 'hidden'} lg:block`}>
            <div className="card p-5 space-y-6 lg:sticky lg:top-24">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-plum-900 dark:text-plum-100">Filters</h2>
                <button onClick={clearAll} className="text-xs text-plum-500 hover:text-plum-700 dark:text-blush-400">Clear all</button>
              </div>

              <div>
                <h3 className="text-sm font-medium text-plum-700 dark:text-plum-300 mb-2">Category</h3>
                <div className="space-y-1.5">
                  <FilterBtn active={!category} onClick={() => update({ category: '' })}>All Categories</FilterBtn>
                  {catData?.categories?.map((c) => (
                    <FilterBtn key={c._id} active={category === c._id} onClick={() => update({ category: c._id })}>
                      {c.name}
                    </FilterBtn>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-plum-700 dark:text-plum-300 mb-2">Sort By</h3>
                <select value={sort} onChange={(e) => update({ sort: e.target.value })} className="input">
                  {SORTS.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
                </select>
              </div>
            </div>
          </aside>

          {/* Results */}
          <div>
            <div className="flex items-center gap-3 mb-4 lg:hidden">
              <button onClick={() => setShowFilters((s) => !s)} className="btn-ghost">
                {showFilters ? <X size={18} /> : <SlidersHorizontal size={18} />} Filters
              </button>
            </div>

            {(keyword || category) && (
              <div className="flex flex-wrap gap-2 mb-4">
                {keyword && <Chip onClear={() => { setSearchInput(''); update({ keyword: '' }); }}>Search: {keyword}</Chip>}
                {category && <Chip onClear={() => update({ category: '' })}>
                  {catData?.categories?.find((c) => c._id === category)?.name || 'Category'}
                </Chip>}
              </div>
            )}

            {isLoading ? (
              <Loader full />
            ) : data?.books?.length ? (
              <>
                <div className={`grid grid-cols-2 md:grid-cols-3 gap-5 transition-opacity ${isFetching ? 'opacity-60' : ''}`}>
                  {data.books.map((b) => <BookCard key={b._id} book={b} />)}
                </div>

                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 mt-10">
                    <PageBtn disabled={page <= 1} onClick={() => update({ page: String(page - 1) })}>
                      <ChevronLeft size={18} />
                    </PageBtn>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                      <button key={p} onClick={() => update({ page: String(p) })}
                        className={`h-10 w-10 rounded-xl text-sm font-medium transition ${
                          p === page ? 'bg-plum-700 text-white' : 'bg-plum-100 dark:bg-plum-800 text-plum-700 dark:text-plum-200 hover:bg-plum-200'
                        }`}>
                        {p}
                      </button>
                    ))}
                    <PageBtn disabled={page >= totalPages} onClick={() => update({ page: String(page + 1) })}>
                      <ChevronRight size={18} />
                    </PageBtn>
                  </div>
                )}
              </>
            ) : (
              <div className="card p-16 text-center text-plum-500 dark:text-plum-400">
                No books match your search. Try adjusting your filters.
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

const FilterBtn = ({ active, children, onClick }) => (
  <button onClick={onClick}
    className={`block w-full text-left text-sm rounded-lg px-3 py-2 transition ${
      active ? 'bg-plum-700 text-white' : 'text-plum-600 dark:text-plum-300 hover:bg-plum-100 dark:hover:bg-plum-800'
    }`}>
    {children}
  </button>
);

const Chip = ({ children, onClear }) => (
  <span className="inline-flex items-center gap-1.5 rounded-full bg-plum-100 dark:bg-plum-800 px-3 py-1 text-xs text-plum-700 dark:text-plum-200">
    {children}
    <button onClick={onClear} className="hover:text-plum-900"><X size={12} /></button>
  </span>
);

const PageBtn = ({ children, disabled, onClick }) => (
  <button disabled={disabled} onClick={onClick}
    className="grid h-10 w-10 place-items-center rounded-xl bg-plum-100 dark:bg-plum-800 text-plum-700 dark:text-plum-200 disabled:opacity-40 hover:bg-plum-200 transition">
    {children}
  </button>
);
