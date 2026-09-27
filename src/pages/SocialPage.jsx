import { useTranslation } from 'react-i18next';
import {PeopleGrid} from "../components/People/PeopleGrid.jsx";
import {people} from "../data/People.js";

export default function SocialPage() {
	const { t } = useTranslation();

	return (
		<div id="socials">
			<h1>Socials</h1>
			<p></p>
			<h2>People</h2>
			<PeopleGrid people={people} />
		</div>
	);
}
