import { useState, useEffect, useRef } from 'react';
import {useNavigate} from 'react-router-dom';
import MainTitel from './components/MainTitel';
import StarBackground from './components/StarBackground';
import talkingGif from './assets/whykirbyy-talking-animation-bubble.gif';
import ragingGif from './assets/bloody_horror.gif';
import bunny from './assets/whykirbyy-bunny.png';
import sittingBunny from './assets/sitting.png';
import skipedBunny from './assets/skip-bunny.png';
import TextScroll from './components/TextScroll';
import PixelButton from './components/PixelButton';
//import ArrowButton from './components/ArrowButton.tsx';
import './App.css';

function App() {
  const [showBunny, setShowBunny] = useState(true);
  const [showGif, setShowGif] = useState(false);
  const [showBunnySitting, setShowBunnySitting] = useState(false);
  const [angryBunny, setAngryBunny] = useState(false);
  const [skipBunny, setSkipBunny] = useState(false);
  const [didIntro, setDidIntro] = useState(false);
  const [showRagingGif, setShowRagingGif] = useState(false);
  const navigate = useNavigate();
  const timers = useRef([]);

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

  const messagesAngry = [
    "NO YOU SHUT UP!!",
    "",
    "I WELCOME YOU TO",
    "THIS SITE",
    "AND THIS IS HOW",
    "YOU TREAT ME?",
    "SHAME ON YOU!"
  ];

  const clearAllTimers = () => {
    timers.current.forEach(timer => clearTimeout(timer));
    timers.current = [];
  };

  const handleSkip = () => {
    clearAllTimers();
    setShowBunny(false);
    setShowGif(false);
    setShowBunnySitting(false);
    setAngryBunny(false);
    setSkipBunny(true);
    setDidIntro(true);
  };

  const handleShutUp = () => {
    clearAllTimers();
    setShowBunny(false);
    setShowGif(false);
    setShowRagingGif(true);
    setShowBunnySitting(false);
    setAngryBunny(true);

    const resetAngryBunnyTimer = setTimeout(() => {
      setAngryBunny(false);
      setShowRagingGif(false);
      setSkipBunny(true);
      setDidIntro(true);
    }, 5500);

    timers.current.push(resetAngryBunnyTimer);
  };

  useEffect(() => {
    const gifImage = new Image();
    gifImage.src = talkingGif;

    const showGifTimer = setTimeout(() => {
      setShowGif(true);
      setShowBunny(false);
    }, 1000);

    const showGifBunnyTimer = setTimeout(() => {
      setShowGif(false);
      setShowBunny(true);
      setDidIntro(true);
    }, 8500);

    const showSittingBunnyTimer = setTimeout(() => {
      setShowBunny(false);
      setShowBunnySitting(true);
    }, 9000);

    timers.current.push(showGifTimer, showGifBunnyTimer, showSittingBunnyTimer);

    return () => {
      clearAllTimers();
    };
  }, []);

  return (
    <div className="page-main-container">
      <div className="titel-page-main-container">
        <div className="titel-page-main">
          <MainTitel text="whyKirbyy"/>
        </div>
      </div>
      <div className={"button-arrow"}>
        {/*<ArrowButton direction="right" keyword="destination" />*/}
      </div>

      {!didIntro &&
        <>
          <div className="skip-button">
            <PixelButton label="skip" onClick={handleSkip}/>
          </div>
          <div className="shutup-button">
            <PixelButton label="Shut up!" onClick={handleShutUp}/>
          </div>
        </>
      }

      <div className="text-container">
        {showGif && !angryBunny && <TextScroll messages={messages}/>}
      </div>
      <div className="text-container-rage">
        {showRagingGif && angryBunny &&
          <TextScroll
            messages={messagesAngry}
            textColor="red"
            textSize="3.4rem"
          />}
      </div>
      {showRagingGif &&
        <div className={"temp-box"}></div>
      }
      {showBunny && <img className="bunny" src={bunny} alt="whyKirbyy"/>}
      {showGif && <img className="gif" src={talkingGif} alt="whyKirbyy talking"/>}
      {showBunnySitting && <img className="sitting-bunny" src={sittingBunny} alt="whyKirbyy sitting"/>}
      {skipBunny && <img className="skiped-bunny" src={skipedBunny} alt="whyKirbyy sitting angry"/>}
      {showRagingGif && <div className={"raging-bunny-zoom"}><img className="raging-bunny" src={ragingGif} alt="whyKirbyy talking"/></div>}
      <StarBackground/>
    </div>
  );
}

export default App;
