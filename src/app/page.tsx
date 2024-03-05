import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';  // Додано dynamic для імпорту useEffect та useState
const Layout = dynamic(() => import('./layout'));

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Home: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data: Post[] = await response.json();
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
      <h2>Останні дописи</h2>
      {loading ? (
        <p>Завантаження...</p>
      ) : (
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <a onClick={() => router.push(`/posts/${post.id}`)} style={{ cursor: 'pointer' }}>
                <h3>{post.title}</h3>
                <p>{post.body.length > 100 ? `${post.body.slice(0, 100)}...` : post.body}</p>
              </a>
            </li>
          ))}
        </ul>
      )}
    </Layout>
  );
};

export default Home;
