import { useTask, useTaskDispatch } from "../contexts/TasksContext";

export default function TaskList() {
  const tasks = useTask();
  const dispatch = useTaskDispatch();

  return (
    <ul>
      {tasks.map((t) => (
        <li key={t.id}>
          {t.text}

          <span
            onClick={() => {
              dispatch({
                type: "deleted",
                id: t.id,
              });
            }}
          >
            {" "}
            [Delete]
          </span>
        </li>
      ))}
    </ul>
  );
}
