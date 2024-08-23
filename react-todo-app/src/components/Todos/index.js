import React, {useState} from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'


const intialState = [
  {id: 1, message : "wake up"},
  {id: 2, message : "walk the dog"},
  {id: 3, message : "go to bed"},



]

const Todos = () => {
    const [todoList, setTodoList] = useState(intialState)


  return (
    <div>
    
    <TodoForm todos={todoList}  setTodos={setTodoList} />
    <TodoList todos = {todoList} />

    </div>
  )
}

export default Todos