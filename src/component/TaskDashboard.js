import React from "react";
import TaskList from "./TaskList";
import "./TaskDashboard.css";
import { FaSearch } from "react-icons/fa";

const TaskDashboard = ({
  tasks,
  onEditTask,
  onDeleteTask,
  onToggleComplete,
  searchTerm,
  onSearchChange,
  priorityFilter,
  setPriorityFilter,
  statusFilter,
  setStatusFilter,
}) => {
  const filtered = tasks.filter((task) => {
    const matchesPriority =
      priorityFilter === "All" || task.priority === priorityFilter;
    const matchesStatus =
      statusFilter === "All" ||
      (statusFilter === "Completed" && task.status === "completed") ||
      (statusFilter === "Incomplete" && task.status !== "completed");
    return matchesPriority && matchesStatus;
  });

  const upcomingTasks = filtered.filter((task) => task.status === "upcoming");
  const overdueTasks = filtered.filter((task) => task.status === "overdue");
  const completedTasks = filtered.filter((task) => task.status === "completed");

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      searchTerm.trim() === "" ||
      task.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPriority =
      priorityFilter === "All" || task.priority === priorityFilter;
    const matchesStatus =
      statusFilter === "All" ||
      (statusFilter === "Completed" && task.status === "completed") ||
      (statusFilter === "Incomplete" && task.status !== "completed");

    return matchesPriority && matchesStatus && matchesSearch;
  });

  const hasSearchTerm = searchTerm.trim() !== "";
  return (
    <div className="task-dashboard">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search tasks by title..."
          value={searchTerm}
          onChange={onSearchChange}
        />
        <FaSearch className="search-icon" />
        <select
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
        >
          <option value="All">All Priorities</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All Statuses</option>
          <option value="Completed">Completed</option>
          <option value="Incomplete">Incomplete</option>
        </select>
      </div>
      {hasSearchTerm ? (
        <div className="task-section">
          <h2>Search Results</h2>
          <TaskList
            tasks={filteredTasks} 
            onEditTask={onEditTask}
            onDeleteTask={onDeleteTask}
            onToggleComplete={onToggleComplete}
          />
        </div>
      ) : (
        <>
          <div className="task-section">
            <h2>Upcoming Tasks</h2>
            <TaskList
              tasks={upcomingTasks}
              onEditTask={onEditTask}
              onDeleteTask={onDeleteTask}
              onToggleComplete={onToggleComplete}
            />
          </div>
          <div className="task-section">
            <h2>Overdue Tasks</h2>
            <TaskList
              tasks={overdueTasks}
              onEditTask={onEditTask}
              onDeleteTask={onDeleteTask}
              onToggleComplete={onToggleComplete}
            />
          </div>
          <div className="task-section">
            <h2>Completed Tasks</h2>
            <TaskList
              tasks={completedTasks}
              onEditTask={onEditTask}
              onDeleteTask={onDeleteTask}
              onToggleComplete={onToggleComplete}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default TaskDashboard;
