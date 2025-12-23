import App from '@/App';
import Home from '@/pages/Home';
import AuthLayout from './components/AuthLayout';
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';
import { createBrowserRouter } from 'react-router';
import ErrorPage from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'auth',
        Component: AuthLayout,
        children: [
          {
            path: 'login',
            Component: Login,
          },
          {
            path: 'signup',
            Component: Signup,
          },
        ],
      },
    ],
  },
]);

export default router;
