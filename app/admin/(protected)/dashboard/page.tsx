import Link from "next/link";
import Image from "next/image";
import { Types } from "mongoose";
import {
    Plus,
    Newspaper,
    Star,
    FolderOpen,
} from "lucide-react";

import { connectDB } from "@/lib/mongodb";
import LatestWork from "@/models/LatestWork";

type RecentWork = {
    _id: Types.ObjectId;
    title: string;
    slug: string;
    category: string;
    description: string;
    content: string;
    images: string[];
    featured: boolean;
    createdAt: Date;
    updatedAt: Date;
};

export default async function DashboardPage() {
    await connectDB();

    const totalWorks =
        await LatestWork.countDocuments();

    const featuredWorks =
        await LatestWork.countDocuments({
            featured: true,
        });

    const categories =
        await LatestWork.distinct("category");

    const recentWorks = await LatestWork.find({})
        .sort({ createdAt: -1 })
        .limit(5)
        .lean<RecentWork[]>();

    return (
        <div className="space-y-8 text-black">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-4xl font-bold text-slate-900">
                        Dashboard
                    </h1>

                    <p className="mt-2 text-slate-500">
                        Welcome to the Varnam Charitable Trust
                        admin panel.
                    </p>
                </div>

                <Link
                    href="/admin/latest-works/new"
                    className="flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-white transition hover:bg-red-700"
                >
                    <Plus size={18} />
                    Create Work
                </Link>
            </div>

            {/* Stats */}
            <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-2xl border bg-white p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-slate-500">
                                Total Works
                            </p>

                            <h2 className="mt-2 text-4xl font-bold">
                                {totalWorks}
                            </h2>
                        </div>

                        <Newspaper
                            className="text-red-600"
                            size={36}
                        />
                    </div>
                </div>

                <div className="rounded-2xl border bg-white p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-slate-500">
                                Featured
                            </p>

                            <h2 className="mt-2 text-4xl font-bold">
                                {featuredWorks}
                            </h2>
                        </div>

                        <Star
                            className="text-yellow-500"
                            size={36}
                        />
                    </div>
                </div>

                <div className="rounded-2xl border bg-white p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-slate-500">
                                Categories
                            </p>

                            <h2 className="mt-2 text-4xl font-bold">
                                {categories.length}
                            </h2>
                        </div>

                        <FolderOpen
                            className="text-blue-600"
                            size={36}
                        />
                    </div>
                </div>
            </div>

            {/* Recent Works */}
            <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
                <div className="border-b px-6 py-4">
                    <h2 className="text-xl font-semibold">
                        Recent Latest Works
                    </h2>
                </div>

                {recentWorks.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-slate-50">
                                <tr>
                                    <th className="px-6 py-3 text-left">
                                        Image
                                    </th>

                                    <th className="px-6 py-3 text-left">
                                        Title
                                    </th>

                                    <th className="px-6 py-3 text-left">
                                        Category
                                    </th>

                                    <th className="px-6 py-3 text-left">
                                        Featured
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {recentWorks.map((work) => (
                                    <tr
                                        key={work._id.toString()}
                                        className="border-t hover:bg-slate-50"
                                    >
                                        <td className="px-6 py-4">
                                            <div className="relative h-14 w-20 overflow-hidden rounded-lg">
                                                <Image
                                                    src={
                                                        work.images?.[0] ||
                                                        "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1200"
                                                    }
                                                    alt={work.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        </td>

                                        <td className="px-6 py-4 font-medium">
                                            {work.title}
                                        </td>

                                        <td className="px-6 py-4">
                                            {work.category}
                                        </td>

                                        <td className="px-6 py-4">
                                            {work.featured ? (
                                                <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                                                    Yes
                                                </span>
                                            ) : (
                                                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm">
                                                    No
                                                </span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p className="p-6 text-center text-slate-500">
                        No latest works found.
                    </p>
                )}
            </div>
        </div>
    );
}