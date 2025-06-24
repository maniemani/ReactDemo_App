import React from "react";
import { useParams } from "react-router-dom";

const CommentDetailPage = () => {
    let params = useParams();
    return (
        <div>
            <h1>Comment Detail Page</h1>
            <p>Comment ID: {params.commentId}</p>
            <p>Comment Author: {params.author}</p>
            <p>Comment Text: {params.text}</p>
        </div>
    );
}
export default CommentDetailPage;