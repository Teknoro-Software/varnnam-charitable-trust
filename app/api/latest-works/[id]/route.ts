import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import LatestWork from "@/models/LatestWork";
import mongoose from "mongoose";

// GET a single work
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await connectDB();

    const { id } = await params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ message: "Invalid ID" }, { status: 400 });
    }

    const work = await LatestWork.findById(id);

    if (!work) {
      return NextResponse.json({ message: "Work not found" }, { status: 404 });
    }

    return NextResponse.json(work);
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching work", error },
      { status: 500 },
    );
  }
}

// UPDATE a work
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await connectDB();

    const { id } = await params;
    const body = await req.json();

    const updated = await LatestWork.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      return NextResponse.json({ message: "Work not found" }, { status: 404 });
    }

    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json(
      { message: "Error updating work", error },
      { status: 500 },
    );
  }
}

// DELETE a work
export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await connectDB();

    const { id } = await params;

    const deleted = await LatestWork.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json({ message: "Work not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "Deleted successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Error deleting work", error },
      { status: 500 },
    );
  }
}
