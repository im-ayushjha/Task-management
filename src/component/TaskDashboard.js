import React from "react";
import TaskList from "./TaskList";

const TaskDashboard = ({ tasks }) => {
  // Filter tasks by status
  const upcomingTasks = tasks.filter((task) => task.status === "upcoming");
  const overdueTasks = tasks.filter((task) => task.status === "overdue");
  const completedTasks = tasks.filter((task) => task.status === "completed");

  return (
    <div className="task-dashboard">
      <div className="task-section">
        <h2>Upcoming Tasks</h2>
        <TaskList tasks={upcomingTasks} />
      </div>

      <div className="task-section">
        <h2>Overdue Tasks</h2>
        <TaskList tasks={overdueTasks} />
      </div>

      <div className="task-section">
        <h2>Completed Tasks</h2>
        <TaskList tasks={completedTasks} />
      </div>
    </div>
  );
};

export default TaskDashboard;
