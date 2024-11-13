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
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleEditTask = (task) => {
    setTaskToEdit(task);
    setShowForm(true);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>Task Management</h1>
        <button className="toggle-form-btn" onClick={toggleForm}>
          {showForm ? "Close Form" : "Add New Task"}
        </button>
      </header>
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
