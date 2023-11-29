import { useParams } from "react-router-dom";
import TaskForm from "../components/TaskForm";


const EditTask =() =>{
    const params = useParams();
    console.log(params.id);
    return(
        <>
        <h1>ddlfskjl</h1>
        <TaskForm/>
        </>
    )
}

export default EditTask;