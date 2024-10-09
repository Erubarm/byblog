import heart from '../../assets/icons/heart.svg'

function FavoriteLink() {
	return (
		<button className='header__favorite-link'>
			<img src={heart} alt='heart' />
		</button>
	)
}

export default FavoriteLink
