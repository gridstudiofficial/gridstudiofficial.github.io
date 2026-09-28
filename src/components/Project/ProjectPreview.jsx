import {Link} from 'react-router-dom';
import "./ProjectPreview.css";

export function ProjectPreview({project}) {
	const isVideo = /\.(mp4|webm|ogg)$/i.test(project.media);

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

				<p>{project.description}</p>

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
			</div>
		</article>
	);
}
