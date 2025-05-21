
import React, { useState, useEffect, useRef } from 'react';
import { GameMode } from '../types';
import { TOTAL_QUESTIONS_AVAILABLE } from '../constants';

interface StartScreenProps {
  onStartGame: (mode: GameMode, numQuestions: number) => void;
  totalAvailableQuestions: number;
}

const getModeDisplayName = (mode: GameMode): string => {
  switch (mode) {
    case GameMode.SINGLE: return "單人模式";
    case GameMode.VERSUS_DESKTOP: return "雙人對戰 (電腦)";
    case GameMode.VERSUS_MOBILE: return "雙人對戰 (行動裝置)";
    case GameMode.VERSUS_SPEED_DESKTOP: return "雙人競速 (電腦)";
    case GameMode.VERSUS_SPEED_MOBILE: return "雙人競速 (行動裝置)";
    default:
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
      alert("請輸入有效的正整數作為題目數量。");
      return;
    }
    if (num > totalAvailableQuestions) {
      alert(`目前題庫只有 ${totalAvailableQuestions} 題。將以 ${totalAvailableQuestions} 題開始。`);
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
          總題數: {totalAvailableQuestions}
        </p>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-slate-700 mb-3">選擇模式:</h2>
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
            題目數量:
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
          開始挑戰
        </button>
      </div>
    </div>
  );
};

export default StartScreen;
