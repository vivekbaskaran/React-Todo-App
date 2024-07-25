import './App.css';
import { useState } from 'react';
import { TodoForm } from './TodoForm';
import { Filter } from './Filter';
import { TodoList } from './TodoList'

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('All');
  const addTodo = (todo) => {
        setTodos([...todos, todo]);
  };

  const updateTodo = (updatedTodo) => {
        setTodos(todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo)));
  };

  const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
        if (filter === 'All') return true;
        return todo.status === filter;
    });
  
  return (
    <div className="App">
      <h1>My Todo</h1>
            <TodoForm addTodo={addTodo} />
            <Filter filter={filter} setFilter={setFilter} />
            <TodoList todos={filteredTodos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
      
    </div>
  );
}

export default App;
