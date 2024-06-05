import React, { useState } from 'react';
import "../style/components/Menu.scss";

const Menu: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="menu-container">
      <div className="menu">
        <button
          className={`menu__item ${activeIndex === 0 ? 'active' : ''}`}
          style={{ '--bgColorItem': '#ff8c00' } as React.CSSProperties}
          onClick={() => setActiveIndex(0)}
        >
          <svg className="icon" viewBox="0 0 24 24">
            <path d="M3.8,6.6h16.4" />
            <path d="M20.2,12.1H3.8" />
            <path d="M3.8,17.5h16.4" />
          </svg>
        </button>
        <div className="menu__border"></div>
      </div>
      <div className="svg-container">
        <svg viewBox="0 0 202.9 45.5">
          <clipPath id="menu" clipPathUnits="objectBoundingBox" transform="scale(0.0049285362247413 0.021978021978022)">
            <path d="M6.7,45.5c5.7,0.1,14.1-0.4,23.3-4c5.7-2.3,9.9-5,18.1-10.5c10.7-7.1,11.8-9.2,20.6-14.3c5-2.9,9.2-5.2,15.2-7
              c7.1-2.1,13.3-2.3,17.6-2.1c4.2-0.2,10.5,0.1,17.6,2.1c6.1,1.8,10.2,4.1,15.2,7c8.8,5,9.9,7.1,20.6,14.3c8.3,5.5,12.4,8.2,18.1,10.5
              c9.2,3.6,17.6,4.2,23.3,4H6.7z" />
          </clipPath>
        </svg>
      </div>
    </div>
  );
};

export default Menu;
