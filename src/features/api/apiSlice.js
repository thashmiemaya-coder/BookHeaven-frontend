import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL || '/api/v1',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth?.token;
    if (token) headers.set('Authorization', `Bearer ${token}`);
    return headers;
  },
});

export const api = createApi({
  reducerPath: 'api',
  baseQuery,
  tagTypes: ['Book', 'Category', 'Order', 'User', 'Review', 'Coupon', 'Contact', 'Newsletter', 'Stats'],
  endpoints: (builder) => ({
    // ---------- Auth ----------
    register: builder.mutation({ query: (body) => ({ url: '/auth/register', method: 'POST', body }) }),
    login: builder.mutation({ query: (body) => ({ url: '/auth/login', method: 'POST', body }) }),
    logout: builder.mutation({ query: () => ({ url: '/auth/logout' }) }),
    getMe: builder.query({ query: () => '/auth/me' }),
    updateProfile: builder.mutation({
      query: (body) => ({ url: '/auth/profile', method: 'PUT', body }),
    }),
    updatePassword: builder.mutation({
      query: (body) => ({ url: '/auth/password', method: 'PUT', body }),
    }),
    forgotPassword: builder.mutation({
      query: (body) => ({ url: '/auth/forgot-password', method: 'POST', body }),
    }),
    resetPassword: builder.mutation({
      query: ({ token, password }) => ({ url: `/auth/reset-password/${token}`, method: 'PUT', body: { password } }),
    }),

    // ---------- Books ----------
    getBooks: builder.query({
      query: (params = {}) => ({ url: '/books', params }),
      providesTags: ['Book'],
    }),
    getFeatured: builder.query({ query: () => '/books/featured', providesTags: ['Book'] }),
    getBestSellers: builder.query({ query: () => '/books/bestsellers', providesTags: ['Book'] }),
    getBook: builder.query({ query: (slug) => `/books/${slug}`, providesTags: ['Book', 'Review'] }),
    createBook: builder.mutation({
      query: (body) => ({ url: '/books', method: 'POST', body }),
      invalidatesTags: ['Book'],
    }),
    updateBook: builder.mutation({
      query: ({ id, body }) => ({ url: `/books/${id}`, method: 'PUT', body }),
      invalidatesTags: ['Book'],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({ url: `/books/${id}`, method: 'DELETE' }),
      invalidatesTags: ['Book'],
    }),

    // ---------- Categories ----------
    getCategories: builder.query({ query: () => '/categories', providesTags: ['Category'] }),
    createCategory: builder.mutation({
      query: (body) => ({ url: '/categories', method: 'POST', body }), invalidatesTags: ['Category'],
    }),
    updateCategory: builder.mutation({
      query: ({ id, body }) => ({ url: `/categories/${id}`, method: 'PUT', body }), invalidatesTags: ['Category'],
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({ url: `/categories/${id}`, method: 'DELETE' }), invalidatesTags: ['Category'],
    }),

    // ---------- Reviews ----------
    addReview: builder.mutation({
      query: ({ bookId, ...body }) => ({ url: `/books/${bookId}/reviews`, method: 'POST', body }),
      invalidatesTags: ['Review', 'Book'],
    }),
    getAllReviews: builder.query({ query: () => '/reviews', providesTags: ['Review'] }),
    approveReview: builder.mutation({
      query: (id) => ({ url: `/reviews/${id}/approve`, method: 'PUT' }), invalidatesTags: ['Review'],
    }),
    deleteReview: builder.mutation({
      query: (id) => ({ url: `/reviews/${id}`, method: 'DELETE' }), invalidatesTags: ['Review'],
    }),

    // ---------- Orders ----------
    createOrder: builder.mutation({
      query: (body) => ({ url: '/orders', method: 'POST', body }), invalidatesTags: ['Order', 'Book'],
    }),
    getMyOrders: builder.query({ query: () => '/orders/my', providesTags: ['Order'] }),
    getOrder: builder.query({ query: (id) => `/orders/${id}`, providesTags: ['Order'] }),
    getAllOrders: builder.query({ query: (params = {}) => ({ url: '/orders', params }), providesTags: ['Order'] }),
    updateOrderStatus: builder.mutation({
      query: ({ id, ...body }) => ({ url: `/orders/${id}/status`, method: 'PUT', body }), invalidatesTags: ['Order'],
    }),
    cancelOrder: builder.mutation({
      query: (id) => ({ url: `/orders/${id}/cancel`, method: 'PUT' }), invalidatesTags: ['Order'],
    }),

    // ---------- Payment ----------
    createPaymentIntent: builder.mutation({
      query: (body) => ({ url: '/payment/create-intent', method: 'POST', body }),
    }),
    confirmPayment: builder.mutation({
      query: (body) => ({ url: '/payment/confirm', method: 'POST', body }), invalidatesTags: ['Order'],
    }),

    // ---------- Coupons ----------
    applyCoupon: builder.mutation({ query: (body) => ({ url: '/coupons/apply', method: 'POST', body }) }),
    getCoupons: builder.query({ query: () => '/coupons', providesTags: ['Coupon'] }),
    createCoupon: builder.mutation({
      query: (body) => ({ url: '/coupons', method: 'POST', body }), invalidatesTags: ['Coupon'],
    }),
    deleteCoupon: builder.mutation({
      query: (id) => ({ url: `/coupons/${id}`, method: 'DELETE' }), invalidatesTags: ['Coupon'],
    }),

    // ---------- Users (admin) ----------
    getUsers: builder.query({ query: (params = {}) => ({ url: '/users', params }), providesTags: ['User'] }),
    updateUserRole: builder.mutation({
      query: ({ id, role }) => ({ url: `/users/${id}/role`, method: 'PUT', body: { role } }), invalidatesTags: ['User'],
    }),
    toggleUserActive: builder.mutation({
      query: (id) => ({ url: `/users/${id}/active`, method: 'PUT' }), invalidatesTags: ['User'],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({ url: `/users/${id}`, method: 'DELETE' }), invalidatesTags: ['User'],
    }),

    // ---------- Contact ----------
    submitContact: builder.mutation({ query: (body) => ({ url: '/contact', method: 'POST', body }) }),
    getMessages: builder.query({ query: () => '/contact', providesTags: ['Contact'] }),
    updateMessage: builder.mutation({
      query: ({ id, status }) => ({ url: `/contact/${id}`, method: 'PUT', body: { status } }), invalidatesTags: ['Contact'],
    }),

    // ---------- Newsletter ----------
    subscribe: builder.mutation({ query: (body) => ({ url: '/newsletter/subscribe', method: 'POST', body }) }),
    getSubscribers: builder.query({ query: () => '/newsletter', providesTags: ['Newsletter'] }),
    broadcast: builder.mutation({ query: (body) => ({ url: '/newsletter/broadcast', method: 'POST', body }) }),

    // ---------- Dashboard ----------
    getStats: builder.query({ query: () => '/dashboard/stats', providesTags: ['Stats'] }),
    getSalesReport: builder.query({ query: (range = 'monthly') => `/dashboard/sales?range=${range}` }),
  }),
});

export const {
  useRegisterMutation, useLoginMutation, useLogoutMutation, useGetMeQuery,
  useUpdateProfileMutation, useUpdatePasswordMutation, useForgotPasswordMutation, useResetPasswordMutation,
  useGetBooksQuery, useGetFeaturedQuery, useGetBestSellersQuery, useGetBookQuery,
  useCreateBookMutation, useUpdateBookMutation, useDeleteBookMutation,
  useGetCategoriesQuery, useCreateCategoryMutation, useUpdateCategoryMutation, useDeleteCategoryMutation,
  useAddReviewMutation, useGetAllReviewsQuery, useApproveReviewMutation, useDeleteReviewMutation,
  useCreateOrderMutation, useGetMyOrdersQuery, useGetOrderQuery, useGetAllOrdersQuery,
  useUpdateOrderStatusMutation, useCancelOrderMutation,
  useCreatePaymentIntentMutation, useConfirmPaymentMutation,
  useApplyCouponMutation, useGetCouponsQuery, useCreateCouponMutation, useDeleteCouponMutation,
  useGetUsersQuery, useUpdateUserRoleMutation, useToggleUserActiveMutation, useDeleteUserMutation,
  useSubmitContactMutation, useGetMessagesQuery, useUpdateMessageMutation,
  useSubscribeMutation, useGetSubscribersQuery, useBroadcastMutation,
  useGetStatsQuery, useGetSalesReportQuery,
} = api;
