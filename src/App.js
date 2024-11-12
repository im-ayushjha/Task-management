import "./App.css";

import React, { useState } from "react";
import TaskDashboard from "./component/TaskDashboard";
import TaskForm from "./component/TaskForm";

const App = () => {
  // State to hold the list of tasks
  const [tasks, setTasks] = useState([
    // Sample tasks (you can add more tasks or later load them dynamically)
    {
      id: 1,
      title: "Task 1",
      description: "This is task 1 description",
      dueDate: "2024-11-15",
      priority: "High",
      status: "upcoming",
    },
    {
      id: 2,
      title: "Task 2",
      description: "This is task 2 description",
      dueDate: "2024-11-12",
      priority: "Medium",
      status: "overdue",
    },
  ]);

  return (
    <div className="App">
      <h1>Task Management</h1>
      {/* Pass tasks to TaskDashboard component */}
      <TaskDashboard tasks={tasks} />
    </div>
  );
};

export default App;
