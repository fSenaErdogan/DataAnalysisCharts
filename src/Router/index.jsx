import {createBrowserRouter,} from "react-router-dom";
import Welcome from "../Pages/Welcome.jsx";
import ProductAdvice from "../Pages/ProductAdvice/index.jsx";
import SalesReport from "../Pages/SalesReport/index.jsx";
import Layout from "../Layout/index.jsx";

export const router = createBrowserRouter([
    {
        path: '',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Welcome/>
            },
            {
                path: '/product-advice',
                element: <ProductAdvice/>
            },
            {
                path: '/sales-report',
                element: <SalesReport/>
            },
        ]
    }
]);