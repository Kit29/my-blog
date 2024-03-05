import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../layout';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostDetail: React.FC = () => {
  const [post, setPost] = useState<Post>({ userId: 0, id: 0, title: '', body: '' });
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchPost = async () => {
      try {
        if (id) {
          const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
          const data: Post = await response.json();
          setPost(data);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
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
