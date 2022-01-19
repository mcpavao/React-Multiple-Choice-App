import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';



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

const languages = [
	{
	  code: 'fr',
	  name: 'Français',
	  country_code: 'fr',
	},
	{
	  code: 'en',
	  name: 'English',
	  country_code: 'gb',
	},
	{
	  code: 'nl',
	  name: 'Dutch',
	  country_code: 'nl',
	},
	{
	  code: 'pt',
	  name: 'Portuguese',
	  country_code: 'pt',
	},
  ]

  const GlobeIcon = ({ width = 24, height = 24 }) => (
	<svg
	  xmlns="http://www.w3.org/2000/svg"
	  width={width}
	  height={height}
	  fill="currentColor"
	  className="bi bi-globe"
	  viewBox="0 0 16 16"
	>
	  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
	</svg>
  )

export default function App() {
	const { t } = useTranslation()

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

						
						<div className="language-select">
							<div className="d-flex justify-content-end align-items-center language-select-root">
								<div className="dropdown">
									<button
									className="btn btn-link dropdown-toggle"
									type="button"
									id="dropdownMenuButton1"
									data-bs-toggle="dropdown"
									aria-expanded="false"
									>
										<GlobeIcon />
									</button>
									<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
										{languages.map(({ code, name, country_code }) => (
											<li key={name}>
												<span className={`flag-icon flag-icon-${country_code} mx-2`}></span>
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
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
