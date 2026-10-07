import {useTranslation} from 'react-i18next';
import {PeopleGrid} from "../components/People/PeopleGrid.jsx";
import {people} from "../data/People.js";
import StudioSocials from "../components/StudioSocials/StudioSocials.jsx";

export default function Social() {
	const {t} = useTranslation('pages');

	return (
		<div id="socials">
			<h1>{t('social.title')}</h1>
			<p>{t('social.intro')}</p>
			<StudioSocials/>
			<h2>{t('social.peopleTitle')}</h2>
			<p>{t('social.peopleIntro')}</p>
			<PeopleGrid people={people}/>
		</div>
	);
}
