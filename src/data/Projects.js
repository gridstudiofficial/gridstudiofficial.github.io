import {Project} from "../components/Project/Project.js";
import {Discipline} from "../components/Project/Discipline.js";
import {diego} from "./People.js";

export const projects = [
	new Project({
		name: "MIPS 32 Visual Editor",
		media: "/projects/mips32-preview.png",
		description: "A visual editor for MIPS32 microprocessor. Able to edit wiring and alter components.",
		disciplines: [
			Discipline.HTML,
			Discipline.CSS,
			Discipline.JS,
			Discipline.REACT
		],
		people: [
			diego
		]
		],
		link: {
			url: "https://diegourjc1.github.io/mips32_editor_00/",
			text: "Project web page"
		}
	}),
	})
]