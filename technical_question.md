# Answers to Technical Questions

## 1. How long did you spend on the coding test?

I spent approximately 13-14 hours on the coding test. in that time i setting up the project, developing and testing the features, and writing the readme file.

## 2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

The most useful feature added in React's latest versions is React Hooks, specifically useState and useEffect. These hooks simplify state management and side effects in functional components, eliminating the need for class components.

- useState is used to manage local state in a functional component.
- useEffect is used to handle side effects like data fetching or DOM manipulation when the component mounts, updates, or unmounts.

### Example

```javascript
import React, { useState, useEffect } from "react";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const fetchedTasks = [
        {
          id: 1,
          title: "Task 1",
          description: "This is task 1",
          priority: "High",
        },
        {
          id: 2,
          title: "Task 2",
          description: "This is task 2",
          priority: "Medium",
        },
      ];
      setTasks(fetchedTasks);
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <div>Loading tasks...</div>;
  }

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} - {task.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
```

## 3. How would you track down a performance issue in production? Have you ever had to do this?

To track down a performance issue in production, follow these simple steps:

- Check Browser DevTools: In the browser,i can open Chrome DevTools and check the Network tab for slow requests, and the Performance tab to see if JavaScript is taking too long to run.

- Asynchronous concept: we can use asynchronous code in our project so we cannot wait for that task which one take time to execute.

- Optimize Assets: i will make sure images and files (CSS, JavaScript) are compressed and minimized to reduce loading times.

- Optimize Code: In React,i can check for unnecessary re-renders or heavy computations that can slow down the app.

- Check Server Performance: i can also see the slow database queries or processing on the server side using.

## Experience

yes,i use K6 for load testing. I simulate real-world traffic scenarios to understand how the application performs under stress. If performance issues are detected, whether in the frontend, backend, or database. i work on optimizations and then using K6 to verify improvements.

## 4. If you had more time, what additional features or improvements would you consider adding to the task management application?

If I had more time, I would consider adding the following features and improvements:

- User Authentication: i can implements user accounts with login feature that would allow multiple users to have their own task lists.
- Reminders: i can use backend concept and send mail to user registered email if tasks is not completed under given time.
- Use database: Adding options to sync tasks across devices or back them up to a cloud storage service for better data persistence such as mongodb or sql.
- Dark Mode: i can implement a dark mode option for user interface which will give a better user experience, especially in low-light environments.
