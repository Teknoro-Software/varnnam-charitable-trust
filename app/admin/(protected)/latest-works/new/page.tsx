import WorkForm from "@/components/admin/WorkForm";

export default function NewLatestWorkPage() {
    return (
        <div className="max-w-5xl mx-auto py-10 text-black">
            <h1 className="text-3xl font-bold mb-8">
                Create Latest Work
            </h1>

            <WorkForm mode="create" />
        </div>
    );
}