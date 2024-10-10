import styles from './Footer.module.scss'

function Footer() {
	return (
		<footer>
			<div className='container'>
				<div className={styles.footer__inner}>
					<div className={styles.footer__inner__links}>
						<div className={styles.footer__blockPages}>
							<h4>БуБлог</h4>
							<ul>
								<li>
									<button>Главная</button>
								</li>
								<li>
									<button>Галерея</button>
								</li>
								<li>
									<button>Статьи</button>
								</li>
								<li>
									<button>Вопросы</button>
								</li>
							</ul>
						</div>
						<div className={styles.footer__blockCategories}>
							<h4>Категории</h4>
							<ul>
								<li>
									<button>Живопись</button>
								</li>
								<li>
									<button>Эпоксидная смола</button>
								</li>
								<li>
									<button>Кокосовые свечи</button>
								</li>
								<li>
									<button>Витраж</button>
								</li>
								<li>
									<button>Гипсовые фигуры</button>
								</li>
							</ul>
						</div>
						<div className={styles.footer__blockPossobilities}>
							<h4>Возможности</h4>
							<ul>
								<li>
									<button>Добавить статью</button>
								</li>
								<li>
									<button>Добавить картинку</button>
								</li>
								<li>
									<button>Поискать идеи</button>
								</li>
							</ul>
						</div>
						<div className={styles.footer__blockLinks}>
							<h4>Соцсети</h4>
							<ul>
								<li>
									<a href='#!'>Вконтакте</a>
								</li>
								<li>
									<a href='#!'>Телеграм</a>
								</li>
								<li>
									<a href='#!'>YouTube</a>
								</li>
							</ul>
						</div>
					</div>
					<p className={styles.footer__disclaimer}>
						Пользователь уведомлен, что любые материалы, размещенные на сайте,
						являются объектами интеллектуальной собственности БуБлог
						-специализированный на развлекательный контент.
						<br />
						<br />
						Любая информация, представленная на данном сайте, носит
						исключительно информационный характер и ни при каких условиях
						не является публичной офертой, определяемой положениями статьи 437
						ГК РФ.
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
