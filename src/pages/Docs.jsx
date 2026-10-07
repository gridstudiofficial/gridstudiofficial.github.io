import {Trans, useTranslation} from 'react-i18next';
import MarkdownRenderer from "../components/MarkdownRenderer/MarkdownRenderer.jsx";

export default function Docs() {
	const {t} = useTranslation('pages');

	return (
		<div id="docs">
			<h1>{t('docs.title')}</h1>
			<p>{t('docs.intro')}</p>
			<h2>{t('docs.gddTitle')}</h2>
			<p><Trans ns="pages" i18nKey="docs.gddIntro" components={{bold: <b/>}}/></p>
			<MarkdownRenderer fileName={"./gdd/GDD.md"}/>
			<MarkdownRenderer fileName={"./gdd/Levels.md"}/>
		</div>
	);
}
