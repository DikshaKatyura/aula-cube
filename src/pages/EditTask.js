import { useParams } from "react-router-dom";
import TaskForm from "../components/TaskForm";
import { useContext } from "react";
import task from "../context/task-context";

const EditTask = () => {
  const params = useParams();
  const ctx = useContext(task);
  const tasks = ctx.tasks.filter((ele) => ele.id === +params.id);
  const editTask = (list) => {
    ctx.onEdit(list);
  };
  return (
    <div className="card w-50 m-auto p-4">
      <TaskForm taskList={tasks[0]} onEditTask={editTask} />
    </div>
  );
};

export default EditTask;
