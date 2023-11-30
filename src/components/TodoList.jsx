import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({ todos,handleDeleteTodo,handleCompleteTodo,handleUpdateTodo}) => {
  return (
    <ul className='ul_todo'>
        {todos.map(todo =>( 
        <TodoItem
        key={todo.id}
        todo={todo}
        handleCompleteTodo={handleCompleteTodo}
        handleDeleteTodo={handleDeleteTodo}
        handleUpdateTodo={handleUpdateTodo}
         />
         ))}
    </ul>
  )
}
