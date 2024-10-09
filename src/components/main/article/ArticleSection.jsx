import ArticleItem from './ArticleItem'
import styles from './ArticleSection.module.scss'

const articleArray = [
	{
		title: 'Artsy анализирует состояние рынка <br> фотографии',
		description:
			'портал Artsy анализирует состояние рынка фотографии и сообщает о новых <br>аукционных рекордах.',
		date: '20 марта 2024',
	},
	{
		title: 'Открыт 232-й кураторский <br>аукцион AI «21-й век',
		description:
			'открыт 232-й кураторский аукцион AI «21-й век. Современное <br>российское искусство».',
		date: '20 марта 2024',
	},
	{
		title: 'HISCOX Art and AI Report <br>2024',
		description:
			'коллекционеры искусства — об искусственном <br>интеллекте" - отчет HISCOX Art and AI Report 2024 <br> сообщает о том, что коллекционеры искусства все <br>больше интересуются искусственным интеллектом.',
		date: '26 марта 2024',
	},
	{
		title: 'Объем кредитов под залог предметов <br>искусства',
		description:
			'объем кредитов под залог предметов искусства растет последние пять лет и может составить <br>$36 млрд к концу года.',
		date: '26 марта 2024',
	},
]

function ArcticleSection() {
	return (
		<section className={styles.article}>
			<div className='container'>
				<div className='title-container'>
					<h2>[ Статьи ]</h2>
					<h3>Просмотрите интересные статьи про искусство.</h3>
				</div>
				<ul className={styles.articleList}>
					{articleArray.map((item, index) => (
						<ArticleItem key={index} {...item} />
					))}
				</ul>
			</div>
		</section>
	)
}

export default ArcticleSection
