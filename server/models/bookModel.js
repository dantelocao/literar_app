import mongoose from "mongoose";
import { Schema } from "mongoose";

const bookSchema = new Schema({
    bookName: {
        type: String,
        required: true,
        unique: true,
        min: 2,
    },

    type: {
        type: String,
        required: true,
    },

    pages:{
        type: String,
        required: true,
    },

    picture:{
        type: String,
        default: "", 
    },

    desc:{
        type: String,
    },
});
export default mongoose.model("Book", bookSchema);