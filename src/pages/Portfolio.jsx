import {useTranslation} from 'react-i18next';
import {ProjectGrid} from "../components/Project/ProjectGrid.jsx";
import {projects} from "../data/Projects.js";
import {PeopleGrid} from "../components/People/PeopleGrid.jsx";
import {people} from "../data/People.js";

export default function Portfolio() {
	const {t} = useTranslation('pages');

	return (
		<div id="portfolio">
			<h1>{t('portfolio.title')}</h1>
			<ProjectGrid projects={projects}/>
			<section>
				<h1>{t('portfolio.peopleTitle')}</h1>
				<p>{t('portfolio.peopleIntro')}</p>
				<PeopleGrid people={people}/>
			</section>
		</div>
	);
}



