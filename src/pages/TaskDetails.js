import { useParams } from "react-router-dom";
import Details from "../components/Details";
import { useContext } from "react";
import task from "../context/task-context";

const TaskDetails = () => {
  const param = useParams();
  const ctx = useContext(task);
  const taskItem = ctx.tasks.filter((ele) => {
    return ele.id === +param.id;
  });

  const onRemoveTask = (id) => {
    ctx.onDelete(id);
  };
  return <Details item={taskItem[0]} removeTask={onRemoveTask} />;
};

export default TaskDetails;
