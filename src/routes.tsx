import { lazy, Suspense } from 'react';
import { redirect, type RouteObject } from 'react-router-dom';
import { ListPageSkeleton } from '@ant-design/pro-skeleton';
import AppBoundary from './components/AppBoundary';
import App from './App';
import { AuthProvider } from './hooks/useAuth';
import { PageLoading } from '@ant-design/pro-layout';

const NotFound = lazy(() => import('./routes/404'));
const UserLogin = lazy(() => import('./routes/user.login'));
const Home = lazy(() => import('@/routes/home'));
const DataScreen = lazy(() => import('@/routes/dataScreen'));
const ProTable = lazy(() => import('@/routes/proTable'));
const Counter = lazy(() => import('@/routes/counter'));

export const routes: Array<RouteObject> = [
  // { path: '/', element: <App /> },
  {
    path: '/login',
    element: (
      <Suspense fallback={<PageLoading />}>
        <UserLogin />
      </Suspense>
    ),
  },
  {
    index: true,
    loader: () => redirect('/home/index'),
  },
  {
    path: '/home/index',
    element: (
      <Suspense fallback={<ListPageSkeleton />}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: '/dataScreen/index',
    element: (
      <Suspense fallback={<ListPageSkeleton />}>
        <DataScreen />
      </Suspense>
    ),
  },
  {
    path: '/proTable/useHooks',
    element: (
      <Suspense fallback={<ListPageSkeleton />}>
        <ProTable />
      </Suspense>
    ),
  },
  {
    path: '/proTable/useComponent',
    element: (
      <Suspense fallback={<ListPageSkeleton />}>
        <Counter />
      </Suspense>
    ),
  },
  // {
  //   path: '/proTable/useComponent',
  //   element: lazyLoad(
  //     React.lazy(() => import('@/views/proTable/useComponent/index')),
  //   ),
  // },
  {
    path: '*',
    element: (
      <Suspense fallback={<ListPageSkeleton />}>
        <NotFound />
      </Suspense>
    ),
  },
];

const entryRoutes: Array<RouteObject> = [
  {
    path: '/',
    element: (
      <AuthProvider>
        <App />
      </AuthProvider>
    ),
    children: routes,
    errorElement: <AppBoundary />,
  },
];

export default entryRoutes;
