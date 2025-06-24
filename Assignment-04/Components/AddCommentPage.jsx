//using formik and yup creatre a form to add a comment
import React from "react";
import { useNavigate } from "react-router-dom";
import CommentForm from "./CommentForm";
import CommentApi from "../Data/CommentApi";
import {CommentContext} from "./CommentContext";
import { useContext } from "react";
// import FormikCommentForm from "./CommentForm";


const AddCommentPage = () => {
    const navigate = useNavigate();
    const commentContextVal = useContext(CommentContext);
    const saveComment = async (comment) => {
        console.log("saveComment called with:", comment);
        const newComment = await CommentApi.saveComment(comment);
        commentContextVal.addComment(newComment);
        navigate('/comment');
        
    }
    return  <CommentForm onSave={(comment) => saveComment(comment)} />
}
export default AddCommentPage;