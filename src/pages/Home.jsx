import {useTranslation} from 'react-i18next';


function GridTacticsFirstImpression() {
	return (
		<>
			<h2>Grid Tactics</h2>
			<p>
				Grid Tactics is a strategy game were you take the role of an army commander.
				Take part in dire battles that will test all of your might!
			</p>
		</>
	)
}

export default function Home() {
	const {t} = useTranslation();

	return (
		<div id="center">
			<h1>Grid Studio</h1>
			<GridTacticsFirstImpression/>
		</div>
	);
}
