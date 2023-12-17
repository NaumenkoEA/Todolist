import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {FilterValuesType} from "../../App";

type TaskType = {
    id: string,
    text: string,
    isDone: boolean
}

type PropsType = {
    title: string,
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (text: string) => void

}


export const Todolist = (props: PropsType) => {
    const [newText, setNewText] = useState("")
    const onChangeTextTask = (e: ChangeEvent<HTMLInputElement>) => {
        setNewText(e.currentTarget.value)
    }
    const onKeyUpEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            props.addTask(newText)
            setNewText('')
        }
    }
    const onClickAddTask = () => {
        props.addTask(newText)
        setNewText('')
    }

    const onAllFilter = () => {
        props.changeFilter('all')
    }
    const onActiveFilter = () => {
        props.changeFilter('active')
    }
    const onCompletedFilter = () => {
        props.changeFilter('completed')
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={newText} onChange={onChangeTextTask} onKeyUp={onKeyUpEnter}/>
                <button onClick={onClickAddTask}>+</button>
            </div>

            <ul>
                {
                    props.tasks.map(t => <li key={t.id}>
                            <input type="checkbox" checked={t.isDone}/><span>{t.text}</span>
                            <button onClick={() => {
                                props.removeTask(t.id)
                            }}>x
                            </button>
                        </li>
                    )
                }
            </ul>
            <div>
                <button onClick={onAllFilter}>All</button>
                <button onClick={onActiveFilter}>Active</button>
                <button onClick={onCompletedFilter}>Completed</button>
            </div>

        </div>
    )
}