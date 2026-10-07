import {Link} from 'react-router-dom';
import "../PreviewCard.css";
import "./ProjectPreview.css";
import {useTranslation} from "react-i18next";

export function ProjectPreview({project}) {
	const isVideo = /\.(mp4|webm|ogg)$/i.test(project.media);
	const {t} = useTranslation('projects');
	return (
		<article className="project-preview">
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
					<img
						src={project.media}
						alt={project.name}
					/>
				)}
			</div>

			<div className="project-preview__content">
				<h2>{project.name}</h2>

				<p>{t(project.descriptionKey)}</p>

				{project.disciplines.length > 0 && (
					<ul className="project-preview__disciplines">
						{project.disciplines.map((discipline) => (
							<li key={discipline}>
								{discipline}
							</li>
						))}
					</ul>
				)}
				{project.people.length > 0 && (
					<ul className="project-preview__people">
						{project.people.map((person) => (
							<li key={person.id || person.name}>
								<Link to={`/social#${person.id}`}>
									{person.name}
								</Link>
							</li>
						))}
					</ul>
				)}
				{project.link?.url && (
					<div className="project-preview__links">
						<a
							className="link"
							href={project.link.url}
							target="_blank"
							rel="noopener noreferrer"
						>
							{t('linkText')}
						</a>
					</div>
				)}
			</div>
		</article>
	);
}
