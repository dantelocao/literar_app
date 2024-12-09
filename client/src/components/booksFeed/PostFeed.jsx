import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Post from '../creationPost/Posts'
import { getAllPosts, getTimelinePosts } from '../../utils/api/api'
import { useParams } from 'react-router-dom'

const PostFeed = ({userPosts}) => {
    const [posts, setPosts] = useState([]);
    const {username} = useParams()

    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const response = userPosts ? await getTimelinePosts(username) : await getAllPosts()

          // Verifique se é um array antes de atualizar o estado
          if (Array.isArray(response.data.posts)) {
            //console.log(data.timelinePosts);  // Verifica os posts recebidos
            setPosts(response.data.posts.flat())// Atualiza o estado corretamente

          } else {
            console.error('A chave "timelinePosts" não é um array');
          }
        } catch (error) {
          console.error('Erro ao buscar posts:', error);
        }
      };
    
      fetchPosts();
    }, [username]);
    
  return (
    <div className="space-y-4">
        {posts.length > 0 ? (
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