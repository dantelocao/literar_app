import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";

export const  updateUser = async (userId, updateData) =>{
    if (updateData.password) {
        try {
            updateData.password = await bcrypt.hashSync(updateData.password, 10);
        } catch (err) {
            throw err
        }
    }
    try {
        const user = await userModel.findByIdAndUpdate(userId,{
            $set: updateData,
        }, 
        {
            new: true,
        }
    );
    return user;
        
    } catch (err) {
        throw err;
    }
};

export const deleteUser = async (userId) =>{
    try {
        await userModel.findByIdAndDelete(userId);
    } catch (err) {
        throw err;
    }
};

export const getUser = async (userId) =>{
    try {
        const user = await userModel.findById(userId);
        return user;
        
    } catch (err) {
        throw err;
    }
};


export const getUserProfile = async (querry) =>{
    try {
        const user = await userModel.findOne({username: querry.username});
        return user;
        
    } catch (err) {
        throw err;
    }
};



export const followUser = async (userData, updateData) =>{
    if (userData.userId === updateData.id) {
        throw new Error(" you cannot follow your self");
    } else {
        try {
            const user = await userModel.findById(userData.userId);
            const currentUser = await userModel.findById(updateData.id);
            if (!user.followings.includes(updateData.id)) {
                await currentUser.updateOne( { $push: { followers: userData.userId} });
                await user.updateOne( { $push: { followings: updateData.id} });
                return { user, currentUser };
            } else {
                throw new Error("you have already followed this user");
            }
        } catch (error) {
            throw error        
        } 
    }
};

export const unfollowUser = async (userData, updateData) => {
    if (userData.userId === updateData.id) {
        throw new Error("You cannot unfollow yourself");
    } else {
        try {
            const user = await userModel.findById(userData.userId); // Quem está dando unfollow
            const currentUser = await userModel.findById(updateData.id); // Quem será "unfollowed"

            // Verificar se o usuário já está seguindo a pessoa que deseja dar unfollow
            if (user.followings.includes(updateData.id)) {
                await currentUser.updateOne({ $pull: { followers: userData.userId } });
                await user.updateOne({ $pull: { followings: updateData.id } });
                return { user, currentUser };
            } else {
                throw new Error("You don't follow this user");
            }
        } catch (error) {
            throw error;
        }
    }
};