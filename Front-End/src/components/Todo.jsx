

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingTaskTitle, setEditingTaskTitle] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch tasks from backend
  useEffect(() => {
    axios.get('http://localhost:3000/todos')
      .then(response => {
        if (Array.isArray(response.data)) {
          setTasks(response.data);
        } else {
          setError("Unexpected response format!");
        }
        setLoading(false);
      })
      .catch(error => {
        console.error("Error updating task:", error);
        setError("There was an error fetching the tasks!");
        setLoading(false);
      });
  }, []);

  // Add new task
  const addTask = () => {
    if (!newTask.trim()) return; // Prevent adding empty tasks
    // axios.post('/todos', { title: newTask, completed: false })
     axios.post('http://localhost:3000/todos', { title: newTask, completed: false })
      .then(response => {
        setTasks([...tasks, response.data]);
        setNewTask('');
      })
      .catch(error => {
        console.error("Error updating task:", error);
        setError("There was an error adding the task!");
      });
  };

  // Update task
  const updateTask = (id) => {
    if (!editingTaskTitle.trim()) return; // Prevent saving empty tasks
    axios.put(`http://localhost:3000/todos/${id}`, { title: editingTaskTitle })
      .then(response => {
        setTasks(tasks.map(task => task.id === id ? response.data : task));
        setEditingTaskId(null);
        setEditingTaskTitle('');
      })
      .catch(error => {
        console.error("Error updating task:", error);
        setError("There was an error updating the task!");
      });
  };

  // Delete task
  const deleteTask = (id) => {
    axios.delete(`http://localhost:3000/todos/${id}`)
      .then(() => {
        setTasks(tasks.filter(task => task.id !== id));
      })
      .catch(error => {
        console.error("Error deleting task:", error);
        setError("There was an error deleting the task!");
      });
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Todo List</h1>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="mb-4 flex">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-grow p-2 border border-gray-300 rounded-md mr-2"
          placeholder="Add new task"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Add Task
        </button>
      </div>

      <ul>
        {tasks.map(task => (
          <li key={task.id} className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-md my-2">
            {editingTaskId === task.id ? (
              <>
                <input
                  type="text"
                  value={editingTaskTitle}
                  onChange={(e) => setEditingTaskTitle(e.target.value)}
                  className="flex-grow p-2 border border-gray-300 rounded-md mr-2"
                />
                <button
                  onClick={() => updateTask(task.id)}
                  className="bg-green-500 text-white px-4 py-2 rounded-md"
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <span>{task.title}</span>
                <div>
                  <button
                    onClick={() => {
                      setEditingTaskId(task.id);
                      setEditingTaskTitle(task.title);
                    }}
                    className="bg-yellow-500 text-white px-2 py-1 rounded-md mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded-md"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
