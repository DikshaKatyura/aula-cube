import { createContext } from "react";

export const task = createContext({
  tasks : [ ],
  onDelete : () => {},
  onAdd : () =>{}
});

export default task;
