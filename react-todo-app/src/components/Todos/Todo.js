import React, { useState } from 'react';

const Todo = ({ todo, deleteHandler, updateHandler }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState({});

  const updateToDoState = (e) => {
    setUpdatedTodo({
      id: todo.id,
      message: e.target.value
    });
  };

  const updateAndReset = (input, e) => {
    e.preventDefault();
    updateHandler(input);
    setIsEditing(false);
  };

  // Inline styles
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px',
    backgroundColor: '#f9f9f9',
    transition: 'background-color 0.3s',
    ':hover': {
      backgroundColor: '#f1f1f1'
    }
  };

  const textStyle = {
    flexGrow: 1,
    margin: 0,
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'color 0.3s',
    ':hover': {
      color: '#007bff'
    }
  };

  const inputStyle = {
    flexGrow: 1,
    fontSize: '16px',
    padding: '5px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    outline: 'none',
    ':focus': {
      borderColor: '#007bff'
    }
  };

  const buttonStyle = {
    backgroundColor: '#ff6b6b',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    ':hover': {
      backgroundColor: '#ff4757'
    }
  };

  return (
    <div style={containerStyle}>
      {isEditing ? (
        <form onSubmit={(e) => updateAndReset(updatedTodo, e)}>
          <input
            type='text'
            style={inputStyle}
            defaultValue={todo.message}
            onChange={updateToDoState}
          />
        </form>
      ) : (
        <p style={textStyle} onDoubleClick={() => setIsEditing(true)}>
          {todo.message}
        </p>
      )}
      <button style={buttonStyle} onClick={() => deleteHandler(todo.id)}>X</button>
    </div>
  );
};

export default Todo;
