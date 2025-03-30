import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MoreHorizontal, Trash2, Plus } from 'lucide-react';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';

interface Task {
  _id: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'done';
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
  createdBy: string;
  assignedTo?: string;
}

interface TaskColumnProps {
  title: string;
  tasks: Task[];
  onTaskClick: (taskId: string) => void;
  onTaskDelete: (taskId: string) => void;
  onStatusChange: (taskId: string, newStatus: 'todo' | 'in-progress' | 'done') => void;
  onAddTask?: () => void;
}

const TaskColumn: React.FC<TaskColumnProps> = ({
  title,
  tasks,
  onTaskClick,
  onTaskDelete,
  onStatusChange,
  onAddTask,
}) => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-500 text-white';
      case 'medium':
        return 'bg-yellow-500 text-white';
      case 'low':
        return 'bg-green-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="bg-background p-4 rounded-lg border shadow-sm flex flex-col h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-lg">{title}</h2>
        <Badge variant="outline">{tasks.length}</Badge>
      </div>
      
      {onAddTask && (
        <Button 
          className="w-full mb-4 flex items-center justify-center"
          onClick={onAddTask}
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Task
        </Button>
      )}
      
      <div className="space-y-3 overflow-y-auto flex-grow">
        {tasks.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            No tasks in this column
          </div>
        ) : (
          tasks.map((task) => (
            <Card key={task._id} className="cursor-pointer hover:shadow-md transition-shadow">
              <CardHeader className="p-3 pb-0">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-base" onClick={() => onTaskClick(task._id)}>
                    {task.title}
                  </CardTitle>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => onTaskClick(task._id)}>
                        Edit
                      </DropdownMenuItem>
                      {task.status !== 'todo' && (
                        <DropdownMenuItem onClick={() => onStatusChange(task._id, 'todo')}>
                          Move to To Do
                        </DropdownMenuItem>
                      )}
                      {task.status !== 'in-progress' && (
                        <DropdownMenuItem onClick={() => onStatusChange(task._id, 'in-progress')}>
                          Move to In Progress
                        </DropdownMenuItem>
                      )}
                      {task.status !== 'done' && (
                        <DropdownMenuItem onClick={() => onStatusChange(task._id, 'done')}>
                          Move to Done
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuItem 
                        className="text-red-500"
                        onClick={() => onTaskDelete(task._id)}
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent className="p-3 pt-2" onClick={() => onTaskClick(task._id)}>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {task.description || 'No description'}
                </p>
              </CardContent>
              <CardFooter className="p-3 pt-0 flex justify-between items-center">
                <Badge className={getPriorityColor(task.priority)}>
                  {task.priority}
                </Badge>
                {task.dueDate && (
                  <span className="text-xs text-muted-foreground">
                    Due: {format(new Date(task.dueDate), 'MMM d')}
                  </span>
                )}
              </CardFooter>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default TaskColumn;
