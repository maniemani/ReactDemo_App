import React from "react";
import { Link } from "react-router-dom";

export default class Comment extends React.Component {
    constructor(props) {
        super(props);
    }
    onDelete(event) {
        event.preventDefault();
        this.props.onDelete(this.props.id);
    }
   
    render() {
        console.log("Comment render");
        // const path = `/comment/${this.props.id}`;
        return (
            <tr>
                <td>{this.props.author}</td>
                <td>{this.props.children}</td>
                <td>
                    <a href="about:blank" onClick={(e) => this.onDelete(event)}>
                        Delete
                    </a>
                </td>
            </tr>
        );
    }
}
// const Comment = ({ author, children }) => {
//     console.log("Comment render");
//     return (
//         <tr>
//             <td>{author}</td>
//             <td>{children}</td>
//         </tr>
//     );
// };
// export default Comment;

// import React from "react";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// const Comment = ({ author, children, id }) => {
//     const navigate = useNavigate();
//     const handleDelete = (event) => {
//         event.preventDefault();
//         // Call the delete function passed as a prop
//         // this.props.onDelete(this.props.id);
//         navigate("/comment");
//     };
//     return (
//         <tr>
//             <td>{author}</td>
//             <td>{children}</td>
//             <td>
//                 <a href="about:blank" onClick={handleDelete}>
//                     Delete
//                 </a>
//             </td>
//         </tr>
//     );
// }
// export default Comment;
