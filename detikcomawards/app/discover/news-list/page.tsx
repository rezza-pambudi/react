"use client"

import { useEffect, useState } from 'react';
import CardList from '@/components/card-list/card-list';

export default function sectionNewsList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
      const data = await res.json();
      setPosts(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <CardList key={post.id} title={post.title} description={post.body} />
      ))}
    </div>
  );
}
