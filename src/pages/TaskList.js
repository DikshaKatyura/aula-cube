import { useContext } from "react";
import TaskItem from "../components/TaskItem"
import task from "../context/task-context";

const TaskList = () =>{
    const ctx = useContext(task);
    return(
        <TaskItem tasks={ctx.tasks}/>
    )
}

export default TaskList;