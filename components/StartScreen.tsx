
import React, { useState, useEffect, useRef } from 'react';
import { GameMode } from '../types';
import { TOTAL_QUESTIONS_AVAILABLE } from '../constants';

interface StartScreenProps {
  onStartGame: (mode: GameMode, numQuestions: number) => void;
  totalAvailableQuestions: number;
}

const getModeDisplayName = (mode: GameMode): string => {
  switch (mode) {
    case GameMode.SINGLE: return "Single Player";
    case GameMode.VERSUS_DESKTOP: return "Versus - Desktop";
    case GameMode.VERSUS_MOBILE: return "Versus - Mobile";
    case GameMode.VERSUS_SPEED_DESKTOP: return "Versus Speed - Desktop";
    case GameMode.VERSUS_SPEED_MOBILE: return "Versus Speed - Mobile";
    default: // Fallback, though all modes should be covered
// Fix: Cast 'mode' to 'string' for the default case.
// TypeScript infers 'mode' as 'never' here because all explicit GameMode enum members
// are handled by the 'case' statements above. This cast allows the fallback
// string formatting logic to proceed, treating 'mode' as a string.
      const modeAsString: string = mode as string;
      return modeAsString.replace(/_/g, ' ').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  }
};

const StartScreen: React.FC<StartScreenProps> = ({ onStartGame, totalAvailableQuestions }) => {
  const [selectedMode, setSelectedMode] = useState<GameMode>(GameMode.SINGLE);
  const [numQuestions, setNumQuestions] = useState<string>("10");
  const numQuestionsInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (numQuestionsInputRef.current) {
      numQuestionsInputRef.current.focus();
    }
  }, []);

  const handleStart = () => {
    const num = parseInt(numQuestions, 10);
    if (isNaN(num) || num <= 0) {
      alert("Please enter a valid positive number for questions.");
      return;
    }
    if (num > totalAvailableQuestions) {
      alert(`Only ${totalAvailableQuestions} questions available. Starting with ${totalAvailableQuestions}.`);
      onStartGame(selectedMode, totalAvailableQuestions);
    } else {
      onStartGame(selectedMode, num);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleStart();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-amber-50 p-6">
      <div className="bg-white shadow-xl rounded-lg p-8 md:p-12 w-full max-w-lg text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-700 mb-6">🧠 資管導大挑戰 🧠</h1>
        <p className="text-slate-600 mb-8 text-base md:text-lg">
          Available Questions: {totalAvailableQuestions}
        </p>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-slate-700 mb-3">Choose Mode:</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {(Object.values(GameMode) as GameMode[]).map((mode) => (
              <label key={mode} className={`flex items-center space-x-2 p-3 bg-gray-100 rounded-md hover:bg-gray-200 cursor-pointer transition-colors ${selectedMode === mode ? 'ring-2 ring-blue-500 bg-blue-50' : ''}`}>
                <input
                  type="radio"
                  name="gameMode"
                  value={mode}
                  checked={selectedMode === mode}
                  onChange={() => setSelectedMode(mode)}
                  className="form-radio h-5 w-5 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-slate-700 text-sm md:text-base">
                  {getModeDisplayName(mode)}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <label htmlFor="numQuestions" className="block text-xl font-semibold text-slate-700 mb-3">
            Number of Questions:
          </label>
          <input
            type="number"
            id="numQuestions"
            ref={numQuestionsInputRef}
            value={numQuestions}
            onChange={(e) => setNumQuestions(e.target.value)}
            onKeyDown={handleKeyPress}
            min="1"
            max={totalAvailableQuestions.toString()}
            className="w-1/2 sm:w-1/3 p-3 text-center border-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg"
          />
        </div>

        <button
          onClick={handleStart}
          className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-lg text-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Start Challenge
        </button>
      </div>
    </div>
  );
};

export default StartScreen;