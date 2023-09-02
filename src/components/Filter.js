import React, { useState } from 'react';

function Filter({ onFilter }) {
  const [postId, setPostId] = useState('');

  const handleFilterChange = (e) => {
    const newPostId = e.target.value;
    setPostId(newPostId);
    onFilter(newPostId);
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Enter postId to filter"
        value={postId}
        onChange={handleFilterChange}
      />
    </div>
  );
}

export default Filter;
