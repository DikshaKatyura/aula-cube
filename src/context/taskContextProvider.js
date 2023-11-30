import { useState } from "react";
import task from "./task-context";

const TaskContextProvider = (props) => {
  const [tasks, setTask] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  const deleteTaskHandler = (id) => {
    const itemsAfterDeletion = tasks.filter((ele) => ele.id !== id);
    localStorage.setItem("tasks", JSON.stringify(itemsAfterDeletion));
    setTask(tasks.filter((ele) => ele.id !== id));
  };

  const addTaskHandler = (list) => {
    if(tasks.length === 0){
      localStorage.setItem("tasks", JSON.stringify([list]));
      setTask([list])
    }else{
      setTask([...tasks, list]);
    }
    // const updatedList = tasks;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const editTaskHandler = (list) => {
    const updatedList = tasks.map((ele) => {
      if (ele.id === list.id) {
        ele = { ...list };
      }
      return ele;
    });
    setTask(updatedList);
    localStorage.setItem("tasks", JSON.stringify(updatedList));
  };

  const taskCtx = {
    tasks: tasks,
    onDelete: deleteTaskHandler,
    onAdd: addTaskHandler,
    onEdit: editTaskHandler,
  };

  return <task.Provider value={taskCtx}>{props.children}</task.Provider>;
};

export default TaskContextProvider;
