import React from 'react';
import { useAuth, useUser } from '@clerk/clerk-react';

function Home() {
  const { user } = useUser();
  const { getToken } = useAuth();

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
  };

  return (
    <div>
      <h1>Welcome, {user.firstName}!</h1>
      <button onClick={callBackend}>Call Protected API</button>
    </div>
  );
}

export default Home;
