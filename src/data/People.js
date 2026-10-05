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

export const people = [
	diego,
	maria,
	jose,
	cristian
]

