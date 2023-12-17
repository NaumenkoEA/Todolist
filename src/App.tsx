import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./components/Todolist/Todolist";
import {v1} from "uuid";

export type FilterValuesType = 'all' | 'completed' | 'active';

function App() {

    let [task, setTask] = useState([
        {id: v1(), text: "CSS", isDone: true},
        {id: v1(), text: "TS", isDone: false},
        {id: v1(), text: "React", isDone: false},
        {id: v1(), text: "Redux", isDone: false}
    ])
    const [filter, setFilter] = useState<FilterValuesType>('all')
    const removeTask = (id: string) => {
        setTask(task.filter(t => t.id !== id))
    }

    const addTask = (text: string) => {
        let newTask = {id: v1(), text: text, isDone: false}
        let newTasks = [newTask, ...task]
        setTask(newTasks)
    }

    const changeFilter = (value: FilterValuesType) => {
        setFilter(value)
    }


    let taskForTodolist = task;

    if (filter === 'completed') {
        taskForTodolist = task.filter(t => t.isDone)
    }
    if (filter === 'active') {
        taskForTodolist = task.filter(t => !t.isDone)
    }

    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={taskForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}
            />
            {/*<Todolist title="Movie" tasks ={task02}/>*/}
        </div>
    );
}

export default App;
