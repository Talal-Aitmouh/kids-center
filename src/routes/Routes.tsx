import Layout from "@/layout/Layout";
import Home from "@/pages/Home";
import {  createBrowserRouter } from "react-router-dom";






export const routes = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                element: <Home/>,
                path: "/",
            }, 
             {
                element: <h1>About</h1>,
                path: "/about",
             }
        ]
    }
]);