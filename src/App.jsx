import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/routing/ScrollToTop';
import ProtectedRoute from './components/routing/ProtectedRoute';
import AdminRoute from './components/routing/AdminRoute';
import PublicLayout from './components/layout/PublicLayout';
import AdminLayout from './components/layout/AdminLayout';
import Loader from './components/ui/Loader';

// Lazy load pages for code-splitting / performance
const Home = lazy(() => import('./pages/Home'));
const Books = lazy(() => import('./pages/Books'));
const BookDetails = lazy(() => import('./pages/BookDetails'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Cart = lazy(() => import('./pages/Cart'));
const Checkout = lazy(() => import('./pages/Checkout'));
const Wishlist = lazy(() => import('./pages/Wishlist'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'));
const ResetPassword = lazy(() => import('./pages/ResetPassword'));
const Profile = lazy(() => import('./pages/Profile'));
const Orders = lazy(() => import('./pages/Orders'));
const OrderDetails = lazy(() => import('./pages/OrderDetails'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Admin pages
const Dashboard = lazy(() => import('./pages/admin/Dashboard'));
const AdminBooks = lazy(() => import('./pages/admin/AdminBooks'));
const AdminPlaceholder = lazy(() => import('./pages/admin/AdminPlaceholder'));

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<Loader full />}>
        <Routes>
          {/* Public + customer */}
          <Route element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="books" element={<Books />} />
            <Route path="books/:slug" element={<BookDetails />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="cart" element={<Cart />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="reset-password/:token" element={<ResetPassword />} />

            <Route path="checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
            <Route path="profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="orders" element={<ProtectedRoute><Orders /></ProtectedRoute>} />
            <Route path="orders/:id" element={<ProtectedRoute><OrderDetails /></ProtectedRoute>} />
            <Route path="*" element={<NotFound />} />
          </Route>

          {/* Admin */}
          <Route path="/admin" element={<AdminRoute><AdminLayout /></AdminRoute>}>
            <Route index element={<Dashboard />} />
            <Route path="books" element={<AdminBooks />} />
            <Route path="categories" element={<AdminPlaceholder title="Category Management" />} />
            <Route path="orders" element={<AdminPlaceholder title="Order Management" />} />
            <Route path="users" element={<AdminPlaceholder title="User Management" />} />
            <Route path="reviews" element={<AdminPlaceholder title="Reviews Management" />} />
            <Route path="messages" element={<AdminPlaceholder title="Contact Messages" />} />
            <Route path="coupons" element={<AdminPlaceholder title="Coupons" />} />
            <Route path="subscribers" element={<AdminPlaceholder title="Newsletter Subscribers" />} />
            <Route path="reports" element={<AdminPlaceholder title="Sales Reports" />} />
            <Route path="settings" element={<AdminPlaceholder title="Settings" />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
