import React from "react";

const CommentRecord = ({ comment }) => {
  return (
    <div className="card bg-light">
      <div className="card-body">
        <h4 className="card-title text-primary">{comment.name}</h4>
        <p className="card-text">{comment.comment}</p>
        <p
          className={
            "card-text " +
            (comment.rating > 3 ? "text-success" : "text-danger")
          }
        >
          Rating: {comment.rating}
        </p>
      </div>
    </div>
  );
};

export default CommentRecord;
