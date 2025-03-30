import API from './api';

// Team related API calls
export const fetchTeams = async (token: string) => {
  try {
    const { data } = await API.get('/api/teams', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return data;
  } catch (error) {
    console.error('Error fetching teams:', error);
    throw error;
  }
};

export const createTeam = async (teamName: string, token: string) => {
  try {
    const { data } = await API.post('/api/teams/register-team', 
      { name: teamName }, 
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    return data;
  } catch (error) {
    console.error('Error creating team:', error);
    throw error;
  }
};

export const joinTeam = async (teamCode: string, token: string) => {
  try {
    const { data } = await API.post('/api/teams/join-team', 
      { code: teamCode }, 
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    return data;
  } catch (error) {
    console.error('Error joining team:', error);
    throw error;
  }
};

export const leaveTeam = async (teamId: string, token: string) => {
  try {
    const { data } = await API.post(`/api/teams/${teamId}/leave`, 
      {}, 
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    return data;
  } catch (error) {
    console.error('Error leaving team:', error);
    throw error;
  }
};

// Task related API calls
export const fetchTasks = async (teamId: string, token: string) => {
  try {
    const { data } = await API.get(`/api/tasks/team/${teamId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};

export const createTask = async (
  taskData: {
    title: string;
    description: string;
    priority: string;
    dueDate: string;
    status: string;
    teamId: string;
    assignedTo?: string;
  }, 
  token: string
) => {
  try {
    const { data } = await API.post('/api/tasks/create-task', 
      taskData, 
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    return data;
  } catch (error) {
    console.error('Error creating task:', error);
    throw error;
  }
};

export const updateTask = async (
  taskId: string, 
  taskData: {
    title?: string;
    description?: string;
    priority?: string;
    dueDate?: string;
    status?: string;
    assignedTo?: string;
  },
  token: string
) => {
  try {
    const { data } = await API.put(`/api/tasks/${taskId}`, 
      taskData, 
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    return data;
  } catch (error) {
    console.error('Error updating task:', error);
    throw error;
  }
};

export const deleteTask = async (taskId: string, token: string) => {
  try {
    const { data } = await API.delete(`/api/tasks/${taskId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return data;
  } catch (error) {
    console.error('Error deleting task:', error);
    throw error;
  }
};
