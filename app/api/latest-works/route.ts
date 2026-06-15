import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import LatestWork from "@/models/LatestWork";

export async function GET() {
  try {
    await connectDB();

    const works = await LatestWork.find().sort({ createdAt: -1 });

    return NextResponse.json(works);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch works",
      },
      {
        status: 500,
      },
    );
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const work = await LatestWork.create({
      title: body.title,
      slug: body.slug,
      category: body.category,
      description: body.description,
      content: body.content,
      images: body.images,
      featured: body.featured,
    });

    return NextResponse.json({
      success: true,
      work,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      {
        status: 500,
      },
    );
  }
}
