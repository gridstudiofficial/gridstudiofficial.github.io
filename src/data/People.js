import {Person} from "../components/People/Person.js";
import {Discipline} from "../components/Project/Discipline.js";

export let diego = new Person({
	id: "diego",
	name: "Diego",
	image: "people/diego.jpg",
	disciplines: [
		Discipline.HTML,
		Discipline.CSS,
		Discipline.JS,
		Discipline.REACT,
		Discipline.JAVA,
		Discipline.C,
		Discipline.CSHARP
	],
	links: [
		"https://linkedin.com/in/diego-gil-luengo",
		"https://github.com/DiegoURJC1"
	]
});

export let maria = new Person({
	id: "maria",
	name: "María",
	image: "people/maria.jpg",
	disciplines: [
		Discipline.ART2D,
		Discipline.ART3D,
		Discipline.ANIMATION2D,
		Discipline.AUTODESK3DSMAX,
		Discipline.AUTODESKMAYA
	],
	links: [
		"https://www.linkedin.com/in/maria-de-andres-j/",
		"https://github.com/MariaDeAndres",
		"https://maria-de-andres.itch.io/",
		"https://www.artstation.com/maria_de_andres"
	]
});

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

export const people = [
	diego,
	maria,
	alvaro
]