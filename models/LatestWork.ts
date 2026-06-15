import mongoose, { Schema, Document, Model } from "mongoose";

export interface ILatestWork extends Document {
  title: string;
  slug: string;
  category: string;
  description: string;
  content: string;
  images: string[];
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const LatestWorkSchema = new Schema<ILatestWork>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    content: {
      type: String,
      required: true,
    },

    images: {
      type: [String],
      default: [],
    },

    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

const LatestWork: Model<ILatestWork> =
  mongoose.models.LatestWork ||
  mongoose.model<ILatestWork>("LatestWork", LatestWorkSchema);

export default LatestWork;
