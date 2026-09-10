import { useEffect, useState } from "react";
import tasksAPI from "@/shared/api/tasks";

const TaskPage = (props) => {
  const {params} = props
  const taskId = params.id

  const [task, setTask] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    tasksAPI
      .getById(taskId)
      .then((taskData) => {
        if(taskData && taskData.id){
            setTask(taskData);
            setHasError(false);
        }
        else setHasError(true)
      })
      .catch(() => {
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  else if (hasError) {
    return <div>Task not found!!!</div>;
  }
  else return (
    <div>
      <h1>{task.title}</h1>
      <p> {task.isDone ? "Task complete" : "Task not complete"}</p>
    </div>
  );
};

export default TaskPage;
