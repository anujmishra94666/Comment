import React, { useState, useEffect } from "react";

function App() {
  const [comments, setComments] = useState([]);
  const [filteredComments, setFilteredComments] = useState([]);
  const [selectedComment, setSelectedComment] = useState(null);
  const [postIdFilter, setPostIdFilter] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => setComments(data.slice(0, 100))); // Limit to the first 100 comments
  }, []);

  useEffect(() => {
    // Apply the postId filter
    if (!postIdFilter) {
      setFilteredComments(comments);
    } else {
      const filtered = comments.filter(
        (comment) => comment.postId.toString() === postIdFilter
      );
      setFilteredComments(filtered);
    }
  }, [comments, postIdFilter]);

  const handleCommentClick = (comment) => {
    setSelectedComment(comment);
  };

  return (
    <div className="app">
      <div className="left-side">
        <input
          className="input"
          type="text"
          placeholder="Filter by postId"
          value={postIdFilter}
          onChange={(e) => setPostIdFilter(e.target.value)}
        />
        <ul>
          {filteredComments.map((comment) => (
            <li
              key={comment.id}
              className="li-name"
              onClick={() => handleCommentClick(comment)} // Clicking on the comment
              style={{
                cursor: "pointer",
                borderRadius: "6px",
                backgroundcolor: "#d7f3f4",
                border: "2px solid cadetblue",
              }}
            >
              {comment.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="right-side">
        {selectedComment && (
          <div className="right-div">
            <h2>{selectedComment.name}</h2>
            <p>{selectedComment.body}</p>
          </div>
        )}
      </div>
    </div>

    
  );
}

export default App;

// import React, { useState, useEffect } from 'react';

// function App() {
//   const [comments, setComments] = useState([]);
//   const [filteredComments, setFilteredComments] = useState([]);
//   const [selectedPost, setSelectedPost] = useState(null);
//   const [postIdFilter, setPostIdFilter] = useState('');

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/comments')
//       .then((response) => response.json())
//       .then((data) => setComments(data.slice(0, 100))); // Limit to the first 100 comments
//   }, []);

//   useEffect(() => {
//     // Apply the postId filter
//     if (!postIdFilter) {
//       setFilteredComments(comments);
//     } else {
//       const filtered = comments.filter((comment) => comment.postId.toString() === postIdFilter);
//       setFilteredComments(filtered);
//     }
//   }, [comments, postIdFilter]);

//   const handlePostClick = (postId) => {
//     // Find the selected post
//     const post = comments.find((comment) => comment.postId.toString() === postId);
//     setSelectedPost(post);
//   };

//   return (
//     <div className="app">
//       <div className="left-side">
//         <input
//           type="text"
//           placeholder="Filter by postId"
//           value={postIdFilter}
//           onChange={(e) => setPostIdFilter(e.target.value)}
//         />
//         <ul>
//           {filteredComments.map((comment) => (
//             <li key={comment.id} onClick={() => handlePostClick(comment.postId)}>
//               {comment.name}
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="right-side">
//         {selectedPost && (
//           <div>
//             <h2>{selectedPost.name}</h2>
//             <p>{selectedPost.body}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;

// import React, { useState, useEffect } from 'react';
// import Comments from './components/Comments';
// import Post from './components/Post';
// import Filter from './components/Filter';

// function App() {
//   const [posts, setPosts] = useState([]);
//   const [filteredPosts, setFilteredPosts] = useState([]);
//   const [selectedPost, setSelectedPost] = useState(null);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then((response) => response.json())
//       .then((data) => setPosts(data.slice(0, 10))); // Limit to the first 10 posts
//   }, []);

//   const handleFilter = (postId) => {
//     if (postId === '') {
//       setFilteredPosts([]);
//     } else {
//       const filtered = posts.filter((post) => post.id === parseInt(postId));
//       setFilteredPosts(filtered);
//     }
//   };

//   const handlePostClick = (post) => {
//     setSelectedPost(post);
//   };

//   return (
//     <div className="app">
//       <h1>Post Viewer</h1>
//       <div className="left-side">
//         <Filter onFilter={handleFilter} />
//         {filteredPosts.length > 0
//           ? filteredPosts.map((post) => (
//               <div
//                 key={post.id}
//                 className="post-preview"
//                 onClick={() => handlePostClick(post)}
//               >
//                 <Post post={post} />
//               </div>
//             ))
//           : posts.map((post) => (
//               <div
//                 key={post.id}
//                 className="post-preview"
//                 onClick={() => handlePostClick(post)}
//               >
//                 <Post post={post} />
//               </div>
//             ))}
//       </div>
//       <div className="right-side">
//         {selectedPost && <Post post={selectedPost} />}
//         <Comments />
//       </div>
//     </div>
//   );
// }

// export default App;
