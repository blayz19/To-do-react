"use strict";

import {
  createContext,
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import useTasks from "../hooks/useTasks";
import useIncompleteTaskScroll from "../hooks/useIncompleteTaskScroll";

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
  } = useTasks();

  const {
    firstIncompleteTaskRef,
    firstIncompleteTaskId,
  } = useIncompleteTaskScroll(tasks);

  return (
    <TasksContext.Provider
      value={{
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
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
