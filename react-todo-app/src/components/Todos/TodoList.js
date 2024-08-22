import React from 'react'
import Todo from './Todo'
const todos = [
  {id: 1, message : "wake up"},
  {id: 2, message : "walk the dog"},
  {id: 3, message : "go to bed"},



]


const TodoList = () => {
  return (
    <div>
      { todos.map(todo =>{
          return <Todo  key= {todo.id} todo={todo} />
      })

      }
</div>
  )
}

export default TodoList