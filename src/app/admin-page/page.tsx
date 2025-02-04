import prisma from "@/lib/db/prisma";
import { getServerSession } from "next-auth";

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
  return <div>
    Admin Page Here
  </div>
}
