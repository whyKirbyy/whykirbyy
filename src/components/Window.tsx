import React, { useState } from 'react';
import "../style/components/Window.scss";

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
      <div className={"Frame2"}>
        <div className="header2">
          <button className="maximize2" onClick={handleMinimize}>▢</button>
        </div>
        <div className="body2">
          "text"
        </div>
      </div>
      )}
    </div>
  );
};

export default Window;
