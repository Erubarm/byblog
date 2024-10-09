import styles from './ArticleItem.module.scss'

function ArticleItem({ index, title, description, date }) {
	return (
		<li key={index} className={`${styles.articleItem} articleItem__${index}`}>
			<div className={styles.articleItem__title}>
				<h4 dangerouslySetInnerHTML={{ __html: title }}></h4>
				<p dangerouslySetInnerHTML={{ __html: description }}></p>
			</div>
			<span>{date}</span>
		</li>
	)
}

export default ArticleItem
