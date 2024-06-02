import React from 'react';
import "../style/components/SelectionWheelBackground.scss";

const SelectionWheelBackground: React.FC = () => {
  return (
    <div className="SelectionWheelBackground">
      <div className="half-circle2"></div>
      <div className="piece-of-cake-container">
        <svg className="piece-of-cake" viewBox="0 0 800 800">
          <path d="m10 100 200-60a60 160 0 0 1 0 120Z" />
        </svg>
      </div>
      <div className="half-circle"></div>
    </div>
  );
};

export default SelectionWheelBackground;
