import mongoose, { Schema } from 'mongoose';
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2';


const videoSchema = new Schema(
  {
    videoFile: {
      type: String, // Cloudinary URL
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Number, // in seconds or minutes
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt
  }
);

videoSchema.plugin(mongooseAggregatePaginate); // Add pagination plugin

export const Video = mongoose.model('Video', videoSchema);
