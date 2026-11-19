
import { useState } from "react";
import "../PreviewCard.css";
import "./PersonPreview.css";
import SocialLink from "../SocialLink/SocialLink.jsx";
import { useTranslation } from "react-i18next";

export function PersonPreview({ person }) {
	const { t } = useTranslation("people");
	const [isFlipped, setIsFlipped] = useState(false);

	return (
		<article
			className={`person-preview ${isFlipped ? "person-preview--flipped" : ""}`}
			id={person.id}
			onClick={() => setIsFlipped(!isFlipped)}
		>
			<div className="person-preview__card">

				{/* CARA DELANTERA */}
				<div className="person-preview__face person-preview__front">
					<div className="person-preview__media">
						<img
							src={person.image}
							alt={t("imageAlt", { name: person.name })}
						/>
					</div>

					<h2 className="person-name">{person.name}</h2>
				</div>

				{/* CARA TRASERA */}
				<div className="person-preview__face person-preview__back">
					<h2 className="person-name">{person.name}</h2>

					{person.disciplines.length > 0 && (
						<div className="person-preview__section">
							<p className="section-title">{t("skills")}</p>

							<ul className="person-preview__disciplines">
								{person.disciplines.map((discipline) => (
									<li key={discipline}>{discipline}</li>
								))}
							</ul>
						</div>
					)}

					{person.links.length > 0 && (
						<div className="person-preview__section">
							<p className="section-title">{t("links")}</p>

							<ul className="person-preview__links">
								{person.links.map((link) => (
									<li
										key={link}
										onClick={(event) => event.stopPropagation()}
									>
										<SocialLink url={link} />
									</li>
								))}
							</ul>
						</div>
					)}
				</div>

			</div>
		</article>
	);
}
