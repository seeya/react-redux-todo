import { useState } from "react";
import { useTaskDispatch } from "../contexts/TasksContext";

export default function AddTask() {
  const [text, setText] = useState(null);

  const dispatch = useTaskDispatch();

  return (
    <>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() =>
          dispatch({
            type: "added",
            id: Date.now(),
            text,
          })
        }
      >
        Add Task
      </button>
    </>
  );
}
