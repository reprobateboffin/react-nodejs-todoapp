import React, {useState} from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'


const initialState = [
  {id: 1, message : "wake up"},
  {id: 2, message : "walk the dog"},
  {id: 3, message : "go to bed"},



]

const Todos = () => {
    const [todoList, setTodoList] = useState(initialState)

    const deleteHandler = (id)=>{

      const newTodos = todoList.filter(item=>{
        return item.id !==id
      })
      setTodoList(newTodos)

    }


    const updateHandler = (todo) =>{

      setTodoList(todoList.map(item => {
        if(item.id === todo.id){
          return{
            ...item,
            message: todo.message
        }
        }
        else{
          return item
        }
      }))

    }


  return (
    <div>
    
    <TodoForm todos={todoList}  setTodos={setTodoList} />
    <TodoList todos = {todoList} deleteHandler={deleteHandler} updateHandler= {updateHandler} />

    </div>
  )
}

export default Todos