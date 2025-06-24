import React from "react";
import Comment from "./Comment";

export default class CommentList extends React.Component {
    render() {
        console.log("CommentList render");
        let commentNodes = this.props.comments.map(comment => (
            <Comment key={comment.id} author={comment.author}>
                {comment.text}
            </Comment>
        )
        );
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
                        {commentNodes}
                    </tbody>
                </table>
            </>

        )
    }
}