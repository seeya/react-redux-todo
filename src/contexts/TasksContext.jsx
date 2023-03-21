import { useContext, useReducer } from "react";
import { createContext } from "react";

const TaskContext = createContext(null);
const TaskDispatchContext = createContext(null);

export function TaskProvider({ children }) {
  // Allow us to access the data from our single source of truth
  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <TaskContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={dispatch}>{children}</TaskDispatchContext.Provider>
    </TaskContext.Provider>
  );
}

export function useTask() {
  return useContext(TaskContext);
}

export function useTaskDispatch() {
  return useContext(TaskDispatchContext);
}

function taskReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
        },
      ];
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.id);
    }

    default: {
      throw Error("The action type is invalid " + action.type);
    }
  }
}
