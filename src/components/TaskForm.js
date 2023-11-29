import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";

const TaskForm =(prop) =>{
  const[name,setName] = useState('');
  const[description,setDescription] = useState('');
  const[priority,setPriority] = useState('low');
    const navigate = useNavigate();

const nameChangeHandler =(event)=>{
  setName(event.target.value);
}

const descriptionChangeHandler = (event) => {
  setDescription(event.target.value);
}

const priorityChangeHandler = (event) => {
  setPriority(event.target.value);
}
    const addNewTaskHandler =(event) =>{
        event.preventDefault();
      prop.onAddTask({id:Math.random(),name: name,description : description ,level : priority});
        console.log(name,description,priority);
        navigate('/');
    }
    return(
        <form onSubmit={addNewTaskHandler}>
        <div className="mb-3">
  <label htmlFor="taskname" className="form-label">Name</label>
  <input type="text" className="form-control" id="taskname" placeholder="Task Name" value={name} onChange={nameChangeHandler}/>
</div>
<div className="mb-3">
  <label htmlFor="taskdescription" className="form-label">Description</label>
  <textarea className="form-control" id="taskdescription" rows="3" value={description} onChange={descriptionChangeHandler}></textarea>
</div>
<div className="mb-3">
  <label htmlFor="taskpriority" className="form-label">Priority</label>
  <select className="form-control" name="priority" id="taskpriority" value={priority} onChange={priorityChangeHandler}>
    <option name="priority" value="low">Low</option>
    <option name="priority" value="medium">Medium</option>
    <option name="priority" value="high">High</option>
  </select>
</div>
<div className="d-flex justify-content-evenly">
<button type="submit" className="btn btn-primary">ADD</button>
<Link to={'/'}><button type="button" className="btn btn-danger">Cancel</button></Link>
</div>
        </form>
    )
}

export default TaskForm;