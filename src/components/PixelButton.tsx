import React from 'react';
import '../style/PixelButton.scss';

interface PixelButtonProps {
  label: string;
  onClick: () => void;
}

const PixelButton: React.FC<PixelButtonProps> = ({ label, onClick }) => {
  return (
    <button className="pixel-button" onClick={onClick}>
      <div className="left"></div>
      <div className="right"></div>
      <div className="top"></div>
      <div className="bottom"></div>
      <div className="light top"></div>
      <div className="light left"></div>
      <div className="shadow right"></div>
      <div className="shadow bottom"></div>
      {label}
    </button>
  );
};

export default PixelButton;
