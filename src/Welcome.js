import React from 'react';
import useFetch from './useFetch';

const Welcome = () => {
  const { data, error } = useFetch('http://localhost:8000/users');

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  return (
    <div className="welcome-container">
      <h1>Welcome</h1>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default Welcome;
