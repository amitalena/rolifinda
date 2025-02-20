import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import PublicRoutes from './routes/PublicRoutes';
import Blogs from "../pages/blogs/Blogs";
import SingleBlogPage from "../pages/blogs/SingleBlog";

// Lazy-loaded components
const Home = lazy(() => import("../pages/Home"));
const AboutUs = lazy(() => import("../pages/aboutus/AboutUs"));
const SingleFurniture = lazy(() => import("../pages/furniture/SingleFurniture"));
const SingleElectric = lazy(() => import("../pages/electric/SingleElectric"));
const SingleTiles = lazy(() => import("../pages/tiles/SingleTiles"));
const ContactUs = lazy(() => import("../pages/contact/ContactUs"));


// Router configuration
const routers = createBrowserRouter([
    {
        path: "/",
        element: <PublicRoutes />,
        children: [
            { path: "", index: true, element: <Home /> },
            { path: "/aboutus", element: <AboutUs /> },
            { path: "/contactus", element: <ContactUs /> },
            { path: "/blogs", element: <Blogs /> },
            { path: '/singlefurniture/:id', element: <SingleFurniture /> },
            { path: '/singletiles/:id', element: <SingleTiles /> },
            { path: '/singleelectric/:id', element: <SingleElectric /> },
            { path: '/singleblog/:id', element: <SingleBlogPage /> }
        ],
    },
]);

export default function MainRouter() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <RouterProvider router={routers} />
        </Suspense>
    );
}
