import React, {useContext} from "react";
import Comment from "./Comment";
import {CommentContext} from "./CommentContext";
import CommentApi from "../Data/CommentApi";
import { useNavigate } from "react-router-dom";

const CommentList = () => {
    const commentContextVal = useContext(CommentContext);
    const navigate = useNavigate();

    const deleteComment = async (id) => {
        await CommentApi.deleteComment(id);
        commentContextVal.deleteComment(id);
    };

    const handleAuthorClick = (e, id, author) => {
        e.preventDefault();
        if (window.confirm(`Are you interested to see Comments by ${author}?`)) {
            navigate(`/comment/${id}`);
        }
        // else do nothing, stay on the same page
    };

    const getCommentNodes = () => {
        return commentContextVal && commentContextVal.comments.map(comment => (
            <Comment
                key={comment.id}
                id={comment.id}
                author={
                    <a
                        href={`/comment/${comment.id}`}
                        onClick={e => handleAuthorClick(e, comment.id, comment.author)}
                        style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}
                    >
                        {comment.author}
                    </a>
                }
                onDelete={id => deleteComment(id)}
            >
                {comment.text}
            </Comment>
        ));
    };

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Comment</th>
                    </tr>
                </thead>
                <tbody>
                    {getCommentNodes()}
                </tbody>
            </table>
        </>
    );
};

export default CommentList;