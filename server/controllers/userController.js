import { 
    deleteUser, 
    updateUser, 
    getUser, 
    followUser, 
    unfollowUser, 
    getUserProfile
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
    try {
        const user = await getUser(req.params.id); 
        const { password, ...data } = user._doc;
        res.status(200).json({
            userInfo: data,
            message:"get account",
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }        
};


export const getUserProfileController =  async(req, res) => {
    try {
        const { username } = req.query;
    
        if (!username) {
          return res.status(400).json({ message: "Parâmetro 'username' ausente." });
        }
    
        const user = await getUserProfile({ username });
    
        if (!user) {
          return res.status(404).json({ message: "Usuário não encontrado." });
        }
    
        const { password, ...data } = user._doc;
    
        res.status(200).json({
          userInfo: data,
          message: "Conta encontrada",
        });
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Erro no servidor.", error: err.message });
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








