import React from 'react';
import "./../style/MainTitel.scss"

interface MainTitelProps {
  text: string;
}

const MainTitel: React.FC<MainTitelProps> = ({ text}) => {
  return (
    <div className="container">
      <div className="titel">
        {text}
      </div>
    </div>
  );
};

export default MainTitel;
