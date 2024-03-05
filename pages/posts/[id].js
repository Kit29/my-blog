import React from 'react';
import Post from '../../components/Post';

const PostDetail = ({ post }) => {
  return (
    <div>
      <Post post={post} />
    </div>
  );
};

export async function getStaticPaths() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();

  const paths = posts.map(post => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const post = await response.json();

  return {
    props: {
      post,
    },
  };
}

export default PostDetail;
