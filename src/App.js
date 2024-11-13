import React, { useState, useEffect } from "react";
import TaskDashboard from "./component/TaskDashboard";
import TaskForm from "./component/TaskForm";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const toggleForm = () => {
    setShowForm(!showForm);
    setTaskToEdit(null);
  };

  // Add or update a task
  const handleSaveTask = (taskData) => {
    const today = new Date();
    const dueDate = new Date(taskData.dueDate);

    let status;
    if (taskData.completed) {
      status = "completed";
    } else if (dueDate < today) {
      status = "overdue";
    } else {
      status = "upcoming";
    }
    let updatedTasks;
    if (taskToEdit) {
      updatedTasks = tasks.map((task) =>
        task.id === taskToEdit.id ? { ...task, ...taskData, status } : task
      );
    } else {
      const newTask = { ...taskData, id: tasks.length + 1, status };
      updatedTasks = [...tasks, newTask];
    }

    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    toggleForm();
  };

  const handleToggleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId && task.status !== "completed") {
        const newStatus = task.completed ? "upcoming" : "completed";
        return { ...task, completed: !task.completed, status: newStatus };
      }
      return task;
    });

    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // Save the updated tasks
  };

  // Edit task handler
  const handleEditTask = (task) => {
    setTaskToEdit(task);
    setShowForm(true);
  };

  // Delete task handler
  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <div className="App">
      <h1>Welcome to Task Management</h1>
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
        onToggleComplete={handleToggleComplete}
      />
    </div>
  );
};

export default App;
