import { connectDB } from "@/lib/mongodb";
import LatestWork from "@/models/LatestWork";
import { Types } from "mongoose";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Work = {
    _id: string;
    title: string;
    category: string;
    description?: string;
    content: string;
    images: string[];
    createdAt?: Date;
};

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    await connectDB();

    const { id } = await params;

    if (!Types.ObjectId.isValid(id)) {
        notFound();
    }

    const workDoc = await LatestWork.findById(id).lean();

    if (!workDoc) {
        notFound();
    }

    const work: Work = {
        _id: workDoc._id.toString(),
        title: workDoc.title,
        category: workDoc.category,
        description: workDoc.description,
        content: workDoc.content,
        images: workDoc.images || [],
        createdAt: workDoc.createdAt,
    };

    const moreStoriesRaw = await LatestWork.find({
        _id: { $ne: id },
    })
        .sort({ createdAt: -1 })
        .limit(3)
        .lean();

    const moreStories: Work[] = moreStoriesRaw.map((story) => ({
        _id: story._id.toString(),
        title: story.title,
        category: story.category,
        description: story.description,
        content: story.content,
        images: story.images || [],
        createdAt: story.createdAt,
    }));

    const paragraphs = work.content
        .split("\n")
        .filter((p) => p.trim() !== "");

    return (
        <main className="bg-white min-h-screen text-black">
            {/* HERO */}
            {work.images?.[0] && (
                <section className="relative h-[85vh] w-full">
                    <Image
                        src={work.images[0]}
                        alt={work.title}
                        fill
                        priority
                        className="object-cover"
                    />

                    <div className="absolute inset-0 bg-black/50" />

                    <div className="absolute inset-0 flex items-end">
                        <div className="max-w-6xl mx-auto w-full px-6 pb-20 text-white">
                            <span className="inline-block rounded-full bg-red-600 px-4 py-2 text-sm font-medium">
                                {work.category}
                            </span>

                            <h1 className="mt-6 max-w-4xl text-5xl md:text-7xl font-bold leading-tight">
                                {work.title}
                            </h1>

                            {work.description && (
                                <p className="mt-6 max-w-3xl text-lg md:text-xl text-white/90">
                                    {work.description}
                                </p>
                            )}
                        </div>
                    </div>
                </section>
            )}

            {/* STORY CONTENT WITH IMAGES */}
            <section className="max-w-7xl mx-auto px-6 py-24">
                {paragraphs.map((paragraph, index) => {
                    const image =
                        work.images[index + 1] ||
                        work.images[work.images.length - 1];

                    return (
                        <div
                            key={index}
                            className={`grid md:grid-cols-2 gap-16 items-center mb-24 ${index % 2 !== 0
                                    ? "md:[&>*:first-child]:order-2"
                                    : ""
                                }`}
                        >
                            {/* IMAGE */}
                            <div className="relative h-[500px] overflow-hidden rounded-3xl shadow-xl">
                                <Image
                                    src={image}
                                    alt={`${work.title} ${index + 1}`}
                                    fill
                                    className="object-cover transition duration-700 hover:scale-105"
                                />
                            </div>

                            {/* PARAGRAPH */}
                            <div>
                                <div className="mb-8 h-1 w-20 rounded-full bg-red-600" />

                                <p className="text-lg leading-9 text-gray-700">
                                    {paragraph}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </section>

            {/* MORE STORIES */}
            {moreStories.length > 0 && (
                <section className="bg-gray-50 py-24">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="mb-12 flex items-center justify-between">
                            <h2 className="text-4xl font-bold">
                                View More Stories
                            </h2>

                            <Link
                                href="/latest-works"
                                className="font-medium text-red-600 hover:underline"
                            >
                                View All →
                            </Link>
                        </div>

                        <div className="grid gap-8 md:grid-cols-3">
                            {moreStories.map((story) => (
                                <Link
                                    key={story._id}
                                    href={`/latest-works/${story._id}`}
                                    className="group"
                                >
                                    <div className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-lg">
                                        <div className="relative h-64">
                                            <Image
                                                src={
                                                    story.images?.[0] ||
                                                    "/placeholder.jpg"
                                                }
                                                alt={story.title}
                                                fill
                                                className="object-cover transition duration-500 group-hover:scale-105"
                                            />
                                        </div>

                                        <div className="p-6">
                                            <p className="text-sm text-red-600">
                                                {story.category}
                                            </p>

                                            <h3 className="mt-3 text-2xl font-semibold">
                                                {story.title}
                                            </h3>

                                            {story.description && (
                                                <p className="mt-3 line-clamp-3 text-gray-600">
                                                    {story.description}
                                                </p>
                                            )}

                                            <span className="mt-5 inline-block font-medium text-red-600">
                                                Read Story →
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </main>
    );
}