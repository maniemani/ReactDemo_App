import React,{createContext, useState} from "react";

export const CommentContext = createContext();

export const CommentProvider = (props) => {
    const [comments, setComments] = useState([]);

    return (
        <CommentContext.Provider value={{
            comments,
            initComments: comments => setComments(comments)
            ,
            addComment: comment =>
                setComments([...comments, comment]),
            deleteComment: id => {
               setComments(comments.filter(comment => comment.id !== id));
            }
        }}>
            {props.children}
        </CommentContext.Provider>
    );
}

