export class Project {
	constructor({name, media, descriptionKey, disciplines = [], people = [], link = null}) {
		this.name = name;
		this.media = media;
		this.descriptionKey = descriptionKey;
		this.disciplines = disciplines;
		this.people = people;
		this.link = link;
	}
}