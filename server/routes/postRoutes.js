import express from "express";
import { 
    createPostController, 
    deletePostController, 
    LikeAndDislikeController, 
    getPostController,
    updatePostController, 
    getTimelinePostController
} from "../controllers/postController.js";

const router = express.Router();

//create post
router.post("/create-post", createPostController);
// update post
router.put("/update-post/:id", updatePostController);
// delete post
router.delete("/delete-post/:id", deletePostController);
//likes and dislikes
router.put("/like-post/:id", LikeAndDislikeController);
// get post
router.get("/get-post/:id", getPostController);
// get timelineposts
router.get("/get-timeline-posts/:userId", getTimelinePostController);


export default router;