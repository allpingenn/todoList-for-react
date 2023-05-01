import React from 'react'

export const Todo = ({task, toggleComplete, deleteTodo}) => {
  return (
    <div className='Todo'>
        <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? "completed" : ""}`} >{task.task} </p>
        <div>
        <i class="fa-solid fa-trash-can fa-bounce" onClick={() => deleteTodo(task.id)}></i>
        </div>
    </div>
  )
}
