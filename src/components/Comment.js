import React from 'react';

function Comment({ comment }) {
  return (
    <div className="comment">
      <h3>{comment.name}</h3>
      <p>{comment.body}</p>
    </div>
  );
}

export default Comment;
