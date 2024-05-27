import React from 'react';
import "../style/Window.scss";

interface WindowProps {
  title: string;
  text: string;
}

const Window: React.FC<WindowProps> = ({ title, text }) => {
  return (
    <div className={"Frame"}>
      <div className={"header"}>
        <h1>{title}</h1>
        <button className={"minimize"}>―</button>
        <button className={"close"}>X</button>
        <button className={"maximize"}>□</button>
      </div>
      <div className={"body"}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Window;
