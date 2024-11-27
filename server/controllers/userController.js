import { 
    deleteUser, 
    updateUser, 
    getUser, 
    followUser, 
    unfollowUser 
} from "../services/userServices.js";

export const updateUserController =  async(req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            const user = await updateUser(req.params.id, req.body); 
            res.status(200).json({
                user,
                message:"account has been updated",
            });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    } else {
        res.status(500).json("you can only update your account!");
    }
};

export const deleteUserController =  async(req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            await deleteUser(req.params.id); 
            res.status(200).json({
                message:"account has been deleted",
            });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
        
    } else {
        res.status(500).json("you can only delete your account!");
    }
};

export const getUserController =  async(req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            const user = await getUser(req.params.id); 
            const { password, ...data } = user._doc;
            res.status(200).json({
                data,
                message:"get account",
            });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }        
    } else {
        res.status(500).json("you can only get your account!");
    }
};

export const followUserController =  async(req, res) => {
    try {
        const data = await followUser(req.body, req.params);
        res.status(200).json({
            data,
            message:"follow user",
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }        
};

export const unfollowUserController =  async(req, res) => {
    try {
        const data = await unfollowUser(req.body, req.params);
        res.status(200).json({
            data,
            message:"unfollow user",
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }        
};








