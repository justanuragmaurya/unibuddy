import prisma from "@/lib/db/prisma";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function AdminPage() {
  const session = await getServerSession();

  if (!session) {
    return <div>User not looged</div>;
  }
  const user = await prisma.user.findUnique({
    where: {
      email: session?.user.email!,
    },
  });

  if (!user?.isAdmin) {
    return <div>Not a admin </div>;
  }
  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h1 className="text-3xl">
        Welcome back,{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent font-bold">
          {session.user.name}
        </span>
      </h1>
      <div className="md:m-auto md:mt-5 mt-5 mx-5 grid grid-cols-3 gap-5 w-full">
        <Link href="/add-courses/">
          <div className="border p-10 rounded-md flex flex-col items-center hover:border-dashed hover:border-orange-500 hover:shadow-sm hover:font-semibold">
            Add Course
          </div>
        </Link>
        <div className="border p-10 rounded-md flex flex-col items-center hover:border-dashed hover:border-orange-500 hover:shadow-sm hover:font-semibold">
          Manage Users
        </div>
        <div className="border p-10 rounded-md flex flex-col items-center hover:border-dashed hover:border-orange-500 hover:shadow-sm hover:font-semibold">
          Add Content
        </div>
        <div className="border p-10 rounded-md flex flex-col items-center hover:border-dashed hover:border-orange-500 hover:shadow-sm hover:font-semibold">
          Add Subject
        </div>
        <div className="border p-10 rounded-md flex flex-col items-center hover:border-dashed hover:border-orange-500 hover:shadow-sm hover:font-semibold">
          Manage Users
        </div>
        <div className="border p-10 rounded-md flex flex-col items-center hover:border-dashed hover:border-orange-500 hover:shadow-sm hover:font-semibold">
          Add Content
        </div>
      </div>
    </div>
  );
}
