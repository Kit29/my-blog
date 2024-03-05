import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../layout';

const PostDetail: React.FC = () => {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await response.json();
        setPost(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    if (id) {
      fetchPost();
    }
  }, [id]);

  return (
    <Layout>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </Layout>
  );
};

export default PostDetail;
