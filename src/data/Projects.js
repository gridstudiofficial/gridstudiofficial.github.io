import {Project} from "../components/Project/Project.js";
import {Discipline} from "../components/Project/Discipline.js";
import {alvaro, jose} from "./People.js";

export const projects = [

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
		link: {}
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
