import { RouterProvider } from 'react-router-dom';
import Index from './pages/Index';
import { createBrowserRouter, Route } from 'react-router-dom';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Index />,
    },
  ]);
  return <RouterProvider router={router} />;
}
