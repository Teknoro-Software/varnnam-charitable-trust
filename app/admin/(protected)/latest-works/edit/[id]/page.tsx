import WorkForm from "@/components/admin/WorkForm";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export default async function EditLatestWorkPage({
    params,
}: Props) {
    const { id } = await params;

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/latest-works/${id}`,
        {
            cache: "no-store",
        }
    );

    if (!res.ok) {
        return <div>Work not found.</div>;
    }

    const work = await res.json();

    return (
        <div className="mx-auto max-w-5xl py-10 text-black">
            <h1 className="mb-8 text-3xl font-bold">
                Edit Latest Work
            </h1>

            <WorkForm
                mode="edit"
                id={id}
                initialData={{
                    title: work.title,
                    slug: work.slug,
                    category: work.category,
                    description: work.description,
                    content: work.content,
                    images: work.images || [],
                    featured: work.featured,
                }}
            />
        </div>
    );
}