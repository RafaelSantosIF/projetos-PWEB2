import { useState, type SubmitEvent } from 'react';
import './Tasks.css'

interface AddTaskBarProps {
    onAddTask: (name: string) => void;
}

export default function AddTaskBar ({ onAddTask }: AddTaskBarProps) {
    const [taskName, setTaskName] = useState('');

    function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
        event.preventDefault();
        const name = taskName.trim();

        if (!name) return;

        onAddTask(name);
        setTaskName('');
    }

    return (
        <section className="add_task">
            <h1>Adicionar tarefas</h1>
            <form className="container_bar" onSubmit={handleSubmit}>
                <input
                    id='task_name'
                    type='text'
                    placeholder='Nome da tarefa'
                    value={taskName}
                    onChange={(event) => setTaskName(event.target.value)}
                />
                <button id='add_button' type='submit'>Adicionar</button>
            </form>
        </section>
    )
}
