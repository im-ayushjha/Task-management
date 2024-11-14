# Task Management Application

## Overview

The Task Management Application provides a easy way to manage and organize tasks. This tool allows you to create, edit, delete, and mark tasks as either complete or incomplete. You can also filter tasks by priority (High, Medium, Low) and by status (Completed, Incomplete) to focus on what matters most.

## Features

- **Add New Tasks with Priority Levels**: Create new tasks with different priority levels such as High,Medium and Low.
- **Edit or Delete Tasks**: Modify or remove tasks easily if they’re no longer needed.
- **Filter by Priority and Status**: Sort tasks by priority or completion status.
- **Search Tasks by Title**: Find tasks quickly by typing part of the title.

## Technologies Used

- **Frontend**: React, styled with CSS, using React Icons for extra visuals and functionality.
- **Database**: Local Storage is used to save tasks directly in your browser, so data is available even after you close the app (no backend server required).

## Setup Instructions

To get started, set up the application locally by following these steps:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/github_username/repo_name.git
   ```
2. **Go to the Project Folder**
   ```bash
   cd task-management\task
   ```
3. **Install Dependencies**
   ```bash
   npm install
   ```
4. **Run the Application**
   ```bash
   npm start
   ```

## Usage Guide

1. **Homepage**: View all tasks on the homepage.
2. **Add New Task**: Click on "Add New Task" to create a task. Set a title,Description,Due date and priority level, then save it to add it to your list.
3. **Edit and Delete Tasks**: Use the edit and delete icons next to each task to make changes or remove it.
4. **Make task as Complete**: Mark tasks as complete to keep track of progress.
5. **Filter by Priority and Status**: Use filters to display tasks based on priority (High, Medium, Low) or status (Completed, Incomplete).
6. **Search Tasks**: Type a keyword in the search bar to quickly locate a specific task and you can filter by priority and Status after searching.

## Assumptions

- Tasks are saved in the browser’s local storage, so data persists only on the local device.
- Tasks have three priority levels: High, Medium, and Low.
- This application is designed for single-user, not multi user.
