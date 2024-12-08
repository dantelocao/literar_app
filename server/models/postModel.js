import mongoose from "mongoose";
import { Schema } from "mongoose";

const postSchema = new Schema(
    {
    userId: {
        type: String,
        required: true,
    },

    userName: {
        type: String,
        required: true,
    },


    desc: {
        type: String,
        required: true,
    },

    likes: {
        type: Array,
        default: [],
    },

    books: {
        type: Array,
        default: [],
    },

    shareWith: {
        type: Array,
        default: [],
    },


    },
    {
        timestamps: true,
    }

 );

export default mongoose.model("Post", postSchema);