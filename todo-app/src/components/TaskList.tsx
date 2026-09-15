import './Tasks.css'

export interface Task {
  id: string;
  name: string;
  description?: string;
  date?: string;  
  completed?: boolean;
};

interface TaskListProps {
    tasks: Task[];
}

export default function TaskList ({ tasks }: TaskListProps) {
    if (tasks.length === 0) {
        return(
            <div>
                <p>Nenhum registro encontrado!</p>
            </div>
        )
    }
    return (
        <div>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id} style={{ marginBottom: '10px'}}>
                        <strong>{task.name}</strong>
                        <p>criado em {task.date}</p>
                        <button>🗑️</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}