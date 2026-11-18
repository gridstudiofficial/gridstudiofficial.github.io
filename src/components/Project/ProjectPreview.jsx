
import { useState } from "react";
import { Link } from "react-router-dom";
import "../PreviewCard.css";
import "./ProjectPreview.css";
import { useTranslation } from "react-i18next";

export function ProjectPreview({ project }) {
	const isVideo = /\.(mp4|webm|ogg)$/i.test(project.media);
	const { t } = useTranslation("projects");
	const [isFlipped, setIsFlipped] = useState(false);

	return (
		<article
			className={`project-preview ${isFlipped ? "project-preview--flipped" : ""}`}
			onClick={() => setIsFlipped(!isFlipped)}
		>
			<div className="project-preview__card">

				{/* CARA DELANTERA */}
				<div className="project-preview__face project-preview__front">
					<div className="project-preview__media">
						{isVideo ? (
							<video
								src={project.media}
								autoPlay
								muted
								loop
								playsInline
							/>
						) : (
							<img src={project.media} alt={project.name} />
						)}
					</div>

					<h2>{project.name}</h2>
				</div>

				{/* CARA TRASERA */}
				<div className="project-preview__face project-preview__back">
					<h2>{project.name}</h2>

					<p>{t(project.descriptionKey)}</p>

					{project.disciplines.length > 0 && (
						<ul className="project-preview__disciplines">
							{project.disciplines.map((discipline) => (
								<li key={discipline}>{discipline}</li>
							))}
						</ul>
					)}

					{project.people.length > 0 && (
						<div className="project-preview__creators">
              <span className="project-preview__creator-label">
                Creador
              </span>

							<ul className="project-preview__people">
								{project.people.map((person) => (
									<li key={person.id}>
										<Link
											to={`/portfolio#${person.id}`}
											onClick={(event) => event.stopPropagation()}
										>
											{person.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
					)}

					{project.link?.url && (
						<div className="project-preview__links">
							<a
								className="link"
								href={project.link.url}
								target="_blank"
								rel="noopener noreferrer"
								onClick={(event) => event.stopPropagation()}
							>
								{t("Página del proyecto  ↗")}
							</a>
						</div>
					)}
				</div>

			</div>
		</article>
	);
}
