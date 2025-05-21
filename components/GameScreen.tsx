
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
  onGoToHome: () => void; 
}

const KeyHint: React.FC<{ gameMode: GameMode }> = ({ gameMode }) => {
  let hintText = "";
  if (gameMode === GameMode.SINGLE) {
    hintText = "提示：使用數字鍵 1-5 回答。";
  } else if (gameMode === GameMode.VERSUS_DESKTOP) {
    hintText = "玩家1: QWEAS | 玩家2: 12345 (先答者啟動另一位玩家的 10 秒計時)";
  } else if (gameMode === GameMode.VERSUS_SPEED_DESKTOP) {
    hintText = "玩家1: QWEAS | 玩家2: 12345 (競速賽 - 先搶先贏！)";
  } else if (gameMode === GameMode.VERSUS_MOBILE) {
    hintText = "玩家1：點擊左側 | 玩家2：點擊右側 (先答者啟動另一位玩家的 10 秒計時)";
  } else if (gameMode === GameMode.VERSUS_SPEED_MOBILE) {
     hintText = "玩家1：點擊左側 | 玩家2：點擊右側 (競速賽 - 先搶先贏！)";
  }
  return hintText ? <p className="text-sm italic text-gray-500 mt-4 text-center">{hintText}</p> : null;
};

const GameScreen: React.FC<GameScreenProps> = (props) => {
  const {
    gameMode, currentQuestion, questionNumber, totalQuestions,
    player1Score, player2Score, singlePlayerScore, wrongAnswersCount,
    onAnswer, timerSecondsLeft, feedbackMessage, p1Feedback, p2Feedback,
    player1Choice, player2Choice, isRoundEvaluated, isSinglePlayerButtonsEnabled,
    player1Answered, player2Answered, roundFirstAnswerBy, onGoToHome,
  } = props;

  if (!currentQuestion) {
    return <div className="flex items-center justify-center h-screen text-xl">載入題目中...</div>;
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
        {/* Status Bar and Home Button Container */}
        <div className="mb-4 md:mb-6 flex flex-row justify-between items-center text-sm md:text-base font-semibold">
          {/* Status Info Group */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-y-1 sm:space-y-0 sm:space-x-2 md:space-x-4">
            {gameMode === GameMode.SINGLE ? (
              <>
                <span className={`${PLAYER_COLORS.default}`}>分數: {singlePlayerScore}</span>
                <span className={`${PLAYER_COLORS.default}`}>進度: {questionNumber}/{totalQuestions}</span>
                <span className={`${FEEDBACK_COLORS.wrong}`}>答錯: {wrongAnswersCount}</span>
              </>
            ) : (
              <>
                <span className={`${PLAYER_COLORS.p1}`}>玩家1: {player1Score}</span>
                <span className={`${PLAYER_COLORS.default}`}>題: {questionNumber}/{totalQuestions}</span>
                <span className={`${PLAYER_COLORS.p2}`}>玩家2: {player2Score}</span>
              </>
            )}
          </div>

          {/* Back to Home Button */}
          <button
            onClick={onGoToHome}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-1 px-2 sm:py-1.5 sm:px-3 rounded-md text-xs sm:text-sm shadow-sm hover:shadow transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 ml-2 sm:ml-4 shrink-0" // Added shrink-0
            aria-label="回到主畫面"
          >
            回到主畫面
          </button>
        </div>
        
        {(gameMode === GameMode.VERSUS_DESKTOP || gameMode === GameMode.VERSUS_MOBILE) && timerSecondsLeft !== undefined && timerSecondsLeft < ROUND_TIME_LIMIT_SECONDS && (
          <p className={`text-center text-lg font-bold my-2 ${timerSecondsLeft <=3 ? FEEDBACK_COLORS.timeout : FEEDBACK_COLORS.timer}`}>
            剩餘時間: {timerSecondsLeft}秒
          </p>
        )}
        
        <div className="bg-slate-100 p-3 md:p-6 rounded-lg mb-4 md:mb-6 min-h-[80px] md:min-h-[100px] flex items-center justify-center">
          <p className="text-md md:text-xl text-slate-800 text-center break-words">
            {currentQuestion.question}
          </p>
        </div>

        {isMobileVersus ? (
          <div className="flex flex-row gap-2 md:gap-4 mb-4">
            <div className="flex-1 flex flex-col gap-1.5 md:gap-3">
              <h3 className={`text-center font-semibold ${PLAYER_COLORS.p1} mb-1 md:mb-2 text-sm md:text-base`}>玩家1</h3>
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
                  aria-label={`玩家1, 選項 ${index + 1}: ${option}`}
                >
                  <span className="bg-black/10 text-black/70 rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center text-xs font-mono shrink-0 mt-0.5">{index + 1}</span>
                  <span className="flex-grow break-words min-w-0">{option}</span>
                </button>
              ))}
            </div>
             <div className="w-px bg-slate-300 mx-1"></div> {/* Vertical Divider */}
            <div className="flex-1 flex flex-col gap-1.5 md:gap-3">
               <h3 className={`text-center font-semibold ${PLAYER_COLORS.p2} mb-1 md:mb-2 text-sm md:text-base`}>玩家2</h3>
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
                  aria-label={`玩家2, 選項 ${index + 1}: ${option}`}
                >
                  <span className="bg-black/10 text-black/70 rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center text-xs font-mono shrink-0 mt-0.5">{index + 1}</span>
                  <span className="flex-grow break-words min-w-0">{option}</span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-4">
            {currentQuestion.options.map((option, index) => (
              <button
                key={`${currentQuestion.id}-${option}`}
                onClick={() => gameMode === GameMode.SINGLE && isSinglePlayerButtonsEnabled && onAnswer(option)}
                disabled={
                  isRoundEvaluated || 
                  (gameMode === GameMode.SINGLE && !isSinglePlayerButtonsEnabled)
                }
                className={getDesktopButtonClass(option)}
                 aria-label={`選項 ${index + 1}: ${option}`}
              >
                <span className="bg-black/10 text-black/70 rounded-full w-6 h-6 flex items-center justify-center text-xs font-mono shrink-0">{index + 1}</span>
                <span>{option}</span>
              </button>
            ))}
          </div>
        )}
        
        <div className="min-h-[60px] md:min-h-[80px] flex flex-col items-center justify-center">
            {gameMode !== GameMode.SINGLE && (
              <div className="w-full flex justify-between text-xs sm:text-sm md:text-base font-semibold mb-2">
                <span className={`${p1Feedback.includes("正確") ? FEEDBACK_COLORS.correct : p1Feedback.includes("答錯") || p1Feedback.includes("超時") ? FEEDBACK_COLORS.wrong : PLAYER_COLORS.p1} ${p1Feedback.includes("已作答") ? 'animate-pulse' : ''} w-1/2 text-left`}>{p1Feedback}</span>
                <span className={`${p2Feedback.includes("正確") ? FEEDBACK_COLORS.correct : p2Feedback.includes("答錯") || p2Feedback.includes("超時") ? FEEDBACK_COLORS.wrong : PLAYER_COLORS.p2} ${p2Feedback.includes("已作答") ? 'animate-pulse' : ''} w-1/2 text-right`}>{p2Feedback}</span>
              </div>
            )}

            {feedbackMessage && (
              <p className={`text-center text-sm md:text-lg font-bold 
                ${feedbackMessage.includes("正確") ? FEEDBACK_COLORS.correct : ''}
                ${feedbackMessage.includes("錯") || feedbackMessage.includes("不正確") ? FEEDBACK_COLORS.wrong : ''}
                ${feedbackMessage.includes("時間到") || feedbackMessage.includes("超時") ? FEEDBACK_COLORS.timeout : ''}
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
