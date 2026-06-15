"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type WorkFormProps = {
    initialData?: {
        title: string;
        slug: string;
        category: string;
        description: string;
        content: string;
        images: string[];
        featured: boolean;
    };
    mode: "create" | "edit";
    id?: string;
};

const categories = [
    "Healthcare",
    "Nutrition",
    "Education",
    "WaSH",
    "Livelihood",
    "Digital Transformation",
    "Migration and Urban Habitat",
    "Social Justice and Inclusion",
    "Environment and Energy",
    "Skill Development",
    "Arts and Culture",
    "Sports",
    "Disaster Relief and Rehabilitation",
    "Institutions",
    "Individual Grants Programme",
];

export default function WorkForm({
    initialData,
    mode,
    id,
}: WorkFormProps) {
    const router = useRouter();

    const [loading, setLoading] = useState(false);
    const [uploading, setUploading] = useState(false);

    const [form, setForm] = useState({
        title: initialData?.title ?? "",
        slug: initialData?.slug ?? "",
        category: initialData?.category ?? "",
        description: initialData?.description ?? "",
        content: initialData?.content ?? "",
        images: initialData?.images ?? [],
        featured: initialData?.featured ?? false,
    });

    function createSlug(value: string) {
        return value
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9\s-]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-");
    }

    async function handleImageUpload(
        e: React.ChangeEvent<HTMLInputElement>
    ) {
        const files = e.target.files;

        if (!files) return;

        setUploading(true);

        try {
            const uploadedUrls: string[] = [];

            console.log(
                "Cloud Name:",
                process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
            );

            console.log(
                "Upload Preset:",
                process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
            );

            for (const file of Array.from(files)) {
                const formData = new FormData();

                formData.append("file", file);

                formData.append(
                    "upload_preset",
                    process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!
                );

                const res = await fetch(
                    `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
                    {
                        method: "POST",
                        body: formData,
                    }
                );

                const data = await res.json();

                console.log("Cloudinary Response:", data);

                if (!res.ok) {
                    throw new Error(
                        data.error?.message || "Image upload failed"
                    );
                }

                uploadedUrls.push(data.secure_url);
            }

            setForm((prev) => ({
                ...prev,
                images: [...prev.images, ...uploadedUrls],
            }));

            console.log("Uploaded URLs:", uploadedUrls);
        } catch (error) {
            console.error(error);

            alert(
                error instanceof Error
                    ? error.message
                    : "Image upload failed"
            );
        } finally {
            setUploading(false);
        }
    }

    function removeImage(index: number) {
        setForm((prev) => ({
            ...prev,
            images: prev.images.filter((_, i) => i !== index),
        }));
    }

    async function handleSubmit(
        e: React.FormEvent<HTMLFormElement>
    ) {
        e.preventDefault();

        if (form.images.length === 0) {
            alert("Please upload at least one image");
            return;
        }

        setLoading(true);

        try {
            console.log("FORM:", form);

            const endpoint =
                mode === "create"
                    ? "/api/latest-works"
                    : `/api/latest-works/${id}`;

            const method =
                mode === "create"
                    ? "POST"
                    : "PUT";

            const res = await fetch(endpoint, {
                method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            console.log(data);

            if (!res.ok) {
                throw new Error(
                    data.error || "Failed to save work"
                );
            }

            router.push("/admin/latest-works");
            router.refresh();
        } catch (error) {
            console.error(error);

            alert(
                error instanceof Error
                    ? error.message
                    : "Something went wrong"
            );
        } finally {
            setLoading(false);
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-xl bg-white p-8 shadow"
        >
            <div>
                <label className="mb-2 block font-medium">
                    Title
                </label>

                <input
                    className="w-full rounded-lg border p-3"
                    value={form.title}
                    onChange={(e) =>
                        setForm((prev) => ({
                            ...prev,
                            title: e.target.value,
                            slug: createSlug(e.target.value),
                        }))
                    }
                    required
                />
            </div>

            <div>
                <label className="mb-2 block font-medium">
                    Slug
                </label>

                <input
                    className="w-full rounded-lg border bg-gray-50 p-3"
                    value={form.slug}
                    onChange={(e) =>
                        setForm((prev) => ({
                            ...prev,
                            slug: createSlug(e.target.value),
                        }))
                    }
                    required
                />
            </div>

            <div>
                <label className="mb-2 block font-medium">
                    Category
                </label>

                <select
                    className="w-full rounded-lg border p-3"
                    value={form.category}
                    onChange={(e) =>
                        setForm((prev) => ({
                            ...prev,
                            category: e.target.value,
                        }))
                    }
                    required
                >
                    <option value="">
                        Select Category
                    </option>

                    {categories.map((category) => (
                        <option
                            key={category}
                            value={category}
                        >
                            {category}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label className="mb-2 block font-medium">
                    Description
                </label>

                <textarea
                    rows={3}
                    className="w-full rounded-lg border p-3"
                    value={form.description}
                    onChange={(e) =>
                        setForm((prev) => ({
                            ...prev,
                            description: e.target.value,
                        }))
                    }
                    required
                />
            </div>

            <div>
                <label className="mb-2 block font-medium">
                    Content
                </label>

                <textarea
                    rows={8}
                    className="w-full rounded-lg border p-3"
                    value={form.content}
                    onChange={(e) =>
                        setForm((prev) => ({
                            ...prev,
                            content: e.target.value,
                        }))
                    }
                    required
                />
            </div>

            <div>
                <label className="mb-2 block font-medium">
                    Upload Images
                </label>

                <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="w-full rounded-lg border p-3"
                />

                {uploading && (
                    <p className="mt-3 text-sm text-blue-600">
                        Uploading images...
                    </p>
                )}

                {form.images.length > 0 && (
                    <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
                        {form.images.map(
                            (image, index) => (
                                <div
                                    key={index}
                                    className="relative"
                                >
                                    <img
                                        src={image}
                                        alt={`Preview ${index + 1}`}
                                        className="h-32 w-full rounded-lg object-cover"
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            removeImage(index)
                                        }
                                        className="absolute right-2 top-2 rounded-full bg-red-600 px-2 py-1 text-xs text-white"
                                    >
                                        ✕
                                    </button>
                                </div>
                            )
                        )}
                    </div>
                )}
            </div>

            <label className="flex items-center gap-3">
                <input
                    type="checkbox"
                    checked={form.featured}
                    onChange={(e) =>
                        setForm((prev) => ({
                            ...prev,
                            featured: e.target.checked,
                        }))
                    }
                />

                Featured
            </label>

            <button
                type="submit"
                disabled={loading || uploading}
                className="rounded-lg bg-red-600 px-6 py-3 text-white hover:bg-red-700 disabled:opacity-50"
            >
                {loading
                    ? "Saving..."
                    : mode === "create"
                        ? "Create Work"
                        : "Update Work"}
            </button>
        </form>
    );
}