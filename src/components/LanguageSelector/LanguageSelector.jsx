import {useEffect, useRef, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Language} from '../../i18n.js';
import LanguageIcon from '../../assets/ui/icons/language_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg?react';
import "./LanguageSelector.css";

export default function LanguageSelector() {
	const {i18n} = useTranslation();
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef(null);

	const toggleDropdown = () => setIsOpen((prev) => !prev);

	const selectLanguage = (lang) => {
		i18n.changeLanguage(lang);
		setIsOpen(false);
	};

	// Cierra el menú si se hace clic fuera del componente
	useEffect(() => {
		function handleClickOutside(event) {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		}

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	// Obtener la etiqueta del idioma actual
	const getCurrentLangLabel = () => {
		const current = i18n.language || Language.ES;
		if (current.startsWith('es')) return 'Español';
		if (current.startsWith('en')) return 'English';
		return 'Español';
	};

	return (
		<div className="language-dropdown" ref={dropdownRef}>
			<button type="button" onClick={toggleDropdown} className="lang-dropdown-btn">
				<span className="lang-dropdown-label">
					<LanguageIcon aria-hidden="true" className="icon-styled"/>
					{getCurrentLangLabel()}
				</span>
				<span className="lang-dropdown-arrow">▼</span>
			</button>
			{isOpen && (
				<ul className="lang-dropdown-menu">
					<li
						className={i18n.language.startsWith('es') ? 'active-lang' : ''}
						onClick={() => selectLanguage(Language.ES)}
					>
						Español
					</li>
					<li
						className={i18n.language.startsWith('en') ? 'active-lang' : ''}
						onClick={() => selectLanguage(Language.EN)}
					>
						English
					</li>
				</ul>
			)}
		</div>
	);
}
