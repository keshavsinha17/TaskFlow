import API from './api';

export const createTeam = async (teamName: string) => {
  try {
    const { data } = await API.post('/api/register-team', { name: teamName });
    return data;
  } catch (error) {
    console.error('Error creating team:', error);
    throw error;
  }
};

export const joinTeam = async (teamCode: string) => {
  try {
    const { data } = await API.post('/api/join-team', { code: teamCode });
    return data;
  } catch (error) {
    console.error('Error joining team:', error);
    throw error;
  }
};

export const createTask = async (taskData: {
  title: string;
  description: string;
  priority: string;
  dueDate: string;
  status: string;
  team: string;
}) => {
  try {
    const { data } = await API.post('/api/create-task', taskData);
    return data;
  } catch (error) {
    console.error('Error creating task:', error);
    throw error;
  }
};

export const joinTask = async (taskId: string) => {
  try {
    const { data } = await API.post('/api/join-task', { taskId });
    return data;
  } catch (error) {
    console.error('Error joining task:', error);
    throw error;
  }
};
