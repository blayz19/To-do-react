"use strict";

import {
  createContext,
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
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
        disappearingTaskId,
        appearingTaskId
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
