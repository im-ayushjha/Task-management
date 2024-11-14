import React from "react";
import "./TaskItem.css";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const TaskItem = ({ task, onEdit, onDelete, onToggleComplete }) => {
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
        {!task.completed && (
          <label className="completed-label">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleComplete(task.id)} // Toggle complete status
            />
            <span className="checkmark"></span>
            Mark as Completed
          </label>
        )}
        <button className="edit-btn" onClick={() => onEdit(task)}>
          <FaEdit className="edit-icon" />
          Edit
        </button>

        <button className="delete-btn" onClick={() => onDelete(task.id)}>
          <FaEdit className="delete-icon" />
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
