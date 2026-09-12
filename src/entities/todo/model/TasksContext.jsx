"use strict";

import {
  createContext,
  useMemo
} from "react";
import useTasks from "./useTasks";
import useIncompleteTaskScroll from "./useIncompleteTaskScroll";

export const TasksContext = createContext({});

const TasksProvider = (props) => {
  const { children } = props;

  const {
    tasks,
    filteredTasks,
    deleteTask,
    deleteAllTasks,
    toggleTaskComplete,
    newTaskTitle,
    setSearchQuery,
    searchQuery,
    setNewTaskTitle,
    newTaskInputRef,
    addTask,
    disappearingTaskId,
    appearingTaskId
  } = useTasks();

  const {
    firstIncompleteTaskRef,
    firstIncompleteTaskId,
  } = useIncompleteTaskScroll(tasks);

  const value = useMemo(() => ({
    tasks,
    filteredTasks,
    firstIncompleteTaskRef,
    firstIncompleteTaskId,
    deleteTask,
    deleteAllTasks,
    toggleTaskComplete,
    newTaskTitle,
    setSearchQuery,
    searchQuery,
    setNewTaskTitle,
    newTaskInputRef,
    addTask,
    disappearingTaskId,
    appearingTaskId
  }), [
    tasks,
    filteredTasks,
    firstIncompleteTaskRef,
    firstIncompleteTaskId,
    deleteTask,
    deleteAllTasks,
    toggleTaskComplete,
    newTaskTitle,
    setSearchQuery,
    searchQuery,
    setNewTaskTitle,
    newTaskInputRef,
    addTask,
    disappearingTaskId,
    appearingTaskId
  ]);

  return (
    <TasksContext.Provider
      value={value}
    >
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
