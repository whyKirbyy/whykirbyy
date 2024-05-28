//import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../style/CVPage.scss";
import Window from"../components/Window"
import StarBackground  from "../components/StarBackground.tsx";


const CVPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>This is the CV Page</h1>
      <Window />
      <button onClick={() => navigate('/')}>Go Back to Home</button>
      <StarBackground />
    </div>
  );
};

export default CVPage;
