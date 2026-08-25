import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const fetchTasks = async () => {
    try {
      const response = await api.get('/tasks');
      setTasks(response.data);
    } catch (err) {
      navigate('/login');
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAddTask = async (e) => {
    e.preventDefault();
    try {
      await api.post('/tasks', { title, description, completed: false });
      setTitle('');
      setDescription('');
      fetchTasks();
    } catch (err) {
      alert('Failed to add task. Check that the title is not empty.');
    }
  };

  const handleDelete = async (id) => {
    await api.delete(`/tasks/${id}`);
    fetchTasks();
  };

  const handleToggleComplete = async (task) => {
    await api.put(`/tasks/${task.id}`, {
      title: task.title,
      description: task.description,
      completed: !task.completed,
    });
    fetchTasks();
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2>My Tasks</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>

      <form onSubmit={handleAddTask} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map((task) => (
          <li key={task.id} style={{ marginBottom: '10px', border: '1px solid #ccc', padding: '10px' }}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleComplete(task)}
            />
            <strong style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.title}
            </strong>
            <p>{task.description}</p>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;