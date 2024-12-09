import { 
    createPost, 
    deletePost, 
    getAllPosts, 
    getPost, 
    getTimelinePosts, 
    LikeAndDislike, 
    updatePost
} from "../services/postServices.js";


export const createPostController = async (req, res) => {
    try {
        const newPost = await createPost(req.body);

        res.status(200).json({
            newPost,
            message:"post has been created",
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ 
            message: "post creation failed",
            err
         })
    }        
}

export const updatePostController = async (req, res) => {
    try {
        const updatedPost = await updatePost(req.params, req.body);

        res.status(200).json({
            updatedPost,
            message:"post has been updated",
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ 
            message: "post updated failed",
            err
         })
    }        
}

export const deletePostController = async (req, res) => {
    try {
        const deletedPost = await deletePost(req.params, req.body);

        res.status(200).json({
            deletedPost,
            message:"post has been deleted",
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ 
            message: "delete post failed",
            err
         })
    }        
}

export const LikeAndDislikeController = async (req, res) => {
    try {
        const post = await LikeAndDislike(req.params, req.body);

        res.status(200).json({
            post,
            message:"post like or dislike completed",
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ 
            message: "post like or dislike failed",
            err
         })
    }        
}

export const getPostController = async (req, res) => {
    try {
        const post = await getPost(req.params, req.body);

        res.status(200).json({
            post,
            message:"post get completed",
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ 
            message: "post get failed",
            err
         })
    }        
}

export const getAllPostsController = async (req, res) => {
    try {
        const posts = await getAllPosts();
        res.status(200).json({
            posts,
            message:"posts get completed",
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ 
            message: "posts get failed",
            err
         })
    }        
}


export const getTimelinePostController = async (req, res) => {
    try {
        const posts = await getTimelinePosts(req.params); 
        res.status(200).json({
            posts,
            message: "timeline post fetched successfully"
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ 
            message: "post get failed",
            err
         })
    }        
}