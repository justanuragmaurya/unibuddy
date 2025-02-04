import prisma from "@/lib/db/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const session = await getServerSession();

  if (!session) {
    return NextResponse.json(
      {
        success: false,
        message: "Unauthorized user",
      },
      { status: 401 }
    );
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session?.user.email!,
    },
  });

  if(!user?.isAdmin){
    return NextResponse.json(
        {
          success: false,
          message: "Unauthorized access",
        },
        { status: 401 }
      );
  }

  const data = await req.json();

  if (!data.courseCode || !data.courseName || !data.semester) {
    return NextResponse.json(
      {
        success: false,
        message: "Missing required fields",
      },
      { status: 400 }
    );
  }

  try {
    const query = await prisma.courses.create({
      data: {
        courseCode: data.courseCode,
        courseName: data.courseName,
        semester: data.semester,
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong with saving the course to database.",
      },
      { status: 500 }
    );
  }
  return NextResponse.json({
    success: true,
    message: "Saved successfully to the database.",
  });
}
