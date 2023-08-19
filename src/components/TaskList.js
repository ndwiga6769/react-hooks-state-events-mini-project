import React from "react";
import Task from "./Task";

function TaskList(props) {
 const displayTask = props.task.map((task) => (
  <Task key = {task.task} text = {task.text} category = {task.category}/>
 ))
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {displayTask}
    </div>
  );
}

export default TaskList;
