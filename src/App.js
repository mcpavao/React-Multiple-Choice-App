import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';


export default function App() {

	const languages = [
		{
			code: 'fr',
			name: 'Français',
			country_code: 'fr'
		},
		{
			code: 'en',
			name: 'English',
			country_code: 'gb'
		},
		{
			code: 'pt',
			name: 'Portuguese',
			country_code: 'pt'
		},
	]

	const { t } = useTranslation()

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
			questionText: 'Which continent has the highest number of countries?',
			answerOptions: [
				{ answerText: 'Asia', isCorrect: false },
				{ answerText: 'Europe', isCorrect: false },
				{ answerText: 'North America', isCorrect: false },
				{ answerText: 'Africa', isCorrect: true },
			],
		},
		{
			questionText: 'Which one is the largest tropical rain forest in the world?',
			answerOptions: [
				{ answerText: 'Amazonia', isCorrect: true },
				{ answerText: 'Bosawas', isCorrect: false },
				{ answerText: 'Southeast Asian Rain Forest', isCorrect: false },
				{ answerText: 'Daintree', isCorrect: false },
			],
		},
		{
			questionText: 'Which one is the longest continental mountain range in the world?',
			answerOptions: [
				{ answerText: 'Himalaya', isCorrect: false },
				{ answerText: 'Andes', isCorrect: true },
				{ answerText: 'Rocky Mountains', isCorrect: false },
				{ answerText: 'Ural Mountains', isCorrect: false },
			],
		},
		{
			questionText: 'Which one is the smallest ocean in the World?',
			answerOptions: [
				{ answerText: 'Indian', isCorrect: false },
				{ answerText: 'Pacific', isCorrect: false },
				{ answerText: 'Atantic', isCorrect: false },
				{ answerText: 'Artic', isCorrect: true },
			],
		},
		{
			questionText: 'Which country gifted the "Statue of Liberty" to USA in 1886?',
			answerOptions: [
				{ answerText: 'France', isCorrect: true },
				{ answerText: 'Canada', isCorrect: false },
				{ answerText: 'England', isCorrect: false },
				{ answerText: 'Fiji Island', isCorrect: false },
			],
		},
		{
			questionText: 'In which country, white elephant is found',
			answerOptions: [
				{ answerText: 'India', isCorrect: false },
				{ answerText: 'Sri Lanka', isCorrect: false },
				{ answerText: 'Thailand', isCorrect: true },
				{ answerText: 'Malaysia', isCorrect: false },
			],
		},
		{
			questionText: 'Which F1 Driver has most titles?',
			answerOptions: [
				{ answerText: 'Michael Schumacher', isCorrect: true },
				{ answerText: 'Ayrton Senna', isCorrect: false },
				{ answerText: 'Lewis Hamilton', isCorrect: true },
				{ answerText: 'Alan Prost', isCorrect: false },
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
	} 
	else {
      setShowScore(true);
    }
    
  }

	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>You scored {score} out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>{t('question_number')} {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>

						{/* To create the current image that correspond the current question*/}
						<div className='current-image'></div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOptions) => 
            			<button onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}>
						{answerOptions.answerText}</button>)}
					</div>
				</>
			)}
		</div>
	);
}
