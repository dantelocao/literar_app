import userModel  from "../models/userModel.js";
import bcrypt from "bcrypt"

// register
export const registerUser = async (body) => {
    const hashedPassword = bcrypt.hashSync(body.password, 10);
    const newUser = new userModel({
        username: body.username,
        email: body.email,
        password: hashedPassword,
    })
    await newUser.save();
    return newUser;
};

export const loginUser = async (body) => {
    const user = await userModel.findOne({email: body.email});
    !user && res.status(404).json("User not found");

    const passwordCheck = await bcrypt.compare(body.password, user.password);
    !passwordCheck && res.status(400).json("Wrong Password!");

    return user;
};