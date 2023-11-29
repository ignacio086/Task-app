import { NextResponse } from "next/server"
import { connectDB } from "@/utils/moongose-cn";
import Task from "@/models/Task";


export async function GET(){
    connectDB()
    const tasks = await Task.find()
    return NextResponse.json(
        tasks
    );
};

export async function POST(request){

    try {
        const data = await request.json()
        const newTask = new Task(data)
        console.log(newTask)
        const savedTask = await newTask.save()
        console.log(savedTask)

        return NextResponse.json(
            {
                message:'creando tarea',
            }
        );
    } catch (error) {
        return NextResponse.json(error.message, {
            status:400
        })
    }
}