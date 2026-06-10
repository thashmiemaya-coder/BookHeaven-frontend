import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Plus, Pencil, Trash2, X, Search } from 'lucide-react';
import toast from 'react-hot-toast';
import Seo from '../../components/ui/Seo';
import Loader from '../../components/ui/Loader';
import LazyImage from '../../components/ui/LazyImage';
import {
  useGetBooksQuery, useGetCategoriesQuery,
  useCreateBookMutation, useUpdateBookMutation, useDeleteBookMutation,
} from '../../features/api/apiSlice';

export default function AdminBooks() {
  const [keyword, setKeyword] = useState('');
  const [modal, setModal] = useState(null); // null | {} (new) | book (edit)
  const { data, isLoading } = useGetBooksQuery({ limit: 100, keyword: keyword || undefined });
  const { data: catData } = useGetCategoriesQuery();
  const [deleteBook] = useDeleteBookMutation();

  const handleDelete = async (id) => {
    if (!confirm('Delete this book? This cannot be undone.')) return;
    try {
      await deleteBook(id).unwrap();
      toast.success('Book deleted');
    } catch (err) {
      toast.error(err?.data?.message || 'Delete failed');
    }
  };

  return (
    <>
      <Seo title="Manage Books" />
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <h1 className="font-display text-2xl font-semibold text-plum-950 dark:text-plum-100">Book Management</h1>
        <button onClick={() => setModal({})} className="btn-primary"><Plus size={18} /> Add Book</button>
      </div>

      <div className="relative w-full sm:w-80 mb-5">
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-plum-400" />
        <input value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="Search books..." className="input pl-10" />
      </div>

      <div className="card overflow-hidden">
        {isLoading ? <Loader /> : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-plum-400 border-b border-plum-100 dark:border-plum-800">
                  <th className="p-4 font-medium">Book</th>
                  <th className="p-4 font-medium">Category</th>
                  <th className="p-4 font-medium">Price</th>
                  <th className="p-4 font-medium">Stock</th>
                  <th className="p-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data?.books?.map((b) => (
                  <tr key={b._id} className="border-b border-plum-50 dark:border-plum-800/50">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="h-14 w-10 shrink-0 rounded overflow-hidden">
                          <LazyImage src={b.coverImage} alt={b.title} className="h-full w-full" />
                        </div>
                        <div className="min-w-0">
                          <p className="font-medium text-plum-900 dark:text-plum-100 line-clamp-1">{b.title}</p>
                          <p className="text-plum-400 text-xs">{b.author}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-plum-600 dark:text-plum-300">{b.category?.name || '—'}</td>
                    <td className="p-4 text-plum-800 dark:text-plum-200">${b.price?.toFixed(2)}</td>
                    <td className="p-4">
                      <span className={b.stock < 5 ? 'text-amber-600 font-medium' : 'text-plum-600 dark:text-plum-300'}>{b.stock}</span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center justify-end gap-2">
                        <button onClick={() => setModal(b)} className="grid h-9 w-9 place-items-center rounded-lg bg-plum-100 dark:bg-plum-800 text-plum-700 dark:text-plum-200 hover:bg-plum-200"><Pencil size={16} /></button>
                        <button onClick={() => handleDelete(b._id)} className="grid h-9 w-9 place-items-center rounded-lg bg-red-50 text-red-500 hover:bg-red-100"><Trash2 size={16} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
                {!data?.books?.length && <tr><td colSpan={5} className="p-8 text-center text-plum-400">No books found</td></tr>}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {modal && <BookModal book={modal} categories={catData?.categories || []} onClose={() => setModal(null)} />}
    </>
  );
}

function BookModal({ book, categories, onClose }) {
  const isEdit = !!book._id;
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      title: book.title || '', author: book.author || '', description: book.description || '',
      category: book.category?._id || book.category || '', price: book.price || '',
      discountPrice: book.discountPrice || 0, stock: book.stock || 0,
      coverImage: book.coverImage || '', isbn: book.isbn || '', publisher: book.publisher || '',
      language: book.language || 'English', pages: book.pages || 0, publishedYear: book.publishedYear || '',
      isFeatured: book.isFeatured || false, isBestSeller: book.isBestSeller || false,
    },
  });
  const [createBook, { isLoading: creating }] = useCreateBookMutation();
  const [updateBook, { isLoading: updating }] = useUpdateBookMutation();

  const onSubmit = async (form) => {
    const payload = {
      ...form,
      price: Number(form.price), discountPrice: Number(form.discountPrice),
      stock: Number(form.stock), pages: Number(form.pages),
      publishedYear: form.publishedYear ? Number(form.publishedYear) : undefined,
    };
    try {
      if (isEdit) await updateBook({ id: book._id, body: payload }).unwrap();
      else await createBook(payload).unwrap();
      toast.success(isEdit ? 'Book updated' : 'Book created');
      onClose();
    } catch (err) {
      toast.error(err?.data?.message || 'Save failed');
    }
  };

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4" onClick={onClose}>
      <div className="card w-full max-w-2xl max-h-[90vh] overflow-auto p-6" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-display text-xl font-semibold text-plum-950 dark:text-plum-100">{isEdit ? 'Edit Book' : 'Add New Book'}</h2>
          <button onClick={onClose} className="text-plum-400 hover:text-plum-700"><X size={22} /></button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Title" error={errors.title} {...register('title', { required: 'Required' })} />
            <Field label="Author" error={errors.author} {...register('author', { required: 'Required' })} />
          </div>
          <div>
            <label className="block text-sm font-medium text-plum-700 dark:text-plum-300 mb-1.5">Description</label>
            <textarea rows={3} className="input resize-none" {...register('description', { required: 'Required' })} />
            {errors.description && <p className="text-xs text-red-500 mt-1">{errors.description.message}</p>}
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-plum-700 dark:text-plum-300 mb-1.5">Category</label>
              <select className="input" {...register('category', { required: 'Required' })}>
                <option value="">Select...</option>
                {categories.map((c) => <option key={c._id} value={c._id}>{c.name}</option>)}
              </select>
              {errors.category && <p className="text-xs text-red-500 mt-1">{errors.category.message}</p>}
            </div>
            <Field label="Price ($)" type="number" step="0.01" error={errors.price} {...register('price', { required: 'Required' })} />
            <Field label="Discount Price ($)" type="number" step="0.01" {...register('discountPrice')} />
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            <Field label="Stock" type="number" error={errors.stock} {...register('stock', { required: 'Required' })} />
            <Field label="Pages" type="number" {...register('pages')} />
            <Field label="Published Year" type="number" {...register('publishedYear')} />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="ISBN" {...register('isbn')} />
            <Field label="Publisher" {...register('publisher')} />
          </div>
          <Field label="Cover Image URL" placeholder="https://..." error={errors.coverImage} {...register('coverImage', { required: 'Required' })} />

          <div className="flex gap-6 pt-1">
            <label className="flex items-center gap-2 text-sm text-plum-700 dark:text-plum-300">
              <input type="checkbox" {...register('isFeatured')} className="rounded" /> Featured
            </label>
            <label className="flex items-center gap-2 text-sm text-plum-700 dark:text-plum-300">
              <input type="checkbox" {...register('isBestSeller')} className="rounded" /> Best Seller
            </label>
          </div>

          <div className="flex gap-3 pt-2">
            <button type="button" onClick={onClose} className="btn-ghost flex-1">Cancel</button>
            <button disabled={creating || updating} className="btn-primary flex-1">
              {creating || updating ? 'Saving...' : isEdit ? 'Update Book' : 'Create Book'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

import { forwardRef } from 'react';
const Field = forwardRef(({ label, error, ...props }, ref) => (
  <div>
    <label className="block text-sm font-medium text-plum-700 dark:text-plum-300 mb-1.5">{label}</label>
    <input ref={ref} className="input" {...props} />
    {error && <p className="text-xs text-red-500 mt-1">{error.message}</p>}
  </div>
));
Field.displayName = 'Field';
