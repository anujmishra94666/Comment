import React, { useState, useEffect } from 'react';
import Comment from './Comment';

function Comments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((data) => setComments(data.slice(0, 100))); // Limit to the first 100 comments
  }, []);

  return (
    <div className="comments">
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

export default Comments;
