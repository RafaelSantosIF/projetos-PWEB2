import './Tasks.css'
import trashIcon from '../assets/trash.png'
import sadIcon from '../assets/triste.png'

export interface Task {
  id: string;
  name: string;
  description?: string;
  date: string;
  completedAt?: string;
  completed?: boolean;
};

interface TaskListProps {
    tasks: Task[];
    onToggleTask: (taskId: string) => void;
    onDeleteTask: (taskId: string) => void;
}

export default function TaskList ({ tasks, onToggleTask, onDeleteTask }: TaskListProps) {
    if (tasks.length === 0) {
        return(
            <div className="empty_tasks">
                <img src={sadIcon} alt="" aria-hidden="true" />
                <p>Nenhum registro encontrado!</p>
            </div>
        )
    }

    return (
        <div className="task_list">
            <ul className="task_items">
                {tasks.map((task) => (
                    <li
                        key={task.id}
                        className={`task_item ${task.completed ? 'completed' : 'pending'}`}
                    >
                        <button
                            className="task_check"
                            type="button"
                            aria-label={`${task.completed ? 'Marcar como pendente' : 'Marcar como concluída'}: ${task.name}`}
                            aria-pressed={Boolean(task.completed)}
                            onClick={() => onToggleTask(task.id)}
                        >
                            ✓
                        </button>
                        <div className="task_content">
                            <strong>{task.name}</strong>
                            <p>
                                {task.completed
                                    ? `Concluído em: ${task.completedAt}`
                                    : `Criado em: ${task.date}`}
                            </p>
                        </div>
                        <button
                            className="delete_button"
                            type="button"
                            aria-label={`Excluir ${task.name}`}
                            onClick={() => onDeleteTask(task.id)}
                        >
                            <img src={trashIcon} alt="" aria-hidden="true" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
