import { useContext } from "react";
import Modal from "../UI/Modal";
import TaskForm from "../components/TaskForm"
import task from "../context/task-context";

const NewTask =() =>{
    const ctx = useContext(task);
    const addTask = (list) => {
        ctx.onAdd(list);
    }
    return(
        <Modal>
            <TaskForm onAddTask = {addTask}/>
        </Modal>

    )
}

export default NewTask;