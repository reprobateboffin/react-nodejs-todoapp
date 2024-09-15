import React, { useState} from 'react'

const TodoForm = ({todos,setTodos}) => {
const initialState  = {
id : '',
    message:''
}

  const [todo ,setTodo] = useState(initialState);

  const handleChange=(e)=>{
    console.log("form changed");
    setTodo({message:e.target.value, 
             id : Date.now(),    })
    // console.log(todo)

  } 
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(todos)
    setTodos([todo,...todos])
    setTodo(initialState)

  }




  return (
   
      <form  onSubmit={handleSubmit}  >   
          <input
          type='text'
          name='todo'
          value={todo.message}
          placeholder='todo form'
          onChange={handleChange}
          
          >
          </input>
          <button type='submit' >add todo</button>

      </form>


  )
}

export default TodoForm