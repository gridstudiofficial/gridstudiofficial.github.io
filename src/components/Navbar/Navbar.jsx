import {NavLink} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import './Navbar.css';
import LanguageSelector from "../LanguageSelector/LanguageSelector.jsx";

export default function Navbar() {
	const {t} = useTranslation();

	return (
		<nav className="nav-bar">
			<div className="nav-bar-buttons">
				<NavLink to="/" end className={({isActive}) => (isActive ? 'active-link' : '')} viewTransition>
					{t('nav.home')}
				</NavLink>
				<NavLink to="/docs" className={({isActive}) => (isActive ? 'active-link' : '')} viewTransition>
					{t('nav.docs')}
				</NavLink>
				<NavLink to="/portfolio" className={({isActive}) => (isActive ? 'active-link' : '')} viewTransition>
					{t('nav.portfolio')}
				</NavLink>
				<NavLink to="/social" className={({isActive}) => (isActive ? 'active-link' : '')} viewTransition>
					{t('nav.social')}
				</NavLink>
			</div>
			<LanguageSelector/>
		</nav>
	);
}
