
import React from 'react';
import { GameMode } from '../types';

interface GameOverScreenProps {
  gameMode: GameMode;
  player1Score?: number;
  player2Score?: number;
  singlePlayerScore?: number;
  wrongAnswerCount?: number;
  totalQuestionsAnswered: number;
  targetQuestions: number;
  onRestart: () => void;
  onReviewWrongAnswers?: () => void; // Optional, only if there are wrong answers
  canReview: boolean;
}

const GameOverScreen: React.FC<GameOverScreenProps> = ({
  gameMode, player1Score, player2Score, singlePlayerScore, wrongAnswerCount,
  totalQuestionsAnswered, targetQuestions,
  onRestart, onReviewWrongAnswers, canReview
}) => {
  let M_message = `挑戰完成: ${totalQuestionsAnswered}/${targetQuestions} 題`;
  let scoreMessage = "";
  let winnerMessage = "";

  if (gameMode === GameMode.SINGLE) {
    scoreMessage = `最終分數: ${singlePlayerScore} | 答錯題數: ${wrongAnswerCount}`;
  } else { // Versus modes
    scoreMessage = `最終分數 -> 玩家1: ${player1Score} | 玩家2: ${player2Score}`;
    if (player1Score! > player2Score!) {
      winnerMessage = "🏆 玩家1 獲勝！ 🏆";
    } else if (player2Score! > player1Score!) {
      winnerMessage = "🏆 玩家2 獲勝！ 🏆";
    } else {
      winnerMessage = "😐 平手！ 😐";
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-amber-50 p-6 text-center">
      <div className="bg-white shadow-xl rounded-lg p-8 md:p-12 w-full max-w-lg">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-700 mb-4">🎉 挑戰結束！ 🎉</h1>
        <p className="text-slate-600 mb-6 text-base md:text-lg">{M_message}</p>
        
        <div className="bg-slate-100 p-6 rounded-lg mb-8">
          <p className="text-xl font-semibold text-slate-800 mb-2">{scoreMessage}</p>
          {winnerMessage && (
            <p className="text-2xl font-bold text-blue-600">{winnerMessage}</p>
          )}
        </div>

        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
          <button
            onClick={onRestart}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            重新開始
          </button>
          {canReview && onReviewWrongAnswers && (
            <button
              onClick={onReviewWrongAnswers}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg text-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              回顧錯題
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameOverScreen;
