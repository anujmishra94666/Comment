import React from 'react';

function Post({ post }) {
  // Check if post.comments is defined and not empty
  const firstComment = post.comments && post.comments.length > 0 ? post.comments[0].body : 'No comments';

  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <h3>First Comment:</h3>
      <p>{firstComment}</p>
    </div>
  );
}

export default Post;
