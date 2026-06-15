import { connectDB } from "@/lib/mongodb";
import LatestWork from "@/models/LatestWork";

interface LatestWorkItem {
  _id: {
    toString(): string;
  };
  title: string;
  slug: string;
  category: string;
  description: string;
  content: string;
  images: string[];
  featured: boolean;
}

export async function getLatestWorks() {
  await connectDB();

  const works = (await LatestWork.find({})
    .sort({ createdAt: -1 })
    .lean()) as LatestWorkItem[];

  return works.map((work) => ({
    id: work._id.toString(),
    title: work.title,
    slug: work.slug,
    category: work.category,
    description: work.description,
    content: work.content,
    images: work.images,
    featured: work.featured,
  }));
}
