import React from 'react'
import CommentRecord from "./CommentRecord";

const Comments = ({comments}) => {


    return (
        <ul className="list-unstyled">
            {comments.map(
                (comment) => (
                    <li className="mb-1" key={comment.id}>
                        {<CommentRecord comment={comment} /> }
                    </li>)
            )}
        </ul>
    )
}

export default Comments