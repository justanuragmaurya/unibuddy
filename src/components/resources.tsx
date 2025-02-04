import Link from "next/link"

export default async function Resources(){
    const semester:Semesters[] = [{name:"First Sem",value:1},{name:"Second Sem",value:2},{name:"Third Sem",value:3},{name:"Fourth Sem",value:4},{name:"Fifth Sem",value:5},{name:"Sixth Sem",value:6},{name:"Seventh Sem",value:7},{name:"Eighth Sem",value:8}]
    return(
        <div className="grid grid-cols-2 gap-5 w-full">
            {semester.map((sem)=>{
                return(
                    <Link href={`${"/resources/"+sem.value}`} key={sem.value}>
                    <div className="p-5 rounded-md border hover:scale-105 hover:border-orange-400 hover:border-dashed transition " key={sem.value}>
                        <h2 className="font-semibold">{sem.name}</h2>
                    </div>
                    </Link>
                )
            })}
        </div>
    )
}

interface Semesters{
    name:string,
    value:number
}