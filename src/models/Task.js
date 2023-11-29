import { Schema , model , models} from 'mongoose' ;

const taskSchema = new Schema({
    title: {
        type: String,
        required:[true, 'titulo requerido'],
        unique: true,
        trim: true,
    },
    description:{
        type: String,
        required:[true, 'titulo requerido'],
        trim: true,
    }
},{
    timestamps:true,
})

export default models.Task || model ('Task', taskSchema)