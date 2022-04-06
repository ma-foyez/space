
//import all pages here
import HomePage from './../pages/HomePage';
import PageNotFound from './../pages/PageNotFound';

const routes = [
    {
        path: "/",
        name: "Home Page",
        element: HomePage,
    },
    {
        path: "/home",
        name: "Home Page",
        element: HomePage,
    },
    {
        path: "*",
        name: "Home Page",
        element: PageNotFound,
    },
];

export default routes;