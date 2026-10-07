import "./PersonPreview.css";
import SocialLink from "../SocialLink/SocialLink.jsx";
import {useTranslation} from "react-i18next";

export function PersonPreview({person}) {
	const {t} = useTranslation('people');

	return (
		<div className="person-preview" id={person.id}>
			<div className="person-preview__media">
				<img
					src={person.image}
					alt={t('imageAlt', {name: person.name})}
				/>
			</div>
			<div className="person-preview__content">
				<div className="person-name">{person.name}</div>
				{person.disciplines.length > 0 && (
					<>
						<p className={"section-title"}>{t('skills')}</p>
						<ul className="person-preview__disciplines">
							{person.disciplines.map((discipline) => (
								<li key={discipline}>
									{discipline}
								</li>
							))}
						</ul>
					</>
				)}
				{person.disciplines.length > 0 && (
					<>
						<p className={"section-title"}>{t('links')}</p>
						<ul className="person-preview__disciplines">
							{person.links.map((link) => (
								<li key={link}>
									<SocialLink url={link}/>
								</li>
							))}
						</ul>
					</>
				)}
			</div>
		</div>
	)
}
