import { useState } from "react";

function Todolist() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTAsk] = useState("")

    function handleInput(e){
        setNewTAsk(e.target.value)
    }

    function addTask() {
        if(newTask.trim() !== "")
            setTasks(t => [...t, newTask]);
        setNewTAsk("");

    }

    function deleteTask(index) {
        const updateTasks = tasks.filter((_, i) => i !==index);
        setTasks(updateTasks)

    }

    return(
        <div className="to-do">
            <h1>My Todo List</h1>
            <div>
                <input type="text" placeholder="enter a task"  value={newTask} onChange={handleInput}/>
                <button className= "add-button" onClick={addTask}>Add</button>
            </div>
            <ol>
                {tasks.map((task, index) =>
                <li key={index}>
                    <span className="text">{task}</span>
                    <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                </li>)}
            </ol>
        </div>
    )
}


export default Todolist
