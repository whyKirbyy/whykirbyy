//import React from 'react';
import { useNavigate } from 'react-router-dom';

const CVPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>This is the CV Page</h1>
      <button onClick={() => navigate('/')}>Go Back to Home</button>
    </div>
  );
};

export default CVPage;
