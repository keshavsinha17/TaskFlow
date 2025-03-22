
import React, { useState, useEffect } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import TeamCard from '@/components/TeamCard';
import TaskColumn from '@/components/TaskColumn';
import CreateTeamModal from '@/components/CreateTeamModal';
import TaskModal from '@/components/TaskModal';
import TaskToast from '@/components/TaskToast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { LogOut, Plus, User } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';

// Mock data
interface Team {
  id: string;
  name: string;
  memberCount: number;
}

interface Task {
  id: string;
  title: string;
  description: string;
  creator: string;
  status: 'todo' | 'in-progress' | 'done';
}

const initialTeams: Team[] = [
  { id: '1', name: 'Design Team', memberCount: 5 },
  { id: '2', name: 'Engineering', memberCount: 8 },
  { id: '3', name: 'Marketing', memberCount: 4 },
];

const initialTasks: Task[] = [
  {
    id: '1',
    title: 'Design homepage',
    description: 'Create wireframes for the new homepage design',
    creator: 'Alice',
    status: 'todo',
  },
  {
    id: '2',
    title: 'Fix navigation bug',
    description: 'Navigation is broken on mobile devices',
    creator: 'Bob',
    status: 'todo',
  },
  {
    id: '3',
    title: 'Implement login',
    description: 'Add authentication system using JWT',
    creator: 'Charlie',
    status: 'in-progress',
  },
  {
    id: '4',
    title: 'Create API docs',
    description: 'Document all API endpoints for the team',
    creator: 'David',
    status: 'in-progress',
  },
  {
    id: '5',
    title: 'Update dependencies',
    description: 'Update all npm packages to latest versions',
    creator: 'Eve',
    status: 'done',
  },
];

const Index = () => {
  const [teams, setTeams] = useState<Team[]>(initialTeams);
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [activeTeam, setActiveTeam] = useState<Team | null>(initialTeams[0]);
  const [isCreateTeamModalOpen, setIsCreateTeamModalOpen] = useState(false);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState<Task | undefined>(undefined);
  const [defaultStatus, setDefaultStatus] = useState<'todo' | 'in-progress' | 'done'>('todo');
  const [joinTeamCode, setJoinTeamCode] = useState('');
  const [toast, setToast] = useState<{ message: string } | null>(null);

  // Filter tasks by status
  const todoTasks = tasks.filter((task) => task.status === 'todo');
  const inProgressTasks = tasks.filter((task) => task.status === 'in-progress');
  const doneTasks = tasks.filter((task) => task.status === 'done');

  // Team handlers
  const handleCreateTeam = (teamName: string) => {
    const newTeam = {
      id: uuidv4(),
      name: teamName,
      memberCount: 1,
    };
    setTeams([...teams, newTeam]);
    setActiveTeam(newTeam);
    showToast(`Team "${teamName}" created successfully`);
  };

  const handleJoinTeam = (e: React.FormEvent) => {
    e.preventDefault();
    if (joinTeamCode.trim()) {
      // This would connect to a real API in a production app
      showToast(`Joined team with code: ${joinTeamCode}`);
      setJoinTeamCode('');
    }
  };

  const handleLeaveTeam = () => {
    if (!activeTeam) return;
    
    const remaining = teams.filter((team) => team.id !== activeTeam.id);
    setTeams(remaining);
    setActiveTeam(remaining.length > 0 ? remaining[0] : null);
    showToast(`You left team "${activeTeam.name}"`);
  };

  // Task handlers
  const handleAddTask = (status: 'todo' | 'in-progress' | 'done') => {
    setCurrentTask(undefined);
    setDefaultStatus(status);
    setIsTaskModalOpen(true);
  };

  const handleEditTask = (taskId: string) => {
    const task = tasks.find((t) => t.id === taskId);
    if (task) {
      setCurrentTask(task);
      setIsTaskModalOpen(true);
    }
  };

  const handleDeleteTask = (taskId: string) => {
    const taskToDelete = tasks.find((t) => t.id === taskId);
    setTasks(tasks.filter((task) => task.id !== taskId));
    if (taskToDelete) {
      showToast(`Task "${taskToDelete.title}" deleted`);
    }
  };

  const handleSaveTask = (taskData: Partial<Task> & { title: string; description: string; status: 'todo' | 'in-progress' | 'done' }) => {
    if (currentTask) {
      // Edit existing task
      setTasks(
        tasks.map((task) =>
          task.id === currentTask.id
            ? { ...task, ...taskData }
            : task
        )
      );
      showToast(`Task "${taskData.title}" updated`);
    } else {
      // Add new task
      const newTask = {
        id: uuidv4(),
        title: taskData.title,
        description: taskData.description,
        status: taskData.status,
        creator: 'You', // In a real app, this would be the current user
      };
      setTasks([...tasks, newTask]);
      showToast(`Task "${newTask.title}" created`);
    }
  };

  // Toast handler
  const showToast = (message: string) => {
    setToast({ message });
  };

  // Sidebar component
  const Sidebar = () => (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b border-sidebar-border">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">TaskSync</h1>
          <button className="p-1 rounded-full hover:bg-sidebar-accent" aria-label="User profile">
            <User size={20} />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="mb-6">
          <h2 className="text-sm font-medium text-muted-foreground mb-2">YOUR TEAMS</h2>
          <div className="space-y-2">
            {teams.map((team) => (
              <TeamCard
                key={team.id}
                name={team.name}
                memberCount={team.memberCount}
                onClick={() => setActiveTeam(team)}
              />
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <Button
            className="w-full bg-primary hover:bg-primary/90 text-white"
            onClick={() => setIsCreateTeamModalOpen(true)}
          >
            <Plus size={16} className="mr-1" /> Create Team
          </Button>

          <form onSubmit={handleJoinTeam} className="space-y-2">
            <Input
              placeholder="Enter team code"
              value={joinTeamCode}
              onChange={(e) => setJoinTeamCode(e.target.value)}
              className="w-full"
            />
            <Button type="submit" className="w-full" variant="outline">
              Join Team
            </Button>
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <DashboardLayout sidebar={<Sidebar />}>
      <div className="p-6 max-w-7xl mx-auto">
        {activeTeam ? (
          <>
            <div className="mb-6 flex justify-between items-center">
              <h1 className="text-2xl font-semibold text-foreground">{activeTeam.name}</h1>
              <Button
                variant="outline"
                className="text-destructive hover:text-destructive border-destructive hover:bg-destructive/10"
                onClick={handleLeaveTeam}
              >
                <LogOut size={16} className="mr-1" /> Leave Team
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <TaskColumn
                title="To-Do"
                tasks={todoTasks}
                status="todo"
                onAddTask={handleAddTask}
                onEditTask={handleEditTask}
                onDeleteTask={handleDeleteTask}
              />
              
              <TaskColumn
                title="In Progress"
                tasks={inProgressTasks}
                status="in-progress"
                onAddTask={handleAddTask}
                onEditTask={handleEditTask}
                onDeleteTask={handleDeleteTask}
              />
              
              <TaskColumn
                title="Done"
                tasks={doneTasks}
                status="done"
                onAddTask={handleAddTask}
                onEditTask={handleEditTask}
                onDeleteTask={handleDeleteTask}
              />
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-[80vh]">
            <h2 className="text-xl font-medium text-center mb-4">
              You don't have any teams yet
            </h2>
            <Button
              className="bg-primary hover:bg-primary/90 text-white"
              onClick={() => setIsCreateTeamModalOpen(true)}
            >
              <Plus size={16} className="mr-1" /> Create Your First Team
            </Button>
          </div>
        )}

        {/* Modals */}
        <CreateTeamModal
          isOpen={isCreateTeamModalOpen}
          onClose={() => setIsCreateTeamModalOpen(false)}
          onCreateTeam={handleCreateTeam}
        />

        <TaskModal
          isOpen={isTaskModalOpen}
          onClose={() => setIsTaskModalOpen(false)}
          onSave={handleSaveTask}
          task={currentTask}
          defaultStatus={defaultStatus}
        />

        {/* Toast Notification */}
        {toast && (
          <TaskToast
            message={toast.message}
            onClose={() => setToast(null)}
          />
        )}
      </div>
    </DashboardLayout>
  );
};

export default Index;
