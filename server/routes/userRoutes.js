import express from "express"
import { 
    deleteUserController, 
    followUserController, 
    getUserController, 
    unfollowUserController, 
    updateUserController 
} from "../controllers/userController.js";

const router = express.Router();

// update user
router.put("/:id", updateUserController)
// delete user
router.delete("/:id", deleteUserController)
// get user
router.get("/:id", getUserController)
//follow user
router.put("/follow/:id", followUserController)
//unfollow user
router.put("/unfollow/:id", unfollowUserController)

export default router;