import React from 'react'
import arrowLink from '../../../assets/icons/arrow-link.svg'
import styles from './galleryItem.module.scss'

function GalleryItem({
	index,
	author,
	date,
	title,
	description,
	category,
	imageUrl,
}) {
	return (
		<li key={index} className={styles.galleryItem}>
			<span>{date}</span>
			<div className={styles.galleryItem__names}>
				<p>{author}</p>
				<p>{title}</p>
			</div>
			<img src={imageUrl} alt={title} />
			<div className={styles.galleryItem__description}>
				<div className={styles.galleryItem__description__text}>
					<p>{description}</p>
					<p>{category}</p>
				</div>
				<button className={styles.galleryItem__description__button}>
					<img src={arrowLink} alt='arrow link' />
				</button>
			</div>
		</li>
	)
}

export default GalleryItem
