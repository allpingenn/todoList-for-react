import React, {useState} from 'react';
import { TodoForm } from './TodoForm';
import { Todo } from './Todo';
import { v4 as uuidv4 } from 'uuid';


export const TodoGen = () => {
    const [todos, setTodos] = useState([]);
    const addTodo = (todo) => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false}])
    }
    const toggleComplete = (id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo));
    }
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }
  return (
    <div className='TodoGen'>
        <h1>Bugün Neler Yapacaksın ?</h1>
        <TodoForm addTodo={addTodo}/>
        {todos.map((todo, index) => (
            <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
        ))}
        
    </div>
  )
}
