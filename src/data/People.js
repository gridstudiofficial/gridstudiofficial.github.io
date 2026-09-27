import {Person} from "../components/People/Person.js";
import {Discipline} from "../components/Project/Discipline.js";

export let diego = new Person({
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

export const people = [
	diego
]