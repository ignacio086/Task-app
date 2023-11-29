'use client'
import { useState , useEffect } from "react"
import { useRouter , useParams } from "next/navigation"

export default function FormPage(){
    const [newTask, setnewTask] = useState({
        title:"",
        description:"",
    })

    const router = useRouter()
    const params = useParams()
    const createTask = async ()=>{
        const res= await fetch('/api/tasks',{
            method:"POST",
            body: JSON.stringify(newTask),
            headers:{
                "Content-Type": "application/json"
            }
        })
        console.log(res)
        router.push('/')
        router.refresh()
    }
    const getTask = async ()=>{
        const res = await fetch(`/api/tasks/${params.id}`)
        const data=  await res.json()
        setnewTask({
            title: data.title,
            description: data.description,
        })
    }
    const updateTask = ()=>{

    }
    const handleSubmit =  async (e)=>{
        e.preventDefault()
        if(!params.id){
            await createTask()
        }else{

        }
    }
    const handleChange = (e)=>{
        setnewTask({ ... newTask, [e.target.name]: e.target.value})
    }
    const handleDelete = async ()=>{
        if(window.confirm('desea eliminar esta tarea?')){
            const res= fetch(`/api/tasks/${params.id}`,{
                method:"DELETE"
            })
            router.push('/')
            router.refresh()
        }
    }
    useEffect(()=>{
        if(params.id){
            getTask()
        }
    },[])
    return(
        <div className="flex justify-center items-center">
            <form onSubmit={handleSubmit}>
                <h1>
                {
                    !params.id ? "Crear Tarea" : "Editar Tarea"
                }
                </h1>
                <input 
                className="bg-gray-800 border-2 w-full p-4 rounded my-4" 
                type="text" 
                name="title" 
                value={newTask.title}
                placeholder="escribe un titulo"
                onChange={handleChange}></input>
                <textarea 
                className="bg-gray-800 border-2 w-full p-4 rounded my-4" 
                name="description" 
                rows={3}
                value={newTask.description}
                onChange={handleChange}
                placeholder="escribe una descripcion"></textarea>
                <button type='submit' className="bg-green-600 rounded hover:bg-green-700 text-white px-2 m-2">Guardar</button>
                <button type='submit' className="bg-green-600 rounded hover:bg-green-700 text-white px-2 m-2">Editar</button>
                <button type='button'className="bg-red-600 hover:bg-red-700 text-white px-2 m-2 rounded" onClick={handleDelete}>Borrar</button>
            </form>
        </div>
    )
}

