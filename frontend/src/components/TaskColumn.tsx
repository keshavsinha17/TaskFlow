
import React from 'react';
import TaskCard from './TaskCard';
import { Plus } from 'lucide-react';

interface Task {
  id: string;
  title: string;
  description: string;
  creator: string;
  status: 'todo' | 'in-progress' | 'done';
}

interface TaskColumnProps {
  title: string;
  tasks: Task[];
  status: 'todo' | 'in-progress' | 'done';
  onAddTask: (status: 'todo' | 'in-progress' | 'done') => void;
  onEditTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

const TaskColumn: React.FC<TaskColumnProps> = ({
  title,
  tasks,
  status,
  onAddTask,
  onEditTask,
  onDeleteTask,
}) => {
  return (
    <div className="task-column">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-foreground">{title}</h2>
        <span className="bg-secondary-foreground/10 text-muted-foreground text-xs font-medium px-2 py-1 rounded-full">
          {tasks.length}
        </span>
      </div>
      
      <button 
        className="w-full bg-black text-white py-2 px-4 rounded-md flex items-center justify-center mb-4 transition-colors hover:bg-black/90"
        onClick={() => onAddTask(status)}
      >
        <Plus size={16} className="mr-1" />
        Add Task
      </button>
      
      <div className="space-y-3 overflow-y-auto flex-grow">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            creator={task.creator}
            onEdit={onEditTask}
            onDelete={onDeleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskColumn;
