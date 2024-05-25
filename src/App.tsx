import MainTitel from './components/MainTitel';
import StarBackground from './components/StarBackground';
import talkingGif from './assets/whykirbyy-talking-animation-bubble.gif';
import TextScroll from './components/TextScroll';
import './App.css';

function App() {
  const messages = [
    "Welcome the site of whyKirbyy!",
    "",
    "here you can find all the things",
    "he worked and is working on",
    "I hope you enjoy it!"
  ];

  return (
    <div className="page-main-container">
      <div className={"titel-page-main-container"} >
        <div className="titel-page-main">
          <MainTitel text="whyKirbyy"  />
        </div>
      </div>
      <div className={"text-container"}>
        <TextScroll messages={messages} />
      </div>
      <img className="gif" src={talkingGif} alt="whyKirbyy talking" />
      <StarBackground />
    </div>
  );
}

export default App;
