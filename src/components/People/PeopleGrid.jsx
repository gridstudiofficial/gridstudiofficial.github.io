import {PersonPreview} from "./PersonPreview.jsx";
import "./PeopleGrid.css";

export function PeopleGrid({people}) {
	return (
		<div className="people-grid">
			{people.map((person, index) => (
				<div
					className="people-grid__item"
					key={person.name}
					style={{"--grid-index": index}}
				>
					<PersonPreview person={person}/>
				</div>
			))}
		</div>
	);
}
