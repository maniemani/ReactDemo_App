import React from "react"; 
import AllCommentsPage from "./Components/AllCommentsPage";
import { createBrowserRouter, RouterProvider, Navigate, NavLink, Outlet, useNavigate } from "react-router-dom";
import AboutPage from "./Components/AboutPage";
import LoginPage from "./Components/Login";
import ProtectedRoute from "./Components/ProtectedRoute";

const MainNavigation = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        navigate("/");
    };

    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    return (
        <nav>
            <NavLink style={({isActive}) => ({color: isActive ? "red" : "black"})} to="/All">
                Comments
            </NavLink>
            <NavLink className={({isActive}) => "nav-link"+ (isActive ? "myactive" : "")} to="/All/about">
                About
            </NavLink>
            {isLoggedIn && (
                <button onClick={handleLogout} style={{ marginLeft: 16 }}>
                    Logout
                </button>
            )}
        </nav>
    );
};

const Layout = () => {
    return (
        <div>
            <MainNavigation />
            <Outlet /> {/* This is where the child routes will be rendered */}
        </div>
    )
}
const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <LoginPage/>
            },
            {
                path: "/All",
                element: (
                <ProtectedRoute>
                <AllCommentsPage />
                </ProtectedRoute>
            )
            },
            {
                path: "/All/about",
                element: (
                <ProtectedRoute>
                <AboutPage />
                </ProtectedRoute>
            )
            },
            {
                path: "about-wipro",
                element: <Navigate to= "/All/about" replace />
            }
            
        ]
    }
]);
const App = () => {
    return (
        <RouterProvider router={router} />
    )
}
export default App;