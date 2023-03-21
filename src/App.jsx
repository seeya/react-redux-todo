import { useState } from "react";
import "./App.css";
import { TaskProvider } from "./contexts/TasksContext";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="App">
      <TaskProvider>
        <AddTask />
        <TaskList />
      </TaskProvider>
    </div>
  );
}

export default App;
