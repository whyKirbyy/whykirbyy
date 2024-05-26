import { useState, useEffect } from 'react';
import "../style/TextScroll.scss";

const TextScroll = ({ messages, interval = 300, typingSpeed = 50, textColor = 'black', textSize = '1.25rem' }) => {
  const [currentMessage, setCurrentMessage] = useState('');
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    if (messageIndex < messages.length) {
      const showMessage = async () => {
        const message = messages[messageIndex];
        for (let i = 0; i <= message.length; i++) {
          setCurrentMessage(message.slice(0, i));
          await new Promise((resolve) => setTimeout(resolve, typingSpeed));
        }
        await new Promise((resolve) => setTimeout(resolve, interval));
        setMessageIndex((prevIndex) => prevIndex + 1);
      };

      showMessage();
    }
  }, [messageIndex, messages, typingSpeed, interval]);

  return (
    <div className="typewriter-container">
      <div
        className="typewriter-message"
        style={{ color: textColor, fontSize: textSize }}
      >
        {currentMessage}
      </div>
    </div>
  );
};

export default TextScroll;
