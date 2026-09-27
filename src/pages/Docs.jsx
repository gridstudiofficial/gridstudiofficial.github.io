import { useTranslation } from 'react-i18next';

export default function Docs() {
	const { t } = useTranslation();

	return (
		<div id="docs">
			<h1>About the game</h1>
			<p>
				Dummy text.
			</p>
			<h2>Game Design Document</h2>
			<p>
				The next segment contains an updated version of our <b>Game Design Document</b>.
			</p>
		</div>
	);
}
