import {useTranslation} from 'react-i18next';
import {GridTacticsFirstImpression} from "../components/GridTacticsFirstImpression/GridTacticsFirstImpression.jsx";



export default function Home() {
	const {t} = useTranslation();

	return (
		<div id="center">
			<h1 className="visually-hidden">Grid Studio</h1>
			<GridTacticsFirstImpression/>
		</div>
	);
}
