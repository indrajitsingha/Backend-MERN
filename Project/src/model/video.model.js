import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new mongoose.Schema({
    videofile: {
        typeof: String,
        required: true,
    },
    thumbnail: {
        typeof: String,
        required: true,
    },
    title: {
        typeof: String,
        required: true,
    },
    description: {
        typeof: String,
        required: true,
    },
    dutration: {
        typeof: Number,
        required: true,
    },

    views: {
        typeof: Number,
        default: 0
    },
    views: {
        typeof: Number,
        default: 0
    },
    isPublished: {
        typeof: Boolean,
        default: true
    },
    owner: {
        typeof: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },

}, { timestamps: true })
videoSchema.plugin(mongooseAggregatePaginate)

export const video = mongoose.model("video", videoSchema)