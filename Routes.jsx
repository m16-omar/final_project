import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Checkout from "pages/Checkout";
import Thumbnail from "pages/Thumbnail";
import Home1 from "pages/Home1";
import Shop from "pages/Shop";
import SingleProduct from "pages/SingleProduct";
import CartSidebar from "pages/CartSidebar";
import ProductComparison from "pages/ProductComparison";
import Cart from "pages/Cart";
import Contact from "pages/Contact";
import Blog from "pages/Blog";

const ProjectRoutes = () => {
    let element = useRoutes([
        { path: "project-dashboard", element: <Home /> },
        { path: "*", element: <NotFound /> },
        {
            path: "/",
            element: <Checkout />,
        },
        {
            path: "thumbnail",
            element: <Thumbnail />,
        },
        {
            path: "home1",
            element: <Home1 />,
        },
        {
            path: "shop",
            element: <Shop />,
        },
        {
            path: "singleproduct",
            element: <SingleProduct />,
        },
        {
            path: "cartsiderbar",
            element: <CartSidebar />,
        },
        {
            path: "cart",
            element: <Cart />,
        },
        {
            path: "contact",
            element: <Contact />,
        },
        {
            path: "blog",
            element: <Blog />,
        },
    ]);

    return element;
};

export default ProjectRoutes;