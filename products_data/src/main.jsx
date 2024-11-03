import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import PageNotFound from './pages/PageNotFound.jsx';
import CreateProducts from './pages/CreateProducts.jsx';
import ProductDetails from './pages/ProductDetails.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <PageNotFound />,
    },
    {
        path: "/create_products",
        element: <CreateProducts />,
    },
    {
        path: "/product_details/:productId",
        element: <ProductDetails />,
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
