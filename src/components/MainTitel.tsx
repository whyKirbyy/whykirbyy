import React from 'react';
import "./../style/MainTitel.scss"

interface MainTitelProps {
  text: string;
  size: number;
}

const MainTitel: React.FC<MainTitelProps> = ({ text, size }) => {
  return (
    <div className="container" style={{ fontSize: `${size}rem` }}>
      <div className="titel2">
        {text}
      </div>
      <div className="titel" style={{ fontSize: `${size}rem` }}>
        {text}
      </div>
    </div>
  );
};

export default MainTitel;
