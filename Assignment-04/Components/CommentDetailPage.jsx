//on clicking author name in Allcommentspage, it should navigate to the author detail page
import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CommentContext } from "./CommentContext";
import CommentApi from "../Data/CommentApi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CommentDetailPage = () => {
    const { id } = useParams();
    const commentContextVal = useContext(CommentContext);
    const [comment, setComment] = useState(null);
    const navigate = useNavigate();

   useEffect(() => {
    const fetchComment = async () => {
        try {
            const fetchedComment = await CommentApi.getAllComments();
            console.log("Fetched comments:", fetchedComment);
            console.log("URL id:", id);
            const foundComment = fetchedComment.find((c) => String(c.id) === String(id));
            console.log("Found comment:", foundComment);
            setComment(foundComment);
        } catch (error) {
            console.error("Error fetching comment:", error);
        }
    };
    fetchComment();
}, [id]);

    if (!comment) {
        return <div>Loading...</div>;
    }
// just to show the comment details
    return (
        <div>
            <h1>Comment Detail</h1>
            <p><strong>Author:</strong> {comment.author}</p>
            <p><strong>Comment:</strong> {comment.text}</p>
            <button onClick={() => navigate('/comment')}>Back to Comments</button>
        </div>
    );
}
export default CommentDetailPage;

