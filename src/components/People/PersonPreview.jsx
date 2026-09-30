import "./PersonPreview.css";
import SocialLink from "../SocialLink/SocialLink.jsx";

export function PersonPreview({person}) {
	return (
		<div className="person-preview" id={person.id}>
			<div className="person-preview__media">
				<img
					src={person.image}
					alt={`${person.name} image`}
				/>
			</div>
			<div className="person-preview__content">
				<div className="person-name">{person.name}</div>
				{person.disciplines.length > 0 && (
					<>
						<p className={"section-title"}>Aptitudes</p>
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
						<p className={"section-title"}>Links</p>
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