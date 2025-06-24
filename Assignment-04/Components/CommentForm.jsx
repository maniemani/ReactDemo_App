import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const CommentForm = ({ errors, touched }) => (
    <div>
        <h1>Comment Form</h1>
        <Form>
            <div>
                <Field type="text" name="author" placeholder="Author" />
                {touched.author && errors.author && <span style={{ color: "red" }}>{errors.author}</span>}
            </div>
            <div>
                <Field type="text" name="text" placeholder="Comment" />
                {touched.text && errors.text && <span style={{ color: "red" }}>{errors.text}</span>}
            </div>
            <br />
            <button type="submit">Save</button>
        </Form>
    </div>
);

const FormikCommentForm = withFormik({
    mapPropsToValues() {
        return {
            author: "",
            text: ""
        };
    },
    validationSchema: Yup.object().shape({
        author: Yup.string().required("Author is required"),
        text: Yup.string().required("Comment is required")
    }),
    handleSubmit(values, { props, setSubmitting, resetForm }) {
        if (props.onSave) {
            props.onSave(values); // <-- This sends the form data to saveComment
        }
        setSubmitting(false);
        resetForm();
    }
})(CommentForm);

export default FormikCommentForm;