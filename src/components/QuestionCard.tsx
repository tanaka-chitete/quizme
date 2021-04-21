import React from 'react';

// You can call this whatever you want, doesn't need to have the name Props
type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any;
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
  <div>
      <p className="number">
          Question: {questionNumber} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{__html: question}}/>
      <div>
        {answers.map(answer => (
          <div key={answer}>
            <button disabled={userAnswer} value={answer} onClick={callback}>
                <span dangerouslySetInnerHTML={{__html: answer}}/>
            </button>
          </div>
        ))}
      </div>
  </div>
);

export default QuestionCard;