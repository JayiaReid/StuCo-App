
import React, { useState, useRef, useEffect} from 'react';
import './todo.css'
import Draggable from "react-draggable";
import deleteIcon from '../../../assets/removes.png';
import upIcon from '../../../assets/up-arrows.png';
import downIcon from '../../../assets/down-arrows.png';
import addIcon from '../../../assets/add.png';

export default function TodoList({inputBg}){
    const [tasks, setTasks]=useState([]);
    const [newTask, setNewTask]=useState("");
    const todoListRef = useRef(null);

    useEffect(() => {
        todoListRef.current.focus();
      }, []);
    
    function handleInput(e){
        setNewTask(e.target.value)
    }

    function addTask(){
        if(newTask.trim() !== ""){
           setTasks(t => [...tasks, newTask]);
        setNewTask(""); 
        }
        
    }
    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i)=> i !== index );
        setTasks(updatedTasks);
    }

    function moveTaskUp(index){
        if(index>0){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]];
            setTasks(updatedTasks);
        }   
    }

    function moveTaskDown(index){
        if(index<tasks.length-1){
            const updatedTasks = [...tasks];
        [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]];
        setTasks(updatedTasks);
        }
        
    }
    return(
        <Draggable
            axis="both"
            handle="#todoList">    
        <div id="todoList" ref={todoListRef}>
            <div className="addToDo" 
                style={{backgroundColor: inputBg}}>
                {/* <h1>ToDo</h1> */}
                <input type="text" id='todoInput' 
                placeholder="what is the plan for today?" 
                className="task-input" 
                value={newTask} 
                onChange={handleInput}/>
                <img src={addIcon} className="addbtn" onClick={addTask}/>
            </div>
            <ol id="todolist">
                {tasks.map((task, index)=> 
                    <li key={index}>
                        <span>{task} </span>
                        <img className="todoimgd" src={deleteIcon} onClick={()=>deleteTask(index)}/>
                        <img className="todoimg" src={upIcon} onClick={()=>moveTaskUp(index)}/>
                        <img className="todoimg" src={downIcon} onClick={()=>moveTaskDown(index)}/>
                    </li>
                )}
            </ol>
        </div>
        </Draggable>
    );
}