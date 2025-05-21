
import React from 'react';
import { Question, GameMode, PlayerID } from '../types';
import { ROUND_TIME_LIMIT_SECONDS, PLAYER_COLORS, FEEDBACK_COLORS, BUTTON_COLORS } from '../constants';

interface GameScreenProps {
  gameMode: GameMode;
  currentQuestion: Question | null;
  questionNumber: number;
  totalQuestions: number;
  player1Score: number;
  player2Score: number;
  singlePlayerScore: number;
  wrongAnswersCount: number;
  onAnswer: (selectedOption: string, player?: PlayerID) => void;
  timerSecondsLeft?: number;
  feedbackMessage: string;
  p1Feedback: string;
  p2Feedback: string;
  player1Choice?: string | null;
  player2Choice?: string | null;
  isRoundEvaluated: boolean;
  isSinglePlayerButtonsEnabled: boolean;
  player1Answered?: boolean; 
  player2Answered?: boolean;
  roundFirstAnswerBy?: PlayerID | null;
}

const KeyHint: React.FC<{ gameMode: GameMode }> = ({ gameMode }) => {
  let hintText = "";
  if (gameMode === GameMode.SINGLE) {
    hintText = "Hint: Use number keys 1-5 to answer.";
  } else if (gameMode === GameMode.VERSUS_DESKTOP) {
    hintText = "P1: QWEAS | P2: 12345 (First to answer starts 10s timer for other)";
  } else if (gameMode === GameMode.VERSUS_SPEED_DESKTOP) {
    hintText = "P1: QWEAS | P2: 12345 (Speed round - First to answer!)";
  } else if (gameMode === GameMode.VERSUS_MOBILE) {
    hintText = "Player 1: Tap Left | Player 2: Tap Right (First to answer starts 10s timer for other)";
  } else if (gameMode === GameMode.VERSUS_SPEED_MOBILE) {
     hintText = "Player 1: Tap Left | Player 2: Tap Right (Speed round - First to answer!)";
  }
  return hintText ? <p className="text-sm italic text-gray-500 mt-4 text-center">{hintText}</p> : null;
};

const GameScreen: React.FC<GameScreenProps> = (props) => {
  const {
    gameMode, currentQuestion, questionNumber, totalQuestions,
    player1Score, player2Score, singlePlayerScore, wrongAnswersCount,
    onAnswer, timerSecondsLeft, feedbackMessage, p1Feedback, p2Feedback,
    player1Choice, player2Choice, isRoundEvaluated, isSinglePlayerButtonsEnabled,
    player1Answered, player2Answered, roundFirstAnswerBy,
  } = props;

  if (!currentQuestion) {
    return <div className="flex items-center justify-center h-screen text-xl">Loading question...</div>;
  }

  const isMobileVersus = gameMode === GameMode.VERSUS_MOBILE || gameMode === GameMode.VERSUS_SPEED_MOBILE;

  const getDesktopButtonClass = (option: string): string => {
    let baseClass = "font-semibold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-150 ease-in-out w-full text-left flex items-center space-x-3 text-sm md:text-base";
    
    if (gameMode === GameMode.SINGLE) {
      if (!isSinglePlayerButtonsEnabled && isRoundEvaluated) {
        if (option === currentQuestion.correct_answer) return `${baseClass} ${BUTTON_COLORS.correct}`;
        if (option === player1Choice && option !== currentQuestion.correct_answer) return `${baseClass} ${BUTTON_COLORS.wrong}`;
        return `${baseClass} ${BUTTON_COLORS.default}`;
      }
      return `${baseClass} ${isSinglePlayerButtonsEnabled ? BUTTON_COLORS.default : BUTTON_COLORS.disabled}`;
    } else { // VERSUS_DESKTOP or VERSUS_SPEED_DESKTOP
      if(isRoundEvaluated) {
        if(option === currentQuestion.correct_answer) return `${baseClass} ${BUTTON_COLORS.highlightCorrect}`;
        if(option === player1Choice && option !== currentQuestion.correct_answer) return `${baseClass} ${BUTTON_COLORS.wrong}`;
        if(option === player2Choice && option !== currentQuestion.correct_answer) return `${baseClass} ${BUTTON_COLORS.wrong}`;
         return `${baseClass} ${BUTTON_COLORS.default}`;
      }
      // For active VERSUS_DESKTOP/VERSUS_SPEED_DESKTOP rounds, buttons are generally enabled
      // Individual player answer status (player1Answered/player2Answered) doesn't directly disable specific buttons here
      // as the input is keyboard based and controlled in App.tsx.
      return `${baseClass} ${BUTTON_COLORS.default}`;
    }
  };

  const getMobileButtonClass = (option: string, playerContext: PlayerID): string => {
    let baseClass = "font-semibold py-2 px-3 md:py-3 md:px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-150 ease-in-out w-full text-left flex items-start space-x-2 md:space-x-3 text-xs sm:text-sm md:text-base"; // items-start for multi-line alignment

    if (isRoundEvaluated) {
      const actualPlayerChoice = playerContext === PlayerID.PLAYER1 ? player1Choice : player2Choice;
      if (option === currentQuestion.correct_answer) return `${baseClass} ${BUTTON_COLORS.highlightCorrect}`;
      if (option === actualPlayerChoice && option !== currentQuestion.correct_answer) return `${baseClass} ${BUTTON_COLORS.wrong}`;
      return `${baseClass} ${BUTTON_COLORS.default}`;
    }

    // Button is active (not yet evaluated or player hasn't answered)
    if (gameMode === GameMode.VERSUS_MOBILE) {
        if (playerContext === PlayerID.PLAYER1 && player1Answered) return `${baseClass} ${BUTTON_COLORS.disabled}`;
        if (playerContext === PlayerID.PLAYER2 && player2Answered) return `${baseClass} ${BUTTON_COLORS.disabled}`;
    } else if (gameMode === GameMode.VERSUS_SPEED_MOBILE) {
        if (roundFirstAnswerBy) return `${baseClass} ${BUTTON_COLORS.disabled}`;
    }
    return `${baseClass} ${BUTTON_COLORS.default}`;
  };


  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-amber-50 p-2 pt-4 sm:p-4 sm:pt-8 md:p-6">
      <div className="bg-white shadow-xl rounded-lg p-3 md:p-8 w-full max-w-3xl">
        {/* Status Bar */}
        <div className="mb-4 md:mb-6 flex flex-col sm:flex-row justify-between items-center text-sm md:text-base font-semibold">
          {gameMode === GameMode.SINGLE ? (
            <>
              <span className={`${PLAYER_COLORS.default}`}>Score: {singlePlayerScore}</span>
              <span className={`${PLAYER_COLORS.default}`}>Progress: {questionNumber}/{totalQuestions}</span>
              <span className={`${FEEDBACK_COLORS.wrong}`}>Wrong: {wrongAnswersCount}</span>
            </>
          ) : (
            <>
              <span className={`${PLAYER_COLORS.p1}`}>P1: {player1Score}</span>
              <span className={`${PLAYER_COLORS.default}`}>Q: {questionNumber}/{totalQuestions}</span>
              <span className={`${PLAYER_COLORS.p2}`}>P2: {player2Score}</span>
            </>
          )}
        </div>

        {/* Timer for Versus Desktop/Mobile Mode */}
        {(gameMode === GameMode.VERSUS_DESKTOP || gameMode === GameMode.VERSUS_MOBILE) && timerSecondsLeft !== undefined && timerSecondsLeft < ROUND_TIME_LIMIT_SECONDS && (
          <p className={`text-center text-lg font-bold my-2 ${timerSecondsLeft <=3 ? FEEDBACK_COLORS.timeout : FEEDBACK_COLORS.timer}`}>
            Time Left: {timerSecondsLeft}s
          </p>
        )}
        
        {/* Question */}
        <div className="bg-slate-100 p-3 md:p-6 rounded-lg mb-4 md:mb-6 min-h-[80px] md:min-h-[100px] flex items-center justify-center">
          <p className="text-md md:text-xl text-slate-800 text-center break-words">
            {currentQuestion.question}
          </p>
        </div>

        {/* Options */}
        {isMobileVersus ? (
          <div className="flex flex-row gap-2 md:gap-4 mb-4">
            {/* Player 1 Options (Left Side) */}
            <div className="flex-1 flex flex-col gap-1.5 md:gap-3">
              <h3 className={`text-center font-semibold ${PLAYER_COLORS.p1} mb-1 md:mb-2 text-sm md:text-base`}>Player 1</h3>
              {currentQuestion.options.map((option, index) => (
                <button
                  key={`p1-${currentQuestion.id}-${option}`}
                  onClick={() => {
                    if (isRoundEvaluated) return;
                    if (gameMode === GameMode.VERSUS_MOBILE && !player1Answered) {
                      onAnswer(option, PlayerID.PLAYER1);
                    } else if (gameMode === GameMode.VERSUS_SPEED_MOBILE && !roundFirstAnswerBy) {
                      onAnswer(option, PlayerID.PLAYER1);
                    }
                  }}
                  disabled={
                    isRoundEvaluated ||
                    (gameMode === GameMode.VERSUS_MOBILE && player1Answered) ||
                    (gameMode === GameMode.VERSUS_SPEED_MOBILE && !!roundFirstAnswerBy)
                  }
                  className={getMobileButtonClass(option, PlayerID.PLAYER1)}
                  aria-label={`Player 1, Option ${index + 1}: ${option}`}
                >
                  <span className="bg-black/10 text-black/70 rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center text-xs font-mono shrink-0 mt-0.5">{index + 1}</span>
                  <span className="flex-grow break-words min-w-0">{option}</span>
                </button>
              ))}
            </div>
             <div className="w-px bg-slate-300 mx-1"></div> {/* Vertical Divider */}
            {/* Player 2 Options (Right Side) */}
            <div className="flex-1 flex flex-col gap-1.5 md:gap-3">
               <h3 className={`text-center font-semibold ${PLAYER_COLORS.p2} mb-1 md:mb-2 text-sm md:text-base`}>Player 2</h3>
              {currentQuestion.options.map((option, index) => (
                <button
                  key={`p2-${currentQuestion.id}-${option}`}
                  onClick={() => {
                    if (isRoundEvaluated) return;
                    if (gameMode === GameMode.VERSUS_MOBILE && !player2Answered) {
                      onAnswer(option, PlayerID.PLAYER2);
                    } else if (gameMode === GameMode.VERSUS_SPEED_MOBILE && !roundFirstAnswerBy) {
                      onAnswer(option, PlayerID.PLAYER2);
                    }
                  }}
                  disabled={
                    isRoundEvaluated ||
                    (gameMode === GameMode.VERSUS_MOBILE && player2Answered) ||
                    (gameMode === GameMode.VERSUS_SPEED_MOBILE && !!roundFirstAnswerBy)
                  }
                  className={getMobileButtonClass(option, PlayerID.PLAYER2)}
                  aria-label={`Player 2, Option ${index + 1}: ${option}`}
                >
                  <span className="bg-black/10 text-black/70 rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center text-xs font-mono shrink-0 mt-0.5">{index + 1}</span>
                  <span className="flex-grow break-words min-w-0">{option}</span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          // Original options layout for SINGLE and DESKTOP_VERSUS modes
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-4">
            {currentQuestion.options.map((option, index) => (
              <button
                key={`${currentQuestion.id}-${option}`}
                onClick={() => gameMode === GameMode.SINGLE && isSinglePlayerButtonsEnabled && onAnswer(option)}
                disabled={ // For VERSUS_DESKTOP, App.tsx logic controls input based on keyboard. Button itself isn't individually disabled per player here.
                  isRoundEvaluated || 
                  (gameMode === GameMode.SINGLE && !isSinglePlayerButtonsEnabled)
                }
                className={getDesktopButtonClass(option)}
                 aria-label={`Option ${index + 1}: ${option}`}
              >
                <span className="bg-black/10 text-black/70 rounded-full w-6 h-6 flex items-center justify-center text-xs font-mono shrink-0">{index + 1}</span>
                <span>{option}</span>
              </button>
            ))}
          </div>
        )}
        
        {/* Feedback Section */}
        <div className="min-h-[60px] md:min-h-[80px] flex flex-col items-center justify-center">
            {/* Player Specific Feedback (Versus Modes) */}
            {gameMode !== GameMode.SINGLE && (
              <div className="w-full flex justify-between text-xs sm:text-sm md:text-base font-semibold mb-2">
                <span className={`${p1Feedback.includes("Correct") ? FEEDBACK_COLORS.correct : p1Feedback.includes("Wrong") || p1Feedback.includes("Timeout") ? FEEDBACK_COLORS.wrong : PLAYER_COLORS.p1} ${p1Feedback.includes("answered") || p1Feedback.includes("Answered") ? 'animate-pulse' : ''} w-1/2 text-left`}>{p1Feedback}</span>
                <span className={`${p2Feedback.includes("Correct") ? FEEDBACK_COLORS.correct : p2Feedback.includes("Wrong") || p2Feedback.includes("Timeout") ? FEEDBACK_COLORS.wrong : PLAYER_COLORS.p2} ${p2Feedback.includes("answered") || p2Feedback.includes("Answered") ? 'animate-pulse' : ''} w-1/2 text-right`}>{p2Feedback}</span>
              </div>
            )}

            {/* General Feedback */}
            {feedbackMessage && (
              <p className={`text-center text-sm md:text-lg font-bold 
                ${feedbackMessage.includes("Correct") ? FEEDBACK_COLORS.correct : ''}
                ${feedbackMessage.includes("Wrong") || feedbackMessage.includes("Incorrect") ? FEEDBACK_COLORS.wrong : ''}
                ${feedbackMessage.includes("Time's up") || feedbackMessage.includes("Timeout") ? FEEDBACK_COLORS.timeout : ''}
              `}>
                {feedbackMessage}
              </p>
            )}
        </div>

        <KeyHint gameMode={gameMode} />
      </div>
    </div>
  );
};

export default GameScreen;
