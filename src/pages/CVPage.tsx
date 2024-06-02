import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import "../style/pages/CVPage.scss";
import Window from "../components/Window";
import StarBackground from "../components/StarBackground";
import bunnyDesk from "../assets/bunnyDesk.png";
import SelectionWheel from "../components/SelectionWheel.tsx";

const CVPage: React.FC = () => {
  const navigate = useNavigate();
  const [cvContent, setCvContent] = useState<string>('');
  const options = ["Other Skills", "Programming", "Job Experience", "Education", "Short CV", "whyKirbyy"];
  const wheelRef = useRef(null);

  const rotateWheel = () => {
    if (wheelRef.current) {
      wheelRef.current.setRotation(90); // Rotate to 90 degrees
    }
  };

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
      <div className={"cvwindow-page"}>
        <Window title="CV of whyKirbyy">
          <div dangerouslySetInnerHTML={{ __html: cvContent }} />
        </Window>
      </div>
      <button onClick={navigateToHome}>Go Back to Home</button>
      <SelectionWheel startAngle={90} ref={wheelRef} options={options} />
      <StarBackground />
    </div>
  );
};

export default CVPage;
