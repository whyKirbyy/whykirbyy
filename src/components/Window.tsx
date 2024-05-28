import React from 'react';
import "../style/Window.scss";

interface WindowProps {
  title?: string;
  text?: React.ReactNode;
  children?: React.ReactNode;
}

const Window: React.FC<WindowProps> = ({ title, text, children }) => {
  return (
    <div className="Frame">
      <div className="header">
        {title && <h1>{title}</h1>}
        <button className="minimize">―</button>
        <button className="close">X</button>
        <button className="maximize">▢</button>
      </div>
      <div className="body">
        {text && <p>{text}</p>}
        {children}
      </div>
    </div>
  );
};

export default Window;
