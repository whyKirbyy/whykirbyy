import React, { useState } from 'react';
import "../style/components/Window.scss";
import cv from "../assets/cv.png"

interface WindowProps {
  title?: string;
  text?: React.ReactNode;
  children?: React.ReactNode;
}

const Window: React.FC<WindowProps> = ({ title, text, children }) => {
  const [isMinimized, setIsMinimized] = useState(false);

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div>
      {!isMinimized && (
      <div className={"Frame"}>
        <div className="header">
          {title && <h1>{title}</h1>}
          <button className="minimize" onClick={handleMinimize}>―</button>
          <button className="close">X</button>
          <button className="maximize">▢</button>
        </div>
        <div className="body">
          {text && <p>{text}</p>}
          {children}
        </div>
      </div>
      )}
      {isMinimized && (
      <div className={"Frame2 float-shadow minimized-position"} onClick={handleMinimize}>
        <div className="header2">CV of whyKirbyy</div>
        <div className="body2">
          <div className={"mini-cv"}>
            {text && <p>{text}</p>}
            {children}
          </div>
          {/*<img src={cv} className={"mini-cv"} alt="mini-cv"/>*/}
        </div>
      </div>
      )}
    </div>
  );
};

export default Window;
