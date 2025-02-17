import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import PublicRoutes from './routes/PublicRoutes';
import SingleFurniture from "../pages/furniture/SingleFurniture";

// Lazy-loaded components
const Home = lazy(() => import("../pages/Home"));
const AboutUs = lazy(() => import("../pages/AboutUs"));

// Router configuration
const routers = createBrowserRouter([
    {
        path: "/",
        element: <PublicRoutes />,
        children: [
            { path: "", index: true, element: <Home /> },
            { path: "/about-us", element: <AboutUs /> },
            { path: `/singlefurniture/:id`, element: <SingleFurniture /> }
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
