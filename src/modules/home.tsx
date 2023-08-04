import { type RouteObject } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ListPageSkeleton } from '@ant-design/pro-skeleton';
import App from '@/App';

const Home = lazy(() => import('@/routes/home'));

// 首页模块
const homeRouter: Array<RouteObject> = [
  {
    element: <App />,
    children: [
      {
        path: '/home/index',
        element: (
          <Suspense fallback={<ListPageSkeleton />}>
            <Home />
          </Suspense>
        ),
      },
    ],
  },
];

export default homeRouter;
