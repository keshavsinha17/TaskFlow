import React, { useState, useEffect } from 'react';
import { useAuth, useUser } from '@clerk/clerk-react';

function Home() {
  const { user } = useUser();
  const { getToken } = useAuth();
  const [teamName, setTeamName] = useState('');
  const [teamCode, setTeamCode] = useState('');
  const callBackend = async () => {
    const token = await getToken();

    console.log(token);
    const response = await fetch('http://localhost:3000/protected', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    console.log(data);
    console.log("Data saved to backend");
    
  };
useEffect(() => {
  callBackend();
}, []);

const createTeam = async () => {
    const token = await getToken();
    const response = await fetch('http://localhost:3000/api/register-team', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Ensure this header is set
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ name: teamName}),
    });
    const data = await response.json();
    console.log(data);
    
  };

  const joinTeam = async () => {
    const token = await getToken();
    const response = await fetch('http://localhost:3000/api/join-team', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Ensure this header is set
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ code: teamCode }),
    });
    const data = await response.json();
    console.log(data);
  };

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskPriority, setTaskPriority] = useState('');
  const [taskDueDate, setTaskDueDate] = useState('');
  const [taskStatus, setTaskStatus] = useState('');
  const [taskTeam, setTaskTeam] = useState('');
  const [taskId, setTaskId] = useState('');

  const createTask = async () => {
    const token = await getToken();
    const response = await fetch('http://localhost:3000/api/create-task', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Ensure this header is set
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ title: taskTitle, description: taskDescription, priority: taskPriority, dueDate: taskDueDate, status: taskStatus, team: taskTeam }),
    });
    const data = await response.json();
    console.log(data);
  };

  const joinTask = async () => {
    const token = await getToken();
    const response = await fetch('http://localhost:3000/api/join-task', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Ensure this header is set
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ taskId }),
    });
    const data = await response.json();
    console.log(data);
  };
  return (
    <div>
      <h1>Welcome, {user.firstName}!</h1>
      <button onClick={callBackend}>Call Protected API</button>

      <input onChange={(e) => setTeamName(e.target.value)} type="text" placeholder="Team Name" />
      <button onClick={createTeam}>Create Team</button>
      <input onChange={(e) => setTeamCode(e.target.value)} type="text" placeholder="Team Code" />
      <button onClick={joinTeam}>Join Team</button>

      <input onChange={(e) => setTaskTitle(e.target.value)} type="text" placeholder="Task Title" />
      <input onChange={(e) => setTaskDescription(e.target.value)} type="text" placeholder="Task Description" />
      <input onChange={(e) => setTaskPriority(e.target.value)} type="text" placeholder="Task Priority" />
      <input onChange={(e) => setTaskDueDate(e.target.value)} type="date" placeholder="Task Due Date" />
      <input onChange={(e) => setTaskStatus(e.target.value)} type="text" placeholder="Task Status" />
      <input onChange={(e) => setTaskTeam(e.target.value)} type="text" placeholder="Task Team" />
      <button onClick={createTask}>Create Task</button>

      <input onChange={(e) => setTaskId(e.target.value)} type="text" placeholder="Task ID" />
      <button onClick={joinTask}>Join Task</button>
    </div>
  );
}

export default Home;
// import { useAuth } from '@clerk/clerk-react';

// const { getToken } = useAuth();

// const registerUser = async () => {
//   const token = await getToken();
//   await fetch('http://localhost:3000/api/register-user', {
//     method: 'POST',
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
// };

// useEffect(() => {
//   registerUser(); // Runs once when user logs in
// }, []);
