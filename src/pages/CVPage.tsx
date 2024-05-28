import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../style/CVPage.scss";
import Window from "../components/Window";
import StarBackground from "../components/StarBackground";

const CVPage: React.FC = () => {
  const navigate = useNavigate();
  const [cvContent, setCvContent] = useState<string>('');

  useEffect(() => {
    fetch('/src/components/CV.html')
      .then(response => response.text())
      .then(data => setCvContent(data));
  }, []);

  return (
    <div className={"cv-page-container"}>
      <Window title="CV of whyKirbyy">
        <div dangerouslySetInnerHTML={{ __html: cvContent }} />
      </Window>
      <button onClick={() => navigate('/')}>Go Back to Home</button>
      <StarBackground />
    </div>
  );
};

export default CVPage;
