import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, StrictMode } from 'react';

// import HomePage from './components/HomePage';
// import AboutPage from './components/AboutPage';
// import ContactPage from './components/ContactPage';
// import ErrorPage from './components/ErrorPage';

// ========== HANDLE DEFAULT EXPORTS WITH lazy() & import() function ========
const AboutPage = lazy(() => import('./components/AboutPage'))
const HomePage = lazy(() => import('./components/HomePage'))
const ErrorPage = lazy(() => import('./components/ErrorPage'))

// ========== HANDLE NAMED EXPORTS WITH lazy() & import() function ========
const ContactPage = lazy(() => import('./components/ContactPage').then((module) => ({default: module.ContactPage})))

// Define the routes configuration array
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about", // Matches any URL that doesn't exist
        element: <AboutPage />,
      },
      {
        path: "/contact", // Matches any URL that doesn't exist
        element: <ContactPage />,
      },
    ]
  },
]);

const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)