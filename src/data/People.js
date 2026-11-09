import {Person} from "../components/People/Person.js";
import {Discipline} from "../components/Project/Discipline.js";

export let alvaro = new Person({
	id: "alvaro",
	name: "Álvaro",
	image: "people/alvaro.jpg",
	disciplines: [
		Discipline.HTML,
		Discipline.CSS,
		Discipline.JS,
		Discipline.JAVA,
		Discipline.CSHARP
	],
	links: [
		"https://github.com/Alvaro-Ibanez"
	]
});

export let jose = new Person({
	id: "jose",
	name: "José",
	image: "people/jose.jpg",
	disciplines: [
		Discipline.ART2D,
		Discipline.ANIMATION2D,
		Discipline.C,
		Discipline.CSHARP,
		Discipline.UNITY
	],
	links: [
		"https://github.com/Pepiur"
	]
});

export let cristian = new Person({
	id: "cristian",
	name: "Cristian",
	image: "people/Cristian.png",
	disciplines: [
		Discipline.JAVA,
		Discipline.C,
		Discipline.CSHARP,
		Discipline.UNITY
	]
});

export let mario = new Person({
	id: "mario",
	name: "Mario",
	image: "people/mario.jpg",
	disciplines: [
		Discipline.JAVA,
		Discipline.C,
		Discipline.CSHARP,
		Discipline.UNITY
	]
});

export const people = [
	alvaro,
	jose,
	cristian,
	mario
]