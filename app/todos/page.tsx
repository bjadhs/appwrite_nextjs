'use client';
import { useState } from 'react';

type Todos = {
  id: number;
  title: string;
  isCompleted?: boolean;
};

const TodosApp = () => {
  const [todos, setTodos] = useState<Todos[]>([
    { id: 1, title: 'Buy Milk' },
    { id: 2, title: 'Buy Eggs' },
    { id: 3, title: 'Buy Bread', isCompleted: true },
  ]);
  const [task, setTask] = useState<string>('');
  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask: Todos = { id: todos.length + 1, title: task };
    setTodos([...todos, newTask]);
    setTask('');
  };
  return (
    <div>
      <h1>My Todos</h1>
      <form onSubmit={addTodo}>
        <input
          type='text'
          placeholder='My chores'
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type='submit'>Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodosApp;
