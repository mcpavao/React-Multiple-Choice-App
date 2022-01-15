import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'How many goals has Pelé scored in his career?',
			answerOptions: [
				{ answerText: '1050 goals', isCorrect: false },
				{ answerText: '1537 goals', isCorrect: false },
				{ answerText: '1282 goals', isCorrect: true },
				{ answerText: '1385 goals', isCorrect: false },
			],
		},
		{
			questionText: 'The King of the Netherlands Willem-Alexander is married with?',
			answerOptions: [
				{ answerText: 'Queen Elizabeth II', isCorrect: false },
				{ answerText: 'Queen Margrethe II', isCorrect: false },
				{ answerText: 'Queen Maximina', isCorrect: true },
				{ answerText: 'Queen Band', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'What year was the World Cup in the USA?',
			answerOptions: [
				{ answerText: '1990', isCorrect: false },
				{ answerText: '1994', isCorrect: true },
				{ answerText: '1998', isCorrect: false },
				{ answerText: '2014', isCorrect: false },
			],
		},
		{
			questionText: 'What year was the World Cup in the USA?',
			answerOptions: [
				{ answerText: '1990', isCorrect: false },
				{ answerText: '1994', isCorrect: true },
				{ answerText: '1998', isCorrect: false },
				{ answerText: '2014', isCorrect: false },
			],
		},
		{
			questionText: 'What year was the World Cup in the USA?',
			answerOptions: [
				{ answerText: '1990', isCorrect: false },
				{ answerText: '1994', isCorrect: true },
				{ answerText: '1998', isCorrect: false },
				{ answerText: '2014', isCorrect: false },
			],
		},
		{
			questionText: 'What year was the World Cup in the USA?',
			answerOptions: [
				{ answerText: '1990', isCorrect: false },
				{ answerText: '1994', isCorrect: true },
				{ answerText: '1998', isCorrect: false },
				{ answerText: '2014', isCorrect: false },
			],
		},
		{
			questionText: 'What year was the World Cup in the USA?',
			answerOptions: [
				{ answerText: '1990', isCorrect: false },
				{ answerText: '1994', isCorrect: true },
				{ answerText: '1998', isCorrect: false },
				{ answerText: '2014', isCorrect: false },
			],
		},
		{
			questionText: 'What year was the World Cup in the USA?',
			answerOptions: [
				{ answerText: '1990', isCorrect: false },
				{ answerText: '1994', isCorrect: true },
				{ answerText: '1998', isCorrect: false },
				{ answerText: '2014', isCorrect: false },
			],
		},
		{
			questionText: 'What year was the World Cup in the USA?',
			answerOptions: [
				{ answerText: '1990', isCorrect: false },
				{ answerText: '1994', isCorrect: true },
				{ answerText: '1998', isCorrect: false },
				{ answerText: '2014', isCorrect: false },
			],
		},
	];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if(isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if(nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
    
  }

	return (
		<div className='app'>
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
			{showScore ? (
				<div className='score-section'>You scored {score} out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOptions) => 
            <button onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>)}
					</div>
				</>
			)}
		</div>
	);
}
