import React, { useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';

export default function ValentineCard() {
  const [answer, setAnswer] = useState(null);

  const handleYes = () => setAnswer('yes');
  const handleNo = () => setAnswer('no');
  const handleReset = () => setAnswer(null);

  return (
    <div className="min-h-screen bg-linear-to-brrom-pink-100 via-red-50 to-purple-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full transform transition-all duration-500 hover:scale-105">
        
        {/* Card Content */}
        <div className="text-center mb-8">
          {answer === null && (
            <>
              <div className="mb-6 flex justify-center">
                <Heart className="w-24 h-24 text-red-400 animate-pulse" fill="currentColor" />
              </div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Will You Be My Valentine?
              </h1>
              <p className="text-gray-600 text-lg">
                I promise to make every day special ✨
              </p>
            </>
          )}

          {answer === 'yes' && (
            <>
              <div className="mb-6 flex justify-center animate-bounce">
                <Sparkles className="w-24 h-24 text-yellow-400" fill="currentColor" />
              </div>
              <h1 className="text-4xl font-bold text-pink-600 mb-4">
                Yay! You said YES! 💕
              </h1>
              <p className="text-gray-700 text-lg">
                You've made me the happiest person! Can't wait to celebrate with you! 🎉
              </p>
            </>
          )}

          {answer === 'no' && (
            <>
              <div className="mb-6 flex justify-center">
                <Heart className="w-24 h-24 text-gray-400" />
              </div>
              <h1 className="text-4xl font-bold text-gray-600 mb-4">
                Oh no... 💔
              </h1>
              <p className="text-gray-600 text-lg">
                That's okay... but maybe you'll change your mind? 🥺
              </p>
            </>
          )}
        </div>

        {/* Buttons */}
        {answer === null ? (
          <div className="flex gap-4">
            <button
              onClick={handleYes}
              className="flex-1 bg-linear-to-r from-pink-500 to-red-500 text-white font-bold py-4 px-6 rounded-xl hover:from-pink-600 hover:to-red-600 transform transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Yes! 💖
            </button>
            <button
              onClick={handleNo}
              className="flex-1 bg-gray-300 text-gray-700 font-bold py-4 px-6 rounded-xl hover:bg-gray-400 transform transition-all duration-200 hover:scale-105 shadow-lg"
            >
              No 😢
            </button>
          </div>
        ) : (
          <button
            onClick={handleReset}
            className="w-full bg-linear-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-6 rounded-xl hover:from-purple-600 hover:to-pink-600 transform transition-all duration-200 hover:scale-105 shadow-lg"
          >
            Ask Again 💝
          </button>
        )}

        {/* Decorative hearts */}
        <div className="mt-8 flex justify-center gap-2">
          {[...Array(5)].map((_, i) => (
            <Heart
              key={i}
              className={`w-4 h-4 ${
                answer === 'yes' ? 'text-red-400' : 'text-pink-300'
              }`}
              fill="currentColor"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
