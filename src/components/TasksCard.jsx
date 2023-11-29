import Link from "next/link"

function TaskCard({task}){
    return(
        <Link href={`/tasks/${task._id}`}>
            <div className=" bg-gray-200 text-black p-10 rounded-xl  hover:bg-gray-600 hover:cursor-pointer">
                <h1>{task.title}</h1>
                <p>{task.description}</p>
            </div>
        </Link>
    )
}

export default TaskCard