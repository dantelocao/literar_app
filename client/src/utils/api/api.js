import axios from "axios";

export const API = axios.create({
    baseURL: "http://34.172.77.82:5000/api/v1",
})

export const getTimelinePosts = (username) => API.get(`/posts/get-timeline-posts/${username}`)
export const getAllPosts = () => API.get("/posts")
export const getAllBooks = () => API.get('/books/get-books')

// user
export const getUserData = (userId) => API.get(`/users/${userId}`)
export const getUserProfileData = (username) => API.get(`/users?username=${username}`)
export const updateUserProfileData = (userId, data) => API.put(`/users/${userId}`, data);

// post
export const createPost = (data) => API.post("/posts/create-post", data)

