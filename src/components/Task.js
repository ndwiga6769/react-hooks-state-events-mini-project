import React, {useState} from "react";
//how to write a delete function in javascript


function Task({text,category}) {
  const [data,setData] = useState()

  function handleDelete(e){
    console.log(e.target.value)

    }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
