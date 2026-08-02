import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import Error from './components/Error';
import ProductPage from './components/ProductPage';

// Define the routes configuration array
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error /> ,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about", // Matches any URL that doesn't exist
                element: <div style={{marginTop: '100px'}}>This is About Page</div>,
            },
            {
                path: "/product", // Matches any URL that doesn't exist
                element: <ProductPage />,
            },
        ]
    },
]);

const root = createRoot(document.getElementById('root'))

root.render(<RouterProvider router={router} />);