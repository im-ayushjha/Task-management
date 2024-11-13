import React from "react";
import "./TaskItem.css"; // Importing the CSS file

const TaskItem = ({ task, onEdit, onDelete }) => {
  return (
    <div className="task-item">
      <h3>{task.title}</h3>

      <p>{task.description}</p>

      <p className="due-date">Due: {task.dueDate}</p>

      <p
        className={`priority ${
          task.priority === "High"
            ? "priority-high"
            : task.priority === "Medium"
            ? "priority-medium"
            : "priority-low"
        }`}
      >
        Priority: {task.priority}
      </p>

      <div className="button-container">
        <button className="edit-btn" onClick={() => onEdit(task)}>
          Edit
        </button>

        <button className="delete-btn" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
