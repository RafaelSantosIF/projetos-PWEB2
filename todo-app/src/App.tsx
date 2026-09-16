import './App.css'
import { useState } from 'react';
import AddTaskBar from './components/AddTaskBar';
import TaskList, { type Task } from './components/TaskList';

const INITIAL_TASKS: Task[] = [
  { id: '1', name: 'Conseguir Green Card', description: '', date: '11 de out 2025', completed: false },
  { id: '2', name: 'Ganhar no Tigrinho', description: '', date: '11 de out 2025', completed: false },
  { id: '3', name: 'Apostar no Tigrinho', description: '', date: '11 de out 2025', completedAt: '7 de set 2026', completed: true },  
];

function App() {
  const username = 'Jeremias';
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);
  const doneTasks = tasks.filter(task => task.completed);

  function getCurrentDate() {
    return new Date().toLocaleDateString('pt-BR');
  }

  function handleAddTask(name: string) {
    setTasks((currentTasks) => [
      ...currentTasks,
      {
        id: crypto.randomUUID(),
        name,
        description: '',
        date: getCurrentDate(),
        completed: false
      }
    ]);
  }

  function handleToggleTask(taskId: string) {
    setTasks((currentTasks) =>
      currentTasks.map((task) => {
        if (task.id !== taskId) return task;

        const nextCompleted = !task.completed;

        return {
          ...task,
          completed: nextCompleted,
          completedAt: nextCompleted ? getCurrentDate() : undefined
        };
      })
    );
  }

  function handleDeleteTask(taskId: string) {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId)
    );
  }

  return (
    <>
      <section id="header">
        <h2>TodoList</h2>
        <p>Bom dia, <strong>{username}</strong> 👋</p>
      </section>

      <main id="center">
        <AddTaskBar onAddTask={handleAddTask} />

        <div className="tasks_heading">
          <div>
            <h1>Minhas tarefas</h1>
            <h3>Veja todas as suas tarefas criadas na plataforma.</h3>
          </div>
          <p><strong>{doneTasks.length} de {tasks.length}</strong> concluídas</p>
        </div>

        <TaskList
          tasks={tasks}
          onToggleTask={handleToggleTask}
          onDeleteTask={handleDeleteTask}
        />
      </main>

      <section id="spacer" aria-hidden="true" />
    </>
  )
}

export default App
