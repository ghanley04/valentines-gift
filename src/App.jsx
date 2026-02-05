import './App.css'
import React, { useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';

export default function ValentineCard() {
  const [answer, setAnswer] = useState(null);
  const [noClickCount, setNoClickCount] = useState(0);
  const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0 });
  const [text, setText] = useState('Please rethink.');
  const [hoverCount, setHoverCount] = useState(0);
  const hoverCountLimit = 15;
  const clickCountLimit = 3;
  const buttonWindow = 500;


  const handleYes = () => setAnswer('yes');
  const handleNo = () => {
    if (answer === "start") {
      setAnswer('no_1');
    } else if (answer === 'no_1') {
      setAnswer('no_2');
    } else if (answer === 'no_2') {
      setAnswer('no_3');
    } else {
      setAnswer('no_4');
      setText("Yeah the 'no' button doesnt do anything bozo. Turns out you hate me");
    }

  }
  const handleNoMove = () => {
    if (noClickCount === 0) {
      setNoClickCount(noClickCount + 1);
      setText('Are you sure...?');
    } else if (noClickCount === 1) {
      setNoClickCount(noClickCount + 1);
      setText('Pookie please?');
    } else if (noClickCount === 2) {
      setNoClickCount(noClickCount + 1);
      setText('Please say yes?');
    } else if (noClickCount === 3) {
      setNoClickCount(noClickCount + 1);
      setText('Pookie pretty please?');
    } else {
      setNoClickCount(noClickCount + 1);
      setText('I cannot believe you pookie this is why you get beaten');
    }
    // Do nothing to avoid changing state
  }

  const moveButton = () => {
    // Generate random position within safe bounds
    const maxX = window.innerWidth - buttonWindow; // button width
    const maxY = window.innerHeight - buttonWindow; // button height
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    setButtonPosition({ top: randomY, left: randomX });
  };

  //change this
  const handleNoHover = () => {
    setHoverCount(hoverCount + 1);
    if (noClickCount >= clickCountLimit) {
      moveButton();
    }
    if (hoverCount >= hoverCountLimit / 2) {
      setText("Why are you still trying...");
    }
    if (hoverCount >= hoverCountLimit) {
      handleNo();
    }

  };

  const handleStart = () => setAnswer('start');
  const handleReset = () => setAnswer(null);

  return (
    <div className="min-h-screen min-w-screen bg-linear-to-br from-pink-100 via-red-50 to-purple-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-2xl h-auto min-h-[400px]">

        {/* Card Content */}
        <div className="text-center mb-8">
          {answer === null && (
            <>
              {/* Envelope - centered and above everything */}
              <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
                <div className="relative w-[700px] h-[400px] pointer-events-auto">
                  {/* Envelope body */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-red-500 rounded-lg shadow-2xl overflow-hidden">
                    <div className="absolute inset-4 border-2 border-red-300 rounded opacity-50"></div>
                  </div>

                  {/* Envelope flap - rotates when opened */}
                  <div
                    className="absolute top-0 left-0 w-full origin-top transition-all duration-700 pointer-events-none"
                    style={{
                      height: '50%',
                      clipPath: 'polygon(0 0, 50% 100%, 100% 0)',
                      background: 'linear-gradient(to bottom, #ef4444, #dc2626)',
                      transformStyle: 'preserve-3d',
                    }}
                  ></div>

                  {/* Heart seal on flap */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 transition-all duration-700 pointer-events-none">
                    <Heart className="w-12 h-12 text-white animate-pulse" fill="currentColor" />
                  </div>

                  {/* Main content inside envelope */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 pointer-events-none">
                    <h1 className="text-2xl font-bold text-white mb-2 mt-20 text-center">
                      Super Secret Question
                    </h1>
                    <p className="text-white text-sm text-center opacity-90">
                      For Pookie Only 💕
                    </p>
                  </div>

                  {/* "Click to open" button */}
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-3/4">
                    <button
                      onClick={handleStart}
                      className="w-full bg-gradient-to-r from-white to-pink-500 text-black font-bold py-4 px-6 rounded-xl scale:105 hover:from-pink-600 hover:to-white transform transition-all duration-200 hover:scale-105 shadow-lg"
                    >
                      Yes my love I am ready
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}

          {answer === 'start' && (
            <>
              <div className="mb-6 flex justify-center">
                <Heart className="w-24 h-24 text-red-400 animate-pulse" fill="currentColor" />
              </div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Will You Be My Valentine?
              </h1>
              <p className="text-gray-600 text-lg px-10 py-10">
                Ik you already asked me but please say yes pookie 🥺
              </p>
              <div className="flex gap-4">
                <button
                  onClick={handleYes}
                  className="flex-1 bg-linear-to-r from-pink-500 to-red-500 text-white font-bold py-8 px-6 rounded-xl my-4 hover:from-pink-600 hover:to-red-600 transform transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  Yes! 💖
                </button>
                <button
                  onClick={handleNo}
                  className="flex-1 bg-gray-300 text-gray-200 font-bold py-8 px-6 rounded-xl my-4 hover:bg-gray-400 transform transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  No 😢
                </button>
              </div>
            </>
          )}

          {answer === 'yes' && (
            <>
              <div className="mb-6 flex justify-center animate-bounce">
                <Sparkles className="w-24 h-24 text-yellow-400" fill="currentColor" />
              </div>
              <h1 className="text-4xl font-bold text-pink-600 mb-4">
                YAYAYAYAYAY! You said YES! 💕
              </h1>
              <p className="text-gray-700 text-lg">
                Yippee Yippee! I cannot wait to see you pookie! I promise to make every day special and celebrate you like the queen you are!
              </p>
            </>
          )}

          {answer === 'no_1' && (
            <>
              <div className="mb-6 flex justify-center">
                <Heart className="w-24 h-24 text-gray-400" />
              </div>
              <h1 className="text-4xl font-bold text-gray-600 mb-4">
                Are you sure...? 💔
              </h1>
              <p className="text-gray-600 text-lg px-10 py-10">
                Really think about it this time pookie 🥺
              </p>
              <div className="flex gap-4">
                <button
                  onClick={handleYes}
                  className="flex-3 bg-linear-to-r from-pink-500 to-red-500 text-white font-bold py-8 px-6 rounded-xl my-4 hover:from-pink-600 hover:to-red-600 transform transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  Yes! 💖
                </button>
                <button
                  onClick={handleNo}
                  className="flex-1 bg-gray-300 text-gray-200 font-bold py-8 px-6 rounded-xl my-4 hover:bg-gray-400 transform transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  No 😢
                </button>
              </div>
            </>
          )}

          {answer === 'no_2' && (
            <>
              <div className="mb-6 flex justify-center">
                <Heart className="w-24 h-24 text-gray-400" />
              </div>
              <h1 className="text-4xl font-bold text-gray-600 mb-4">
                POOKIE PLEASE RETHINK 💔
              </h1>
              <p className="text-gray-600 text-lg px-10 py-10">
                pretty please? 🥺
              </p>
              <div className="flex gap-4">
                <button
                  onClick={handleYes}
                  className="flex-6 bg-linear-to-r from-pink-500 to-red-500 text-white font-bold py-8 px-6 rounded-xl my-4 hover:from-pink-600 hover:to-red-600 transform transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  Yes! 💖
                </button>
                <button
                  onClick={handleNo}
                  className="flex-1 bg-gray-300 text-gray-200 font-bold py-8 px-6 rounded-xl my-4 hover:bg-gray-400 transform transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  No
                </button>
              </div>
            </>
          )}

          {answer === 'no_3' && (
            <>
              <div className="mb-6 flex justify-center">
                <Heart className="w-24 h-24 text-gray-400" />
              </div>
              <h1 className="text-4xl font-bold text-gray-600 mb-4">
                SIGH just say you hate me
              </h1>
              <p className="text-gray-600 text-lg px-10 py-10">
                {text}
              </p>
              <div className="flex gap-4">
                <button
                  onClick={handleYes}
                  className="flex-1 bg-linear-to-r from-pink-500 to-red-500 text-white font-bold py-8 px-6 rounded-xl my-4 hover:from-pink-600 hover:to-red-600 transform transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  Yes! 💖
                </button>
                <button
                  onMouseEnter={handleNoHover}
                  style={
                    noClickCount >= clickCountLimit
                      ? { position: 'fixed', top: `${buttonPosition.top}px`, left: `${buttonPosition.left}px` }
                      : {}
                  }
                  onClick={handleNoMove}
                  className="flex-1 bg-gray-300 text-gray-200 font-bold py-8 px-6 rounded-xl my-4 hover:bg-gray-400 transform transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  No
                </button>
              </div>
            </>
          )}

          {answer === 'no_4' && (
            <>
              <div className="mb-6 flex justify-center">
                <Heart className="w-24 h-24 text-gray-400" />
              </div>
              <h1 className="text-4xl font-bold text-gray-600 mb-4">
                Oh...ok 💔
              </h1>
              <p className="text-gray-600 text-lg px-10 py-10">
                {text}
              </p>
              <div className="flex gap-4">
                <button
                  onClick={handleYes}
                  className="flex-1 bg-linear-to-r from-pink-500 to-red-500 text-white font-bold py-8 px-6 rounded-xl my-4 hover:from-pink-600 hover:to-red-600 transform transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  Yes! 💖
                </button>

              </div>
              <button
                onClick={handleNo}
                className="position-absolute bg-gray-300 text-gray-300 font-bold py-8 px-6 rounded-xl my-4 hover:bg-gray-400 transform transition-all duration-200 hover:scale-105 shadow-lg"
              >
                No 😢
              </button>
            </>
          )}
        </div>

        {/* Buttons */}
        {/* {answer === null ? (
          <div className="flex gap-4">
            <button
              onClick={handleYes}
              className="flex-1 bg-linear-to-r from-pink-500 to-red-500 text-white font-bold py-8 px-6 rounded-xl my-4 hover:from-pink-600 hover:to-red-600 transform transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Yes! 💖
            </button>
            <button
              onClick={handleNo}
              className="flex-1 bg-gray-300 text-gray-200 font-bold py-8 px-6 rounded-xl my-4 hover:bg-gray-400 transform transition-all duration-200 hover:scale-105 shadow-lg"
            >
              No 😢
            </button>
          </div>
        ) : (
          <button
            onClick={handleReset}
            className="w-full bg-linear-to-r from-purple-500 to-pink-500 text-white font-bold py-8 px-6 rounded-xl my-4 hover:from-purple-600 hover:to-pink-600 transform transition-all duration-200 hover:scale-105 shadow-lg"
          >
            Ask Again 💝
          </button>
        )} */}

        {/* Decorative hearts */}
        <div className="mt-8 flex justify-center gap-2">
          {[...Array(5)].map((_, i) => (
            <Heart
              key={i}
              className={`w-4 h-4 ${answer === 'yes' ? 'text-red-400' : 'text-pink-300'
                }`}
              fill="currentColor"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
