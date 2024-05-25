import { useState, useEffect } from 'react';
import MainTitel from './components/MainTitel';
import StarBackground from './components/StarBackground';
import talkingGif from './assets/whykirbyy-talking-animation-bubble.gif';
import bunny from './assets/whykirbyy-bunny.png';
import sittingBunny from './assets/sitting.png';
import TextScroll from './components/TextScroll';
import './App.css';

function App() {
  const [showBunny, setShowBunny] = useState(true);
  const [showGif, setShowGif] = useState(false);
  const [showBunnySitting, setShowBunnySitting] = useState(false);
  const messages = [
    "Hi there!",
    "",
    "Welcome to the site",
    "of whyKirbyy!",
    "here you can",
    "find all the things",
    "he worked on",
    "and is working on",
    "Enjoy!"
  ];

  useEffect(() => {
    const gifImage = new Image();
    gifImage.src = talkingGif;

    const showGifTimer = setTimeout(() => {
      setShowGif(true);
      setShowBunny(false);
    }, 2000);

    const showGifBunnyTimer = setTimeout(() => {
      setShowGif(false);
      setShowBunny(true);
    }, 10400);

    const showSittingBunnyTimer = setTimeout(() => {
      setShowBunny(false);
      setShowBunnySitting(true);
    }, 11500);

    return () => {
      clearTimeout(showGifTimer);
      clearTimeout(showGifBunnyTimer);
      clearTimeout(showSittingBunnyTimer);
    };
  }, []);

  return (
    <div className="page-main-container">
      <div className="titel-page-main-container">
        <div className="titel-page-main">
          <MainTitel text="whyKirbyy"/>
        </div>
      </div>
      <div className="text-container">
        {showGif && <TextScroll messages={messages}/>}
      </div>
      {showBunny && <img className="bunny" src={bunny} alt="whyKirbyy"/>}
      {showGif && <img className="gif" src={talkingGif} alt="whyKirbyy talking"/>}
      {showBunnySitting && <img className="sitting-bunny" src={sittingBunny} alt="whyKirbyy sitting"/>}
      <StarBackground/>
    </div>
  );
}

export default App;
