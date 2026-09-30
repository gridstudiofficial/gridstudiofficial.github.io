import {useTranslation} from 'react-i18next';
import {PeopleGrid} from "../components/People/PeopleGrid.jsx";
import {people} from "../data/People.js";
import StudioSocials from "../components/StudioSocials/StudioSocials.jsx";

export default function Social() {
	const {t} = useTranslation();

	return (
		<div id="socials">
			<h1>Socials</h1>
			<p>
				Check out what the team is up to.
			</p>
			<StudioSocials/>
			<h2>People</h2>
			<p>
				Reach out for specific members.
			</p>
			<PeopleGrid people={people}/>
		</div>
	);
}
