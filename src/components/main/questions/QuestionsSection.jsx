import React, { useState } from 'react'
import QuestionItem from './QuestionItem'
import styles from './QuestionsSection.module.scss'

const questionsArray = [
	{
		title: 'Искусством может заняться каждый?',
		description:
			'Искусством может заняться каждый, главное желание и стремление учиться новому',
		active: 1,
	},
	{
		title: 'Что такое арт-терапия?',
		description:
			'Метод лечения, использующий творческие процессы для улучшения самочувствия.',
		active: 0,
	},
	{
		title: 'Что нужно чтобы рисовать на природе?',
		description:
			'Для рисования на природе нужны блокнот, карандаши, удобная сумка и вдохновение.',
		active: 0,
	},
	{
		title: 'Мастер-классы это только для детей?',
		description:
			'Мастер-классы предназначены для всех возрастов, не только для детей.',
		active: 0,
	},
]

function QuestionsSection() {
	const [activeQuestion, setActiveQuestion] = useState(0)

	console.log(activeQuestion)

	return (
		<section className={styles.questions}>
			<div className='container'>
				<div className='title-container'>
					<h2>[ Вопросы ]</h2>
					<h3>Всегда готовы выслушать и ответить на ваши вопросы.</h3>
				</div>
				<div className={styles.questionsBlock}>
					<ul className={styles.questionList}>
						{questionsArray.map((item, index) => (
							<QuestionItem
								key={index}
								index={index}
								title={item.title}
								onClick={setActiveQuestion}
								className={
									activeQuestion === index
										? styles.questionItem__active
										: styles.questionItem
								}
							/>
						))}
					</ul>
					{questionsArray.map((item, index) => (
						<p
							key={index}
							className={
								activeQuestion === index
									? styles.questionItem__description__active
									: styles.questionItem__description
							}
						>
							{item.description}
						</p>
					))}
				</div>
			</div>
		</section>
	)
}

export default QuestionsSection
