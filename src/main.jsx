import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./Home.jsx"
import About from "./About.jsx"
import Courses from "./Courses.jsx"
import Admissions from "./Admissions.jsx"
import Notfound from "./NotFound.jsx"

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: "/About", element: <About /> },
            { path: "/Courses", element: <Courses /> },
            { path: "/Admissions", element: <Admissions /> },
        ],
    },
    {
        path: "*",
        element: <Notfound />,
    },
])

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={routes} />
    </StrictMode>
)
