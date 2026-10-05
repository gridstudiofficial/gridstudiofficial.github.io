import {Project} from "../components/Project/Project.js";
import {Discipline} from "../components/Project/Discipline.js";
import {diego, maria, jose} from "./People.js";

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
			diego,
			maria
		],
		link: {
			url: "https://manupoons.itch.io/please-buy-these",
			text: "Project web page"
		}
	}),

	new Project({
		name: "Cuoco Cooked",
		media: "/projects/cuoco_cooked-preview.png",
		description: "Website with a set of custom tools in React to make a wiki like Game Design Document for a concept game. Cuoco Cooked is a concept 2D fighting game.",
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
			url: "https://diegourjc1.github.io/Cuoco_Coocked_GDD/",
			text: "Project web page"
		}
	}),

	new Project({
		name: "The Other Side of the Abyss",
		media: "/projects/the_other_side_of_the_abyss-preview.png",
		description: "You walk for a long time, you follow the route your suit indicates wherever it may lead you...",
		disciplines: [
			Discipline.CSHARP,
			Discipline.UNITY
		],
		people: [
			diego,
			maria
		],
		link: {
			url: "https://manupoons.itch.io/the-other-side-of-the-abyss",
			text: "Project web page"
		}
	}),

	new Project({
		name: "Mystery Mice",
		media: "/projects/mystery_mice-preview.png",
		description: "Enjoy this co-op puzzle game with a friend!!",
		disciplines: [
			Discipline.JS,
			Discipline.PHASER
		],
		people: [
			maria
		],
		link: {
			url: "https://fpsy-art.itch.io/mystery-mice",
			text: "Project web page"
		}
	}),

		new Project({
		name: "Hanabi Tanks",
		media: "/projects/HanabiTanks.png",
		description: "A 1v1 with cardboard tanks.",
		disciplines: [
			Discipline.JS,
			Discipline.PHASER
		],
		people: [
			jose
		],
		link: {
		}
	}),
]