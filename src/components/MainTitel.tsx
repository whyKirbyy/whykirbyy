import React from 'react';
import "./../style/MainTitel.scss"

interface MainTitelProps {
  text: string;
  size: number;
}

const MainTitel: React.FC<MainTitelProps> = ({ text, size }) => {
  return (
    <div className={"titel"} style={{ fontSize: `${size}rem` }}>
      {text}
    </div>
  );
};

export default MainTitel;
