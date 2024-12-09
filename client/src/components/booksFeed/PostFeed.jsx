import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Post from '../creationPost/Posts'
import { getTimelinePosts } from '../../utils/api/api'

const PostFeed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const response = await getTimelinePosts("67536cae2edb45a47cc40161")
          console.log(response.data.timelinePosts)

          // Verifique se "timelinePosts" é um array antes de atualizar o estado
          if (Array.isArray(response.data.timelinePosts)) {
            //console.log(data.timelinePosts);  // Verifica os posts recebidos
            setPosts(response.data.timelinePosts.flat())// Atualiza o estado corretamente

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
        ) }
  </div>

  )
}

export default PostFeed