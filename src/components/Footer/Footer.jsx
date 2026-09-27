import {useTranslation} from "react-i18next";
import "./Footer.css";

export default function Footer() {
	const { t } = useTranslation();
	return (
		<footer id="footer">
			{t('footer.text')}
		</footer>
	)
}