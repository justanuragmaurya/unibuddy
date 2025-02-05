import prisma from "@/lib/db/prisma";
import Link from "next/link";

export default async function CoursePage({
  params,
}: {
  params: Promise<{ sem: string }>;
}) {
  const sem = (await params).sem;
  const courses = await prisma.courses.findMany({
    where: {
      semester: Number(sem),
    },
  });
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mt-10">
          {courses.map((course) => {
            return (
            <Link href={`/resources/${sem}/${course.courseCode}`} key={course.id}>
              <div
                key={course.id}
                className="border p-10 hover:border-orange-500 hover:border-dashed rounded-md hover:scale-105"
              >
                <h1 className="font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent transition">{course.courseCode}</h1>
                <h2>{course.courseName}</h2>
              </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
