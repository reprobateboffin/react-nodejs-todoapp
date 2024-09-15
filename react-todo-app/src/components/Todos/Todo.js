import React, {useState} from 'react'
let Todo = ({todo, deleteHandler, updateHandler}) => {
 
 
 const [isEditing, setIsEditing] = useState(false)
 const [updatedTodo,setUpdatedTodo] = useState();

const updateToDoState = (e) =>{
  setUpdatedTodo({
    id : todo.id,
    message : e.target.value
  })


}
const updateAndReset = (input,e) => {

  e.preventDefault()

  updateHandler(input)
  setIsEditing(false)

}

 
 return (
    <div>




      {isEditing? 
      <form onSubmit={e=>updateAndReset(updatedTodo,e)} >  
         <input
         type='text'
         defaultValue={todo.message}
         onChange={updateToDoState}
         
         >
      
      </input></form> :
  <p onDoubleClick={()=>setIsEditing(true)}>{todo.message}</p>
}
      <button onClick={()=>deleteHandler(todo.id)    }>X</button>

    </div>
  )
}

export default Todo