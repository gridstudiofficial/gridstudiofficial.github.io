import {PersonPreview} from "./PersonPreview.jsx";
import "./PeopleGrid.css";

export function PeopleGrid({people}) {
	return (
		<div className="people-grid">
			{people.map((person) => (
				<PersonPreview
					key={person.name}
					person={person}
				/>
			))}
		</div>
	);
}