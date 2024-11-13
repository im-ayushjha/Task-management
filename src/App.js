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
    if (taskToEdit) {
      setTasks(
        tasks.map((task) =>
          task.id === taskToEdit.id ? { ...task, ...taskData, status } : task
        )
      );
    } else {
      // Add new task
      const newTask = { ...taskData, id: tasks.length + 1, status };
      setTasks([...tasks, newTask]);
    }
    toggleForm();
  };

  const handleToggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              completed: !task.completed,
              status: !task.completed ? "completed" : "upcoming",
            }
          : task
      )
    );
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
