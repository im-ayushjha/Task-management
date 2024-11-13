import React from "react";
import TaskList from "./TaskList";
import "./TaskDashboard.css";

const TaskDashboard = ({
  tasks,
  onEditTask,
  onDeleteTask,
  onToggleComplete,
}) => {
  const upcomingTasks = tasks.filter((task) => task.status === "upcoming");
  const overdueTasks = tasks.filter((task) => task.status === "overdue");
  const completedTasks = tasks.filter((task) => task.status === "completed");

  return (
    <div className="task-dashboard">
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
    </div>
  );
};

export default TaskDashboard;
