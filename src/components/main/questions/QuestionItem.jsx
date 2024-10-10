import styles from './QuestionsSection.module.scss'

function QuestionItem({ index, title, onClick, className }) {
	return (
		<li onClick={() => onClick(index)} className={className}>
			<span className=''>[ 0{index + 1} ]</span>
			<p>{title}</p>
			<button>
				<svg
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<rect width='24' height='24' fill='none' />
					<path
						d='M12 2C12.5523 2 13 2.44772 13 3L13 11L21 11C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13L13 13L13 21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21L11 13L3 13C2.44772 13 2 12.5523 2 12C2 11.4477 2.44771 11 3 11L11 11L11 3C11 2.44771 11.4477 2 12 2Z'
						fill={
							className === styles.questionItem__active ? '#960048' : '#C3C3C3'
						}
					/>
				</svg>
			</button>
		</li>
	)
}

export default QuestionItem
