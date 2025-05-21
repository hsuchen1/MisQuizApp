
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Question, GameMode, PlayerID, WrongAnswer } from './types';
import {
  QUESTIONS_BANK, TOTAL_QUESTIONS_AVAILABLE,
  ROUND_TIME_LIMIT_SECONDS, VERSUS_ANSWER_DISPLAY_DELAY_MS,
  VERSUS_EXTRA_DELAY_MS, VERSUS_SPEED_RESULT_DELAY_MS, SINGLE_PLAYER_DELAY_MS
} from './constants';
import StartScreen from './components/StartScreen';
import GameScreen from './components/GameScreen';
import GameOverScreen from './components/GameOverScreen';
import ReviewModal from './components/ReviewModal';

type Screen = 'start' | 'game' | 'gameOver';

const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('start');
  const [gameMode, setGameMode] = useState<GameMode>(GameMode.SINGLE);
  const [targetQuestions, setTargetQuestions] = useState<number>(10);
  const [questionsAnsweredTotal, setQuestionsAnsweredTotal] = useState<number>(0);
  
  const [roundQuestions, setRoundQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  
  const [playerScore, setPlayerScore] = useState<number>(0);
  const [wrongAnswerCount, setWrongAnswerCount] = useState<number>(0);
  
  const [player1Score, setPlayer1Score] = useState<number>(0);
  const [player2Score, setPlayer2Score] = useState<number>(0);
  const [player1Answered, setPlayer1Answered] = useState<boolean>(false);
  const [player2Answered, setPlayer2Answered] = useState<boolean>(false);
  const [player1Choice, setPlayer1Choice] = useState<string | null>(null);
  const [player2Choice, setPlayer2Choice] = useState<string | null>(null);
  const [timerSecondsLeft, setTimerSecondsLeft] = useState<number>(ROUND_TIME_LIMIT_SECONDS);
  const [roundFirstAnswerBy, setRoundFirstAnswerBy] = useState<PlayerID | null>(null); 
  const [activeTimerForPlayer, setActiveTimerForPlayer] = useState<PlayerID | null>(null); 
  
  const [wrongAnswersList, setWrongAnswersList] = useState<WrongAnswer[]>([]);
  const [isRoundEvaluated, setIsRoundEvaluated] = useState<boolean>(false);
  const [isSinglePlayerButtonsEnabled, setIsSinglePlayerButtonsEnabled] = useState<boolean>(true);

  const [feedbackMessage, setFeedbackMessage] = useState<string>("");
  const [p1Feedback, setP1Feedback] = useState<string>("");
  const [p2Feedback, setP2Feedback] = useState<string>("");
  
  const [showReviewModal, setShowReviewModal] = useState<boolean>(false);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const currentQuestion = roundQuestions[currentQuestionIndex] || null;

  const resetGameState = useCallback(() => {
    setQuestionsAnsweredTotal(0);
    setCurrentQuestionIndex(0);
    setPlayerScore(0);
    setWrongAnswerCount(0);
    setPlayer1Score(0);
    setPlayer2Score(0);
    setPlayer1Answered(false);
    setPlayer2Answered(false);
    setPlayer1Choice(null);
    setPlayer2Choice(null);
    setTimerSecondsLeft(ROUND_TIME_LIMIT_SECONDS);
    setRoundFirstAnswerBy(null);
    setActiveTimerForPlayer(null);
    setWrongAnswersList([]);
    setIsRoundEvaluated(false);
    setIsSinglePlayerButtonsEnabled(true);
    setFeedbackMessage("");
    setP1Feedback("");
    setP2Feedback("");
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  const handleGoToHome = useCallback(() => {
    resetGameState();
    setCurrentScreen('start');
  }, [resetGameState]);

  const handleStartGame = useCallback((mode: GameMode, numQuestions: number) => {
    resetGameState();
    setGameMode(mode);
    setTargetQuestions(numQuestions);
    
    const allQuestionIndices = Array.from({ length: TOTAL_QUESTIONS_AVAILABLE }, (_, i) => i);
    const shuffledIndices = shuffleArray(allQuestionIndices);
    const selectedIndices = shuffledIndices.slice(0, numQuestions);
    setRoundQuestions(selectedIndices.map(index => QUESTIONS_BANK[index]));
    
    setCurrentScreen('game');
  }, [resetGameState]);

  const loadNextQuestion = useCallback(() => {
    if (questionsAnsweredTotal < targetQuestions - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setPlayer1Answered(false);
        setPlayer2Answered(false);
        setPlayer1Choice(null);
        setPlayer2Choice(null);
        setIsRoundEvaluated(false);
        setIsSinglePlayerButtonsEnabled(true);
        setRoundFirstAnswerBy(null);
        setActiveTimerForPlayer(null);
        setFeedbackMessage("");
        setP1Feedback("");
        setP2Feedback("");
        setTimerSecondsLeft(ROUND_TIME_LIMIT_SECONDS);
        if (timerRef.current) clearInterval(timerRef.current);
    } else {
        setCurrentScreen('gameOver');
    }
  }, [questionsAnsweredTotal, targetQuestions]);


  const cancelRoundTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const evaluateVersusRound = useCallback((p1Ans: string | null, p2Ans: string | null) => {
    if (isRoundEvaluated || !currentQuestion) return;
    setIsRoundEvaluated(true);
    cancelRoundTimer(); 

    const correctAnswer = currentQuestion.correct_answer;
    const p1Correct = p1Ans === correctAnswer;
    const p2Correct = p2Ans === correctAnswer;

    if (p1Ans !== null) {
        setP1Feedback(p1Correct ? "玩家1 正確！" : "玩家1 答錯！");
    } else if (!p1Feedback.includes("超時")) { 
        setP1Feedback("玩家1 超時");
    }
    
    if (p2Ans !== null) {
        setP2Feedback(p2Correct ? "玩家2 正確！" : "玩家2 答錯！");
    } else if (!p2Feedback.includes("超時")) { 
        setP2Feedback("玩家2 超時");
    }
    
    setFeedbackMessage(`正確答案: ${correctAnswer}`);

    if (p1Correct) setPlayer1Score(s => s + 1);
    if (p2Correct) setPlayer2Score(s => s + 1);
    
    setQuestionsAnsweredTotal(q => q + 1); 
    const delay = VERSUS_ANSWER_DISPLAY_DELAY_MS + VERSUS_EXTRA_DELAY_MS;
    setTimeout(loadNextQuestion, delay);

  }, [isRoundEvaluated, currentQuestion, cancelRoundTimer, loadNextQuestion, p1Feedback, p2Feedback]);


  const startRoundTimer = useCallback((timingPlayer: PlayerID | null) => { 
    cancelRoundTimer();
    if (!timingPlayer) return; 

    setActiveTimerForPlayer(timingPlayer);
    setTimerSecondsLeft(ROUND_TIME_LIMIT_SECONDS);
    timerRef.current = setInterval(() => {
      setTimerSecondsLeft(prev => {
        if (prev <= 1) {
          cancelRoundTimer(); 
          const currentP1Choice = player1Choice; 
          const currentP2Choice = player2Choice;

          if (activeTimerForPlayer === PlayerID.PLAYER1) { 
             setP1Feedback("玩家1 超時");
             setTimeout(() => evaluateVersusRound(null, currentP2Choice), 100); 
          } else if (activeTimerForPlayer === PlayerID.PLAYER2) { 
             setP2Feedback("玩家2 超時");
             setTimeout(() => evaluateVersusRound(currentP1Choice, null), 100); 
          }
          setActiveTimerForPlayer(null); 
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, [cancelRoundTimer, player1Choice, player2Choice, evaluateVersusRound, activeTimerForPlayer]);


  const handleAnswer = useCallback((selectedOption: string, player?: PlayerID) => {
    if (!currentQuestion || isRoundEvaluated) return;

    if (gameMode === GameMode.SINGLE) {
      if (!isSinglePlayerButtonsEnabled) return;
      setIsRoundEvaluated(true);
      setIsSinglePlayerButtonsEnabled(false);
      setPlayer1Choice(selectedOption); 

      const isCorrect = selectedOption === currentQuestion.correct_answer;
      if (isCorrect) {
        setPlayerScore(s => s + 1);
        setFeedbackMessage("✅ 正確！");
      } else {
        setWrongAnswerCount(c => c + 1);
        setFeedbackMessage(`❌ 答錯！正確: ${currentQuestion.correct_answer}`);
        setWrongAnswersList(prev => [...prev, { ...currentQuestion }]);
      }
      setQuestionsAnsweredTotal(q => q + 1);
      setTimeout(loadNextQuestion, SINGLE_PLAYER_DELAY_MS);
    } 
    else if (gameMode === GameMode.VERSUS_DESKTOP || gameMode === GameMode.VERSUS_MOBILE) {
        if (!player1Answered && !player2Answered) { 
            if (player === PlayerID.PLAYER1) {
                setPlayer1Answered(true);
                setPlayer1Choice(selectedOption);
                setP1Feedback("玩家1 已作答");
                setFeedbackMessage("等待 玩家2...");
                startRoundTimer(PlayerID.PLAYER2);
            } else if (player === PlayerID.PLAYER2) {
                setPlayer2Answered(true);
                setPlayer2Choice(selectedOption);
                setP2Feedback("玩家2 已作答");
                setFeedbackMessage("等待 玩家1...");
                startRoundTimer(PlayerID.PLAYER1);
            }
        } else { 
            if (player === PlayerID.PLAYER1 && !player1Answered && player2Answered) { 
                setPlayer1Answered(true);
                setPlayer1Choice(selectedOption);
                setP1Feedback("玩家1 已作答");
                cancelRoundTimer();
                setFeedbackMessage("處理結果中...");
                setTimeout(() => evaluateVersusRound(selectedOption, player2Choice), 100);
            } else if (player === PlayerID.PLAYER2 && !player2Answered && player1Answered) { 
                setPlayer2Answered(true);
                setPlayer2Choice(selectedOption);
                setP2Feedback("玩家2 已作答");
                cancelRoundTimer();
                setFeedbackMessage("處理結果中...");
                setTimeout(() => evaluateVersusRound(player1Choice, selectedOption), 100);
            }
        }
    }
    else if (gameMode === GameMode.VERSUS_SPEED_DESKTOP || gameMode === GameMode.VERSUS_SPEED_MOBILE) {
      if (roundFirstAnswerBy) return; 
      setIsRoundEvaluated(true); 
      setRoundFirstAnswerBy(player!);
      
      const isCorrect = selectedOption === currentQuestion.correct_answer;
      let feedback = "";
      let scoreChange = 0;

      if (isCorrect) {
        feedback = `${player === PlayerID.PLAYER1 ? "玩家1" : "玩家2"} 正確 (+1)！`;
        scoreChange = 1;
      } else {
        feedback = `${player === PlayerID.PLAYER1 ? "玩家1" : "玩家2"} 答錯 (-1)！`;
        scoreChange = -1;
        setWrongAnswersList(prev => [...prev, { ...currentQuestion }]);
      }

      if (player === PlayerID.PLAYER1) {
        setPlayer1Score(s => s + scoreChange);
        setP1Feedback(feedback);
        setPlayer1Choice(selectedOption); 
      } else {
        setPlayer2Score(s => s + scoreChange);
        setP2Feedback(feedback);
        setPlayer2Choice(selectedOption); 
      }
      setFeedbackMessage(`正確答案: ${currentQuestion.correct_answer}`);
      setQuestionsAnsweredTotal(q => q + 1);
      setTimeout(loadNextQuestion, VERSUS_SPEED_RESULT_DELAY_MS);
    }
  }, [currentQuestion, gameMode, isRoundEvaluated, isSinglePlayerButtonsEnabled, 
      player1Answered, player2Answered, roundFirstAnswerBy, 
      player1Choice, player2Choice, 
      loadNextQuestion, startRoundTimer, cancelRoundTimer, evaluateVersusRound, 
      activeTimerForPlayer
    ]);

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (currentScreen !== 'game' || !currentQuestion || 
        gameMode === GameMode.VERSUS_MOBILE || gameMode === GameMode.VERSUS_SPEED_MOBILE) {
      return;
    }
    
    if (isRoundEvaluated && gameMode !== GameMode.SINGLE) return; 
    if (gameMode === GameMode.SINGLE && !isSinglePlayerButtonsEnabled) return;


    const key = event.key.toLowerCase();
    let optionIndex = -1;
    let player: PlayerID | undefined = undefined;

    const p1Keys = ['q', 'w', 'e', 'a', 's']; 
    const p2Keys = ['1', '2', '3', '4', '5']; 

    if (p1Keys.includes(key)) {
      optionIndex = p1Keys.indexOf(key);
      player = PlayerID.PLAYER1;
    } else if (p2Keys.includes(key)) {
      optionIndex = p2Keys.indexOf(key);
      player = PlayerID.PLAYER2;
    }
    
    if (optionIndex !== -1 && optionIndex < currentQuestion.options.length) {
      const selectedOption = currentQuestion.options[optionIndex];
      if (gameMode === GameMode.SINGLE) { 
        handleAnswer(selectedOption);
      } else if (gameMode === GameMode.VERSUS_DESKTOP) {
        if (player === PlayerID.PLAYER1 && !player1Answered) {
            handleAnswer(selectedOption, PlayerID.PLAYER1);
        } else if (player === PlayerID.PLAYER2 && !player2Answered) {
            handleAnswer(selectedOption, PlayerID.PLAYER2);
        }
      } else if (gameMode === GameMode.VERSUS_SPEED_DESKTOP) {
        if (!roundFirstAnswerBy) handleAnswer(selectedOption, player); 
      }
    }
  }, [currentScreen, currentQuestion, gameMode, isRoundEvaluated, isSinglePlayerButtonsEnabled, player1Answered, player2Answered, roundFirstAnswerBy, handleAnswer]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []); 
  
  const handleRestart = () => {
    resetGameState();
    setCurrentScreen('start');
  };

  const handleReviewWrongAnswers = () => {
    setShowReviewModal(true);
  };


  if (currentScreen === 'start') {
    return <StartScreen onStartGame={handleStartGame} totalAvailableQuestions={TOTAL_QUESTIONS_AVAILABLE} />;
  }

  if (currentScreen === 'gameOver') {
    const canReview = (gameMode === GameMode.SINGLE || gameMode === GameMode.VERSUS_SPEED_DESKTOP || gameMode === GameMode.VERSUS_SPEED_MOBILE) && wrongAnswersList.length > 0;
    return (
      <>
        <GameOverScreen
          gameMode={gameMode}
          player1Score={player1Score}
          player2Score={player2Score}
          singlePlayerScore={playerScore}
          wrongAnswerCount={wrongAnswerCount}
          totalQuestionsAnswered={questionsAnsweredTotal} 
          targetQuestions={targetQuestions}
          onRestart={handleRestart}
          onReviewWrongAnswers={canReview ? handleReviewWrongAnswers : undefined}
          canReview={canReview}
        />
        {canReview && <ReviewModal isOpen={showReviewModal} onClose={() => setShowReviewModal(false)} wrongAnswers={wrongAnswersList} />}
      </>
    );
  }
  
  return currentQuestion ? (
    <>
      <GameScreen
        gameMode={gameMode}
        currentQuestion={currentQuestion}
        questionNumber={currentQuestionIndex + 1}
        totalQuestions={targetQuestions}
        player1Score={player1Score}
        player2Score={player2Score}
        singlePlayerScore={playerScore}
        wrongAnswersCount={wrongAnswerCount}
        onAnswer={handleAnswer}
        timerSecondsLeft={timerSecondsLeft}
        feedbackMessage={feedbackMessage}
        p1Feedback={p1Feedback}
        p2Feedback={p2Feedback}
        player1Choice={player1Choice}
        player2Choice={player2Choice}
        isRoundEvaluated={isRoundEvaluated}
        isSinglePlayerButtonsEnabled={isSinglePlayerButtonsEnabled}
        player1Answered={player1Answered} 
        player2Answered={player2Answered} 
        roundFirstAnswerBy={roundFirstAnswerBy} 
        onGoToHome={handleGoToHome} // Pass the new handler
      />
    </>
  ) : (
    <div className="flex items-center justify-center h-screen text-xl">準備題目中...</div>
  );
};

export default App;
