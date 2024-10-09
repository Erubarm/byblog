import React from 'react'

import AuthLink from './AuthLink'
import FavoriteLink from './FavoritesLink'
import InputSearch from './InputSearch'

function Header() {
	const [activePage, setActivePage] = React.useState(0)

	const pages = ['Главная', 'Галерея', 'Статьи', 'Вопросы']
	return (
		<header>
			<div className='container'>
				<div className='header__inner'>
					<span className='logo-text'>БУБлог</span>
					<nav>
						<ul>
							{pages.map((title, index) => (
								<li
									key={index}
									onClick={() => setActivePage(index)}
									className={activePage === index ? 'active-page' : ''}
								>
									{title}
								</li>
							))}
						</ul>
					</nav>
					<div className='block-buttons'>
						<InputSearch />
						<FavoriteLink />
						<AuthLink />
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
