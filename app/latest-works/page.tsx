import Link from "next/link";
import Image from "next/image";
import { getLatestWorks } from "@/lib/getLatestWorks";

export default async function LatestWorksPage() {
    const works = await getLatestWorks();

    return (
        <main className="max-w-7xl mx-auto px-6 py-16 text-black ">
            <h1 className="mb-10 text-5xl font-light">
                Latest Works
            </h1>

            <div className="grid gap-8 md:grid-cols-3">
                {works.map((work) => (
                    <Link
                        key={work.id}
                        href={`/latest-works/${work.id}`}
                        className="group"
                    >
                        <div className="relative h-64 w-full overflow-hidden rounded-lg">
                            <Image
                                src={
                                    work.images?.[0] ||
                                    "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1200"
                                }
                                alt={work.title}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>

                        <p className="mt-4 text-sm text-gray-500">
                            {work.category}
                        </p>

                        <h2 className="mt-2 text-2xl font-semibold">
                            {work.title}
                        </h2>

                        <p className="mt-3 text-gray-600">
                            {work.description}
                        </p>
                    </Link>
                ))}
            </div>
        </main>
    );
}