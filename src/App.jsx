import  { useState } from 'react';
import './App.css';

import TodoItems from './components/TodoItems';
import TodoInput from './components/TodoInput';


const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

 
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div> 
      <h1>Todo List</h1>
  <TodoInput onAdd={handleAddTodo} inputValue={inputValue} setInputValue={setInputValue}/>
<TodoItems todos={todos} ondelete={handleDeleteTodo} />
    </div>
 
  );
};

export default TodoList;