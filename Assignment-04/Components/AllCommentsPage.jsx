import React, { use, useContext, useEffect } from "react"; 
import {Link} from "react-router-dom";
import CommentList from "./CommentList";
import CommentApi from "../Data/CommentApi";
import { CommentContext } from "./CommentContext"



const AllCommentsPage = () => {
    const commentContextVal = useContext(CommentContext);

    useEffect(() => {
        async function fetchData() {
            const initialComments = await CommentApi.getAllComments();
            commentContextVal.initComments(initialComments);
        }
        fetchData();
    }, []);
    
        return (
            <>
                <h1>Comments - using context API (useContext)</h1>
                <CommentList />
                <br />
                <Link to="/add-comment">
                    Add Comment
                </Link>
            </>
        );
    
}
export default AllCommentsPage;