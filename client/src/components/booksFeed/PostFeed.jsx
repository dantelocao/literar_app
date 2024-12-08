import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Post from '../creationPost/Posts'

const PostFeed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const response = await fetch(
            'http://localhost:5000/api/v1/posts/get-timeline-posts/67536cae2edb45a47cc40161'
          );
          const data = await response.json();
    
          // Verifique se "timelinePosts" é um array antes de atualizar o estado
          if (Array.isArray(data.timelinePosts)) {
            setPosts(data.timelinePosts);  // Atualiza o estado corretamente
            console.log(data.timelinePosts);  // Verifica os posts recebidos
          } else {
            console.error('A chave "timelinePosts" não é um array');
          }
        } catch (error) {
          console.error('Erro ao buscar posts:', error);
        }
      };
    
      fetchPosts();
    }, []);
    
  return (
    <div className="space-y-4">
        {posts.length > 1 ? (
        posts.map((post) => (
            <Post key={post._id} post={post} />
        ))
        ) : (
        <p className="text-center text-gray-600 mb-10">Nenhum post encontrado.</p>
        )}
  </div>

  )
}

export default PostFeed