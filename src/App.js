import './App.css';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Home from './Components/Home/Home';
import Login from './Components/login/Login';
import Layout from './Components/Layout/Layout';

function App() {
  const [cookies] = useCookies(["token"]);

  function ProtectedRoute({ children }) {
    if (cookies.token) {
      return children;
    } else {
      return <Navigate to="/login/1231" />;
    }
  }

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '',
          element: <ProtectedRoute><Home /></ProtectedRoute>
        },
        {
          path: 'home',
          element: <ProtectedRoute><Home /></ProtectedRoute>
        },
        {
          path: '/login/:uid',
          element: <Login /> // تسجيل الدخول لا يحتاج إلى حماية أو Layout
        }
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
