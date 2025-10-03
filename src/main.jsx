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
import CoursePage from "./CoursePage.jsx"
import Contact from "./Contact.jsx"
import Student from "./Student.jsx"

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: "/about", element: <About /> },
            { path: "/courses", element: <Courses /> },
            { path: "/course/:courseSlug", element: <CoursePage /> },
            { path: "/admissions", element: <Admissions /> },
            { path: "/contact", element: <Contact/> },
            { path: "/student-life", element: <Student/> },

            
            
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
