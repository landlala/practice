import {createBrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./screens/Home";
import About from "./screens/About";
import Root from "./Root";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "about",
                element: <About />
            },
            {
                path: "",
                element: <Home />
            }
        ]
    },
]);

export default router;