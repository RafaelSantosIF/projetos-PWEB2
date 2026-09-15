import './App.css'
import { useState } from 'react';
import AddTaskBar from './components/AddTaskBar';
import TaskList, { type Task } from './components/TaskList';

const INITIAL_TASKS: Task[] = [
  { id: '1', name: 'Tarefa 1', description: '', date: '28/08/2004', completed: false },
  { id: '2', name: 'Tarefa 2', description: '', date: '15/09/2026', completed: false }
];

function App() {
  const username = "Jeremias";
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);

  const pendingTasks = tasks.filter(task => !task.completed);
  const doneTasks = tasks.filter(task => task.completed);

  function handleAddTask(name: string) {
    setTasks((currentTasks) => [
      ...currentTasks,
      {
        id: crypto.randomUUID(),
        name,
        description: '',
        date: new Date().toLocaleDateString('pt-BR'),
        completed: false
      }
    ]);
  }

  return (
    <>
      <section id='header'>
        <h2>TodoList</h2>
        <p>Bom Dia, {username}👋</p>
      </section>
      <section id="center">
        <AddTaskBar onAddTask={handleAddTask} />
        <h1>Minhas Tarefas</h1>
        <p>{doneTasks.length} de {tasks.length} concluídas</p>
        <h3>Veja todas as suas tarefas criadas na plataforma</h3>
        
        <TaskList tasks={tasks} />
      </section>

      <section id="spacer"></section>
    </>
  )
}

export default App
