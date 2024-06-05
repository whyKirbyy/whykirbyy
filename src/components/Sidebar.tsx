import React, { useState, useEffect, useRef } from 'react';
import "../style/components/Sidebar.scss";

const Sidebar: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="sidebar">
      <div
        className={`sidebar__item ${activeIndex === 0 ? 'active' : ''}`}
        onClick={() => handleClick(0)}
      >
        Item 1
      </div>
      <div
        className={`sidebar__item ${activeIndex === 1 ? 'active' : ''}`}
        onClick={() => handleClick(1)}
      >
        Item 2
      </div>
    </div>
  );
};

export default Sidebar;
