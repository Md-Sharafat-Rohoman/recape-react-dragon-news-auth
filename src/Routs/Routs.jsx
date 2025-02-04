import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import News from "../Pages/News/News";
import PrivetRoute from "./PrivetRoute";

const routs = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/news.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/news/:id',
            element:<PrivetRoute><News></News></PrivetRoute>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
]);

export default routs;