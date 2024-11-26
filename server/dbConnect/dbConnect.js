import mongoose from "mongoose";

// BT3qo4T5e0jK0CyU
export const dbConnect = ()=>{
    try {
        mongoose.connect(process.env.DB_URL)
        console.log("database has connected");
    } catch (error) {
        console.log(error);

    }
};