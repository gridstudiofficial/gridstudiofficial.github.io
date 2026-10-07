import {useTranslation} from 'react-i18next';
import {ProjectGrid} from "../components/Project/ProjectGrid.jsx";
import {projects} from "../data/Projects.js";

export default function Portfolio() {
	const {t} = useTranslation('pages');

	return (
		<div id="portfolio">
			<h1>{t('portfolio.title')}</h1>
			<ProjectGrid projects={projects}/>
		</div>
	);
}
