"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Pencil, Trash2, Plus } from "lucide-react";

type Work = {
    _id: string;
    title: string;
    slug: string;
    category: string;
    description: string;
    images: string[];
    featured: boolean;
};

export default function LatestWorksAdminPage() {
    const [works, setWorks] = useState<Work[]>([]);
    const [loading, setLoading] = useState(true);

    async function loadWorks() {
        try {
            const res = await fetch("/api/latest-works", {
                cache: "no-store",
            });

            const data: Work[] = await res.json();

            setWorks(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadWorks();
    }, []);

    async function deleteWork(id: string) {
        const confirmed = window.confirm(
            "Are you sure you want to delete this latest work?"
        );

        if (!confirmed) return;

        try {
            const res = await fetch(
                `/api/latest-works/${id}`,
                {
                    method: "DELETE",
                }
            );

            if (!res.ok) {
                throw new Error("Delete failed");
            }

            setWorks((prev) =>
                prev.filter((item) => item._id !== id)
            );
        } catch (error) {
            console.error(error);
            alert("Failed to delete.");
        }
    }

    return (
        <div className="mx-auto max-w-7xl py-10 text-black">
            {/* Header */}
            <div className="mb-8 flex items-center justify-between">
                <h1 className="text-3xl font-bold">
                    Latest Works
                </h1>

                <Link
                    href="/admin/latest-works/new"
                    className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                >
                    <Plus size={18} />
                    Create Work
                </Link>
            </div>

            {/* Table */}
            <div className="overflow-x-auto rounded-xl bg-white shadow">
                <table className="w-full">
                    <thead className="bg-gray-100">
                        <tr className="text-left">
                            <th className="p-4">Image</th>
                            <th className="p-4">Title</th>
                            <th className="p-4">Category</th>
                            <th className="p-4">Featured</th>
                            <th className="p-4">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {loading ? (
                            <tr>
                                <td
                                    colSpan={5}
                                    className="p-8 text-center"
                                >
                                    Loading...
                                </td>
                            </tr>
                        ) : works.length === 0 ? (
                            <tr>
                                <td
                                    colSpan={5}
                                    className="p-8 text-center"
                                >
                                    No latest works found.
                                </td>
                            </tr>
                        ) : (
                            works.map((work) => (
                                <tr
                                    key={work._id}
                                    className="border-t hover:bg-gray-50"
                                >
                                    <td className="p-4">
                                        <div className="relative h-16 w-24 overflow-hidden rounded-lg">
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

                                    <td className="p-4 font-medium">
                                        {work.title}
                                    </td>

                                    <td className="p-4">
                                        {work.category}
                                    </td>

                                    <td className="p-4">
                                        {work.featured ? (
                                            <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                                                Yes
                                            </span>
                                        ) : (
                                            <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
                                                No
                                            </span>
                                        )}
                                    </td>

                                    <td className="p-4">
                                        <div className="flex gap-3">
                                            <Link
                                                href={`/admin/latest-works/edit/${work._id}`}
                                                className="rounded-lg bg-blue-600 p-2 text-white hover:bg-blue-700"
                                            >
                                                <Pencil size={16} />
                                            </Link>

                                            <button
                                                onClick={() =>
                                                    deleteWork(work._id)
                                                }
                                                className="rounded-lg bg-red-600 p-2 text-white hover:bg-red-700"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}