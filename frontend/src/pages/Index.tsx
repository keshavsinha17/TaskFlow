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
import { useToast } from '@/components/ui/use-toast';
import { useAuth, useUser } from '@clerk/clerk-react';
import { fetchTeams, joinTeam, fetchTasks, createTask, updateTask, deleteTask } from '@/services/taskService';

// Define interfaces for our data types
interface Team {
  _id: string;
  name: string;
  code: string;
  members: string[];
}

interface Task {
  _id: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
  status: 'todo' | 'in-progress' | 'done';
  teamId: string;
  createdBy: string;
  createdAt: string;
  updatedAt?: string;
  updatedBy?: string;
  assignedTo?: string;
}

const Index = () => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [activeTeam, setActiveTeam] = useState<Team | null>(null);
  const [isCreateTeamModalOpen, setIsCreateTeamModalOpen] = useState(false);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | undefined>(undefined);
  const [defaultStatus, setDefaultStatus] = useState<'todo' | 'in-progress' | 'done'>('todo');
  const [joinTeamCode, setJoinTeamCode] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isJoiningTeam, setIsJoiningTeam] = useState(false);
  
  const { toast } = useToast();
  const { getToken } = useAuth();
  const { user } = useUser();

  // Fetch teams on component mount
  useEffect(() => {
    const loadTeams = async () => {
      try {
        setIsLoading(true);
        const token = await getToken();
        if (!token) return;
        
        const teamsData = await fetchTeams(token);
        setTeams(teamsData);
        
        // Set active team to the first team if available
        if (teamsData.length > 0 && !activeTeam) {
          setActiveTeam(teamsData[0]);
        }
      } catch (error) {
        console.error('Error loading teams:', error);
        toast({
          title: 'Error',
          description: 'Failed to load teams. Please try again.',
          variant: 'destructive',
        });
      } finally {
        setIsLoading(false);
      }
    };
    
    loadTeams();
  }, [getToken]);

  // Fetch tasks when active team changes
  useEffect(() => {
    const loadTasks = async () => {
      if (!activeTeam) return;
      
      try {
        setIsLoading(true);
        const token = await getToken();
        if (!token) return;
        
        const tasksData = await fetchTasks(activeTeam._id, token);
        setTasks(tasksData);
      } catch (error) {
        console.error('Error loading tasks:', error);
        toast({
          title: 'Error',
          description: 'Failed to load tasks. Please try again.',
          variant: 'destructive',
        });
      } finally {
        setIsLoading(false);
      }
    };
    
    loadTasks();
  }, [activeTeam, getToken]);

  // Filter tasks by status
  const todoTasks = tasks.filter((task) => task.status === 'todo');
  const inProgressTasks = tasks.filter((task) => task.status === 'in-progress');
  const doneTasks = tasks.filter((task) => task.status === 'done');

  // Team handlers
  const handleCreateTeam = async (teamName: string) => {
    // The actual API call is handled in the CreateTeamModal component
    // This function is called after a successful team creation
    try {
      const token = await getToken();
      if (!token) return;
      
      // Refresh the teams list
      const teamsData = await fetchTeams(token);
      setTeams(teamsData);
      
      // Set the newly created team as active
      const newTeam = teamsData.find(t => t.name === teamName);
      if (newTeam) {
        setActiveTeam(newTeam);
      }
      
      toast({
        title: 'Success',
        description: `Team "${teamName}" created successfully`,
      });
    } catch (error) {
      console.error('Error refreshing teams:', error);
    }
  };

  const handleJoinTeam = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!joinTeamCode.trim()) return;
    
    setIsJoiningTeam(true);
    try {
      const token = await getToken();
      if (!token) return;
      
      // Call API to join team
      const joinedTeam = await joinTeam(joinTeamCode, token);
      
      // Refresh teams list
      const teamsData = await fetchTeams(token);
      setTeams(teamsData);
      
      // Set the joined team as active
      setActiveTeam(joinedTeam);
      
      // Reset form and show success message
      setJoinTeamCode('');
      toast({
        title: 'Success',
        description: `Joined team "${joinedTeam.name}" successfully`,
      });
    } catch (error) {
      console.error('Error joining team:', error);
      toast({
        title: 'Error',
        description: 'Failed to join team. Please check the code and try again.',
        variant: 'destructive',
      });
    } finally {
      setIsJoiningTeam(false);
    }
  };

  // Task handlers
  const handleAddTask = (status: 'todo' | 'in-progress' | 'done') => {
    setEditingTask(undefined);
    setDefaultStatus(status);
    setIsTaskModalOpen(true);
  };

  const handleEditTask = (taskId: string) => {
    const task = tasks.find((t) => t._id === taskId);
    if (task) {
      setEditingTask(task);
      setIsTaskModalOpen(true);
    }
  };

  const handleDeleteTask = async (taskId: string) => {
    if (!activeTeam) return;
    
    try {
      const token = await getToken();
      if (!token) return;
      
      // Call API to delete task
      await deleteTask(taskId, token);
      
      // Update local state
      setTasks(tasks.filter(task => task._id !== taskId));
      
      toast({
        title: 'Success',
        description: 'Task deleted successfully',
      });
    } catch (error) {
      console.error('Error deleting task:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete task. Please try again.',
        variant: 'destructive',
      });
    }
  };

  const handleSaveTask = async (taskData: Partial<Task>) => {
    try {
      const token = await getToken();
      if (!token) {
        throw new Error('No authentication token available');
      }
      
      if (editingTask) {
        // Update existing task
        const updatedTask = await updateTask(editingTask._id, taskData, token);
        
        // Update local state
        setTasks(tasks.map(task => 
          task._id === updatedTask._id ? updatedTask : task
        ));
        
        toast({
          title: 'Success',
          description: `Task "${taskData.title}" updated successfully`,
        });
      } else {
        // Create new task
        const newTaskData: {
          title: string;
          description: string;
          priority: string;
          dueDate: string;
          status: string;
          teamId: string;
          assignedTo?: string;
        } = {
          ...taskData as any,
          teamId: activeTeam!._id,
          assignedTo: user?.id
        };
        
        const newTask = await createTask(newTaskData, token);
        
        // Update local state
        setTasks([...tasks, newTask]);
        
        toast({
          title: 'Success',
          description: `Task "${taskData.title}" created successfully`,
        });
      }
    } catch (error) {
      console.error('Error saving task:', error);
      toast({
        title: 'Error',
        description: 'Failed to save task. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsTaskModalOpen(false);
      setEditingTask(null);
    }
  };

  const handleTaskStatusChange = async (taskId: string, newStatus: 'todo' | 'in-progress' | 'done') => {
    try {
      const token = await getToken();
      if (!token) {
        throw new Error('No authentication token available');
      }
      
      const taskToUpdate = tasks.find(task => task._id === taskId);
      if (!taskToUpdate) return;
      
      const updatedTask = await updateTask(taskId, { status: newStatus }, token);
      
      // Update local state
      setTasks(tasks.map(task => 
        task._id === updatedTask._id ? updatedTask : task
      ));
      
      toast({
        title: 'Success',
        description: `Task status updated to ${newStatus}`,
      });
    } catch (error) {
      console.error('Error updating task status:', error);
      toast({
        title: 'Error',
        description: 'Failed to update task status. Please try again.',
        variant: 'destructive',
      });
    }
  };

  // Sidebar component
  const Sidebar = () => (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b border-sidebar-border">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">TaskFlow</h1>
          <div className="flex items-center space-x-2">
            {user && (
              <span className="text-sm text-muted-foreground">
                {user.firstName}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="mb-6">
          <h2 className="text-sm font-medium text-muted-foreground mb-2">YOUR TEAMS</h2>
          <div className="space-y-2">
            {teams.map((team) => (
              <TeamCard
                key={team._id}
                name={team.name}
                memberCount={team.members.length}
                isActive={activeTeam?._id === team._id}
                onClick={() => setActiveTeam(team)}
              />
            ))}
          </div>
          <Button
            onClick={() => setIsCreateTeamModalOpen(true)}
            className="w-full mt-2 bg-sidebar-accent hover:bg-sidebar-accent/80"
            variant="ghost"
          >
            <Plus size={16} className="mr-2" />
            Create Team
          </Button>
        </div>

        <div className="mb-6">
          <h2 className="text-sm font-medium text-muted-foreground mb-2">JOIN TEAM</h2>
          <form onSubmit={handleJoinTeam} className="flex flex-col space-y-2">
            <Input
              placeholder="Enter team code"
              value={joinTeamCode}
              onChange={(e) => setJoinTeamCode(e.target.value)}
              disabled={isJoiningTeam}
            />
            <Button 
              type="submit" 
              className="w-full" 
              disabled={!joinTeamCode.trim() || isJoiningTeam}
            >
              {isJoiningTeam ? 'Joining...' : 'Join'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <DashboardLayout sidebar={<Sidebar />}>
      {activeTeam ? (
        <>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">{activeTeam.name}</h1>
            <div className="flex items-center space-x-2">
              <div className="text-sm text-muted-foreground">
                Team Code: <span className="font-mono">{activeTeam.code}</span>
              </div>
              <Button variant="outline" size="sm" onClick={() => navigator.clipboard.writeText(activeTeam.code)}>
                Copy
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <TaskColumn
              title="To Do"
              tasks={todoTasks}
              onTaskClick={handleEditTask}
              onTaskDelete={handleDeleteTask}
              onStatusChange={handleTaskStatusChange}
              onAddTask={() => {
                setEditingTask(null);
                setIsTaskModalOpen(true);
                setDefaultStatus('todo');
              }}
            />
            <TaskColumn
              title="In Progress"
              tasks={inProgressTasks}
              onTaskClick={handleEditTask}
              onTaskDelete={handleDeleteTask}
              onStatusChange={handleTaskStatusChange}
              onAddTask={() => {
                setEditingTask(null);
                setIsTaskModalOpen(true);
                setDefaultStatus('in-progress');
              }}
            />
            <TaskColumn
              title="Done"
              tasks={doneTasks}
              onTaskClick={handleEditTask}
              onTaskDelete={handleDeleteTask}
              onStatusChange={handleTaskStatusChange}
              onAddTask={() => {
                setEditingTask(null);
                setIsTaskModalOpen(true);
                setDefaultStatus('done');
              }}
            />
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-full">
          <h2 className="text-xl font-semibold mb-4">No Team Selected</h2>
          <p className="text-muted-foreground mb-6 text-center max-w-md">
            Create a new team or join an existing team to get started with task management.
          </p>
          <div className="flex space-x-4">
            <Button onClick={() => setIsCreateTeamModalOpen(true)}>
              <Plus size={16} className="mr-2" />
              Create Team
            </Button>
          </div>
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
        task={editingTask}
        defaultStatus={defaultStatus}
      />
    </DashboardLayout>
  );
};

export default Index;
