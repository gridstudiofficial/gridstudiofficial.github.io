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
		],
		link: {
			url: "https://diegourjc1.github.io/mips32_editor_00/",
			text: "Project web page"
		}
	}),

	new Project({
		name: "Please, buy these",
		media: "/projects/please_buy_these-preview.gif",
		description: "A game where what you say is determined by your bullet hell skills.",
		disciplines: [
			Discipline.CSHARP,
			Discipline.UNITY
		],
		people: [
			diego
		],
		link: {
			url: "https://manupoons.itch.io/please-buy-these",
			text: "Project web page"
		}
	})
]