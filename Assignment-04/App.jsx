import React from "react"; 
import {createBrowserRouter, RouterProvider, Navigate, NavLink, Outlet, createPath} from "react-router-dom";
import { CommentProvider } from "./Components/CommentContext";
import AllCommentsPage from "./Components/AllCommentsPage";
import AboutPage from "./Components/AboutPage";

import AddCommentPage from "./Components/AddCommentPage"; // Add this line
import CommentDetailPage from "./Components/CommentDetailPage"; // Add this line
 
const MainNavigation = () => {
    return (
   
    <nav>
        <NavLink style={({isActive}) => ({color: isActive ? "red" : "black"})} to="/">
            Comments
        </NavLink>
        <NavLink className={({isActive}) => "nav-link"+ (isActive ? "myactive" : "")} to="/about">
            About
        </NavLink>
    </nav>
    
   
    )
}

const Layout = () => {
    return (
        <div>
            <h1>My Comments</h1>
            <CommentProvider>
                <MainNavigation />
                <Outlet /> {/* This is where the child routes will be rendered */}
            </CommentProvider>
        </div>
    )
}
const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <AllCommentsPage />
            },
            {
                path: "/comment",
                element: <Navigate to="/" replace />
            },
            {
                path: "/about",
                element: <AboutPage /> 
            },
            {
                path: "about-wipro",
                element: <Navigate to= "/about" replace />
            },
            {
                path: "/add-comment",
                element: <AddCommentPage />
            },
            {
                path: "/comment/:id",
                element: <CommentDetailPage />
            },
            
        ]
    }
]);
const App = () => {
    return (
        <RouterProvider router={router} />
    )
}
export default App;