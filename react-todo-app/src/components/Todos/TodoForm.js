import React from 'react'

const TodoForm = () => {

  const handleChange=()=>{
    console.log("form changed")


  } 
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("form submitted")

  }




  return (
   
      <form  onSubmit={handleSubmit}  >   
          <input
          type='text'
          name='todo'
          value=''
          placeholder='todo form'
          onChange={handleChange}
          
          >
          </input>
          <button type='submit' >add todo</button>

      </form>


  )
}

export default TodoForm