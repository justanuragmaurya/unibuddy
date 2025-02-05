import Link from "next/link";
export default async function ({
  params,
}: {
  params: Promise<{ course: string ,sem:string}>;
}) {
  const courseCode = (await params).course.toLowerCase();
  const items = [
    {
      name: "PYQs",
      slug: "pyqs",
      description: "Previous Year Question Papers to help you prepare effectively by understanding the exam pattern and important topics."
    },
    {
      name: "Notes",
      slug: "notes",
      description: "Well-structured and concise notes covering key concepts to assist in quick revision and better understanding."
    },
    {
      name: "Online Lectures",
      slug: "online-lectures",
      description: "Recorded and live video lectures from professors and experts to enhance learning anytime, anywhere."
    },
    {
      name: "College's PPT",
      slug: "colleges-ppt",
      description: "Presentation slides used by professors in classrooms to aid in studying and understanding complex topics."
    },
    {
      name: "Solutions",
      slug: "solutions",
      description: "Step-by-step solutions to assignments, previous year questions, and exercises to help with problem-solving skills."
    }
  ];

  const param = await params
  return (
    <div className="flex flex-col justify-center items-center p-5">
      <h1 className="text-3xl font-bold">{courseCode.toUpperCase()}</h1>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-5 grid md:grid-cols-3 grid-cols-1 gap-5">
      {items.map((item) => {
            return (
                <Link href={`/resources/${param.sem}/${param.course}/${item.slug}`}>
                <div className="border p-10 hover:border-orange-500 hover:border-dashed rounded-md hover:scale-105 gap-5" key={Math.random()}>
                    <h1 className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent font-bold">{item.name}</h1>
                    <h2 className="text-primary text-sm">{item.description}</h2>
                </div>
                </Link>
            )
        })}
  </div>
  </div>
)}
