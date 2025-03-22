
import React from 'react';
import { Pencil, Trash2 } from 'lucide-react';

interface TaskCardProps {
  id: string;
  title: string;
  description: string;
  creator: string;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({
  id,
  title,
  description,
  creator,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="task-card mb-3 animate-fade-in">
      <div className="flex justify-between items-start">
        <h3 className="font-medium text-foreground">{title}</h3>
        <div className="flex space-x-1">
          <button 
            className="text-muted-foreground hover:text-foreground transition-colors p-1 rounded"
            onClick={() => onEdit(id)}
            aria-label="Edit task"
          >
            <Pencil size={16} />
          </button>
          <button 
            className="text-muted-foreground hover:text-destructive transition-colors p-1 rounded"
            onClick={() => onDelete(id)}
            aria-label="Delete task"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{description}</p>
      <div className="mt-2 text-xs text-muted-foreground">
        Created by {creator}
      </div>
    </div>
  );
};

export default TaskCard;
