import React from "react"; 
import CommentList from "./CommentList";
import CommentApi from "../Data/CommentApi";


export default class AllCommentsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        };
    }
    // componentDidMount() {
    //     this.setState({ comments: CommentApi.getAllComments() });
    // }
    // componentDidMount() {
        
    //     CommentApi.getAllComments()
    //     .then(data => this.setState({ comments: data }))
    // }
    async componentDidMount() {
        try {
            const data = await CommentApi.getAllComments();
            this.setState({ comments: data });
        } catch (error) {
            console.error("Error fetching comments:", error);
        }
    }

    render() {
        console.log("AllCommentsPage render");
        return (
            <>
                <h1>Comments</h1>
                <CommentList comments={this.state.comments} />
            </>
        );
    }
}