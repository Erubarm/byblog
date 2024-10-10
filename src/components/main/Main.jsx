import ArticleSection from './article/ArticleSection'
import GallerySection from './gallery/GallerySection'
import QuestionsSection from './questions/QuestionsSection'
import WelcomeSection from './welcome-section/WelcomeSection'

function Main() {
	return (
		<main>
			<WelcomeSection />
			<GallerySection />
			<ArticleSection />
			<QuestionsSection />
		</main>
	)
}

export default Main
