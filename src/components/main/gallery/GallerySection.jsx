import '../../../assets/styles/main.scss'
import GalleryItem from './GalleryItem'
import styles from './gallerySection.module.scss'

const galleryArray = [
	{
		author: 'Булах Дарья',
		date: '02/23',
		title: 'Майкл Джексон',
		description: 'Работа выполнена на холсте размером 150х80',
		category: 'Живопись',
		imageUrl: require('../../../assets/img/imageGallery1.png'),
	},
	{
		author: 'Булах Дарья',
		date: '02/23',
		title: 'Киты',
		description: 'заливка гипса в силиконовые формы',
		category: 'гипсовые фигуры',
		imageUrl: require('../../../assets/img/imageGallery2.png'),
	},
	{
		author: 'Булах Дарья',
		date: '02/23',
		title: 'срез камня',
		description: 'Работа выполнена на фанере, с  использованием битых стекол',
		category: 'эпоксидная смола',
		imageUrl: require('../../../assets/img/imageGallery3.png'),
	},
]

function GallerySection() {
	return (
		<section className={styles.gallery}>
			<div className='container'>
				<div className={styles.gallery__inner}>
					<div className='title-container'>
						<h2>[ Галерея ]</h2>
						<h3>
							Игра с цветом является важным инструментом создания красивых и
							гармоничных произведений искусства.
						</h3>
					</div>
					<ul className={styles.galleryList}>
						{galleryArray.map((item, index) => (
							<GalleryItem key={index} {...item} />
						))}
					</ul>
					<button className={styles.gallery__buttonLink}>Узнать больше</button>
				</div>
			</div>
		</section>
	)
}

export default GallerySection
