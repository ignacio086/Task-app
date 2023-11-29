import { connectDB } from "@/utils/moongose-cn"
import Task from "@/models/Task"
import TaskCard from "@/components/TasksCard"
import Link from "next/link"

async function loadTasks(){
  connectDB()
  const tasks = await Task.find()
  return tasks
}


export default async function Home() {
  const tasks = await loadTasks()
  return (
    <div className="grid grid-cols-3 gap-2">
      <Link href={'./tasks/new'}>
            <div className=" bg-gray-200 text-black p-10 rounded-xl  hover:bg-gray-600 hover:cursor-pointer">
                <h1>CREAR NUEVA TAREA</h1>
                <p>Haz click aqui</p>
            </div>
        </Link>
      {tasks.map((task)=>{
        return(
          <TaskCard task={task} key={task.title}/>
        )
      })}
    </div>
  )
}
