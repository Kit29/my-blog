import React from 'react';

const PostList = ({ posts }) => {
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <a href={`/posts/${post.id}`}>
            <h2>{post.title}</h2>
            <p>{post.body.length > 100 ? `${post.body.slice(0, 100)}...` : post.body}</p>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
