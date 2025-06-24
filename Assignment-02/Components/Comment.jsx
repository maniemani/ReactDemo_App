import React from "react";

export default class Comment extends React.Component {
    render() {
        console.log("Comment render");
        return (
            <tr>
                <td>{this.props.author}</td>
                <td>{this.props.children}</td>
            </tr>
        );
    }
}