import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Layout from './layout';

const Home: React.FC = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <Layout>
      <h2>Recent Posts</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>
                <a>
                  <h3>{post.title}</h3>
                  <p>{post.body.length > 100 ? `${post.body.slice(0, 100)}...` : post.body}</p>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </Layout>
  );
};

export default Home;
