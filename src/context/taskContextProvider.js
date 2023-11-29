import { useState } from "react";
import task from "./task-context";

const taskItems = [
    {
        id:Math.random(),
        name : 'task one',
        description : 'asdfghjkl ertyuio sdfghnm xcvbnm, rtyuikl.',
        level : 'high'
    },
    {
        id:Math.random(),
        name : 'task two',
        description : 'asdfghjkl ertyuio sdfghnm xcvbnm, rtyuikl.',
        level : 'low'
    },
    {
        id:Math.random(),
        name : 'task three',
        description : 'asdfghjkl ertyuio sdfghnm xcvbnm, rtyuikl.',
        level : 'medium'
    },
    {
        id:Math.random(),
        name : 'task four',
        description : 'asdfghjkl ertyuio sdfghnm xcvbnm, rtyuikl.',
        level : 'low'
    }
]
const TaskContextProvider = (props) =>{

const [tasks,setTask] = useState(taskItems);

const deleteTaskHandler = (id) =>{
    console.log(id);
    setTask(tasks.filter(ele => ele.id !== id))
}

const addTaskHandler = (list) =>{
    tasks.unshift(list);
}
    const taskCtx = {
tasks : tasks,
onDelete : deleteTaskHandler,
onAdd : addTaskHandler
    }

    return <task.Provider value={taskCtx}>{props.children}</task.Provider>
}

export default TaskContextProvider;