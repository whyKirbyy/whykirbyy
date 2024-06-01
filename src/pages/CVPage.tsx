import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../style/pages/CVPage.scss";
import Window from "../components/Window";
import StarBackground from "../components/StarBackground";
import bunnyDesk from "../assets/bunnyDesk.png";
import SelectionWheel from "../components/SelectionWheel.tsx";

const CVPage: React.FC = () => {
  const navigate = useNavigate();
  const [cvContent, setCvContent] = useState<string>('');
  const options = ['Selection 11', 'Selection 12', 'Selection 13', 'Selection 14', 'Selection 15', "Selection 16"];

  const navigateToHome = () => {
    navigate('/');
  };


  useEffect(() => {
    fetch("/src/components/CV.html")
      .then(response => response.text())
      .then(data => setCvContent(data));
  }, []);

  return (
    <div className="cv-page-container">
      <img className="bunnyDesk" src={bunnyDesk} alt="sitting bunny" />
      <SelectionWheel options={options} startAngle={90} />
      <div className={"cvwindow-page"}>
        <Window title="CV of whyKirbyy">
          <div dangerouslySetInnerHTML={{ __html: cvContent }} />
        </Window>
      </div>
      <button onClick={navigateToHome}>Go Back to Home</button>
      <StarBackground />
    </div>
  );
};

export default CVPage;
