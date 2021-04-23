import React, { useState } from 'react';
import { fetchQuestions } from './API'; 
// Components
import QuestionCard from './components/QuestionCard';
// Types
import { QuestionState, Difficulty } from './API'
// Styles
import { GlobalStyle, Wrapper } from './App.styles';

export type UserAnswerObject = {
  question: string;
  answer: string;
  isCorrect: boolean;
  correctAnswer: string;
}

const TOTAL_QUESTIONS = 10;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  // TODO: Implement error-handling?
  const startDevPrep = async () => {
    setLoaded(false);
    setLoading(true);
    setGameOver(false);

    const fetchedQuestions = await fetchQuestions(TOTAL_QUESTIONS, Difficulty.EASY);

    setQuestions(fetchedQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
    setLoaded(true);
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      // Get user's answer
      const userAnswer = e.currentTarget.value;
      // Check answer against correct answer
      const isCorrect = questions[number].correct_answer === userAnswer;
      // Add one to score if answer is correct
      if (isCorrect) {
        setScore((prev) => prev + 1);
      }
      // Save answer in the array representing user answers
      const userAnswerObject = { 
        question: questions[number].question,
        answer: userAnswer,
        isCorrect: isCorrect,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, userAnswerObject]);
    }
  }

  const nextQuestion = () => {
    // Move on to the next question if not the last question
    const nextQuestionIndex = number + 1;
    if (nextQuestionIndex < TOTAL_QUESTIONS) {
      setNumber(nextQuestionIndex);
    }
  }

  const finishGame = () => {
    setGameOver(true);
  }

  return (
    <>
      <GlobalStyle/>  
      <Wrapper>
        <h1>quiz<span>_</span>me</h1> 
        {!loading && !loaded && (
          <p>
            Test your knowledge on a variety of fun and interesting topics such as Film and TV, 
            Music, Pop Culture, History and Art!
          </p>)}
        {gameOver && !loading && userAnswers.length !== TOTAL_QUESTIONS && (
          <button className="start" onClick={startDevPrep}>
            start
          </button>
        )}
        {gameOver && !loading && (
          <>
            {score < 5 && (
              <p>
                You scored {score} out of {TOTAL_QUESTIONS}. Oh my...that's embarassing.
              </p>)}
            {score === 5 && (
              <p>
                You scored {score} out of {TOTAL_QUESTIONS}. Wow...you really are doing the bare 
                minimum, huh?
              </p>)}
            {score === 6 && (
              <p>
                You scored {score} out of {TOTAL_QUESTIONS}. Hey, at least you gave it a shot.
              </p>)}
            {score === 7 && (
              <p>
                You scored {score} out of {TOTAL_QUESTIONS}. You're neither average nor 
                high-achieving.
              </p>)}
            {score === 8 && (
              <p>
                You scored {score} out of {TOTAL_QUESTIONS}. Mhmmm...maybe you are worth my time
                after all.
              </p>)}
            {score === 9 && (
              <p>
                You scored {score} out of {TOTAL_QUESTIONS}. So close, yet so far.
              </p>)}
            {score === 7 && (
              <p>
                You scored {score} out of {TOTAL_QUESTIONS}. Be honest, you cheated...didn't you?
              </p>)}
            <button className="start" onClick={startDevPrep}>
              play again
            </button>
          </>
        )}
        {!gameOver && !loading && <p className="score">{score}</p>}
        {loading && <p>loading questions...</p>} 
        {!loading && !gameOver && ( 
          <QuestionCard
            questionNumber={number + 1 } // Start at question 1
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers} 
            userAnswer={userAnswers ? userAnswers[number] : undefined} // Get answer corresponding to q
            callback={checkAnswer}
          /> 
        )}
        {/* Don't show 'Next Question' object unless user had provided at least one answer */}
        {!gameOver && 
        !loading && 
        (userAnswers.length === number + 1) && (number !== TOTAL_QUESTIONS - 1) && (
          <button className="next" onClick={nextQuestion}>
            next question
          </button> 
        )}
        {!gameOver && 
        !loading && 
        (userAnswers.length === number + 1) && (number === TOTAL_QUESTIONS - 1) && (
          <button className="next" onClick={finishGame}>
            finish
          </button> 
        )}
      </Wrapper>
    </>
  );
}

export default App;
