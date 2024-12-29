'use client';
import { Button } from '@/components/ui/button';
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
    <div className='border rounded-lg border-gray-300 p-4 max-h-screen'>
      <h1 className='text-xl font-medium'>My Todos</h1>
      <hr />
      <form onSubmit={addTodo} className='my-4'>
        <input
          type='text'
          placeholder='My chores'
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className='border rounded-lg border-gray-300 p-2 mr-2'
        />
        <Button variant='outline' type='submit'>
          Add Todo
        </Button>
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
