import {ProjectPreview} from "./ProjectPreview.jsx";
import "./ProjectGrid.css";

export function ProjectGrid({projects}) {
	return (
		<div className="project-grid">
			{projects.map((project) => (
				<ProjectPreview
					key={project.name}
					project={project}
				/>
			))}
		</div>
	);
}