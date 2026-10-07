import "./GridTacticsFirstImpression.css"
import {useTranslation} from "react-i18next";

export function GridTacticsFirstImpression() {
	const {t} = useTranslation('pages');

	return (
		<>
			<img
				src="/grid_studio_logo/Grid%20Studio%20Logo%20Wide.svg"
				alt="Grid Studio Logo"
				className="logo logo-wide"
			/>

			<img
				src="/grid_studio_logo/Grid%20Studio%20Logo%20Square.svg"
				alt="Grid Studio Logo"
				className="logo logo-mobile"
			/>

			<h2>{t('home.title')}</h2>
			<p>{t('home.description')}</p>
		</>
	)
}
