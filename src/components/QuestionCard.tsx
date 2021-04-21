import React from 'react';
// Types
import { UserAnswerObject } from '../App'; 
// Styles
import { Wrapper, ButtonWrapper } from './QuestionCard.styles';

// You can call this whatever you want, doesn't need to have the name Props
type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: UserAnswerObject | undefined;
  questionNumber: number;
  totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({
    question, 
    answers,
    callback, 
    userAnswer, 
    questionNumber, 
    totalQuestions 
}) => (
  <Wrapper>
      <p className="number">
          Question: {questionNumber} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{__html: question}}/>
      <div>
        {answers.map(answer => (
          <ButtonWrapper 
            key={answer} 
            isCorrect={userAnswer?.correctAnswer === answer}
            userClicked={userAnswer?.answer === answer}
          >
            <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                <span dangerouslySetInnerHTML={{__html: answer}}/>
            </button>
          </ButtonWrapper>
        ))}
      </div>
  </Wrapper>
);

export default QuestionCard;