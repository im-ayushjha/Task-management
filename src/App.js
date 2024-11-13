import React, { useState } from "react";
import TaskDashboard from "./component/TaskDashboard";
import TaskForm from "./component/TaskForm";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  // Toggle form visibility
  const toggleForm = () => {
    setShowForm(!showForm);
    setTaskToEdit(null); // Reset any task being edited
  };

  // Add or update a task
  const handleSaveTask = (taskData) => {
    if (taskToEdit) {
      // Edit existing task
      setTasks(
        tasks.map((task) =>
          task.id === taskToEdit.id ? { ...task, ...taskData } : task
        )
      );
    } else {
      // Add new task
      const newTask = { ...taskData, id: tasks.length + 1, status: "upcoming" };
      setTasks([...tasks, newTask]);
    }
    toggleForm();
  };

  // Edit task handler
  const handleEditTask = (task) => {
    setTaskToEdit(task);
    setShowForm(true);
  };

  // Delete task handler
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="App">
      <h1>Task Management</h1>
      <button onClick={toggleForm}>
        {showForm ? "Close Form" : "Add New Task"}
      </button>
      {showForm && (
        <TaskForm
          onSave={handleSaveTask}
          taskToEdit={taskToEdit}
          onCancel={toggleForm}
        />
      )}
      <TaskDashboard
        tasks={tasks}
        onEditTask={handleEditTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
};

export default App;
