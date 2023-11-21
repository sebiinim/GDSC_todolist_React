import React, { useState } from "react";
import "./App.css";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  //setTasks, setTask, useState는 react가 제공하는 함수
  //setTask로 task라는 문자열을 받아서 tasks라는 배열에 저장하는 듯 하다. 

  const addTask = () => {
    if (task !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };
  //새 목록을 추가하는 addTask 함수
  //입력받은 task문자열이 공백이 아니라면 tasks배열에 task를 추가한다.

  const deleteTask = (index) => { //목록을 삭제하는 deleteTask 함수
    const newTasks = [...tasks];  //매개변수로 index를 받는다. newTasks라는 배열에 tasks를 불러온다. 
    newTasks.splice(index, 1);    //newTasks 배열에서 index 번호에 해당하는 항목을 삭제한다.
    setTasks(newTasks);           //newTasks 배열을 Tasks배열에 저장한다.
  };

  
  const handleInputChange = (e) => {  
    setTask(e.target.value);
  };

  const handleKeyPress = (e) => { //키보드의 enter 키를 누르면 addTask함수를 호출한다.
    if (e.key === "Enter") {
      addTask();
    }
  };

  const deleteAllTask = (index) => {
    setTasks([]);
  }

  const titleClick = () => {
    alert('hi');
  }


  return (
    <div>
      <h1 onClick={titleClick}>Sebin's TodoList</h1>
      <input
        type="text"
        value={task}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={addTask}>Add new Task</button>   
      <delButton onClick={deleteAllTask}>delete all Task</delButton>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {index+1}.{t} <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
