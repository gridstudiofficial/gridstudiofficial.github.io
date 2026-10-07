import {Project} from "../components/Project/Project.js";
import {Discipline} from "../components/Project/Discipline.js";
import {diego, maria, alvaro, jose} from "./People.js";

export const projects = [
	new Project({
		name: "MIPS 32 Visual Editor",
		media: "/projects/mips32-preview.png",
		descriptionKey: "mips32.description",
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
		descriptionKey: "pleaseBuyThese.description",
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
		descriptionKey: "cuocoCooked.description",
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
		descriptionKey: "theOtherSideOfTheAbyss.description",
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
		descriptionKey: "mysteryMice.description",
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
		descriptionKey: "hanabiTanks.description",
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

	new Project({
		name: "Volley Clash",
		media: "/projects/volley_clash-preview.jpg",
		descriptionKey: "volleyClash.description",
		disciplines: [
			Discipline.JS,
			Discipline.PHASER
		],
		people: [
			alvaro
		],
		link: {
			url: "https://github.com/Minhxia/jer-volleyclash-sunsetarcade",
			text: "Project web page"
		}
	})
]
