import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onEditTask, onDeleteTask, onToggleComplete }) => {
  return (
    <div
      className="task-list"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        paddingLeft: "5px",
        backgroundColor: "#f4f4f4",
        borderRadius: "4px",
      }}
    >
      {tasks.length === 0 ? (
        <p style={{ color: "#888", fontSize: "18px" }}>No tasks available!</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onEdit={onEditTask}
            onDelete={onDeleteTask}
            onToggleComplete={onToggleComplete}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
