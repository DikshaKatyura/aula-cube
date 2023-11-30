import { createContext } from "react";

export const task = createContext({
  tasks: [],
  onDelete: () => {},
  onAdd: () => {},
  onEdit: () => {},
});

export default task;
