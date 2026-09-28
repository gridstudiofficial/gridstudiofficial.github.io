export class Project {
	constructor({name, media, description, disciplines = [], people = [], link = null}) {
		this.name = name;
		this.media = media;
		this.description = description;
		this.disciplines = disciplines;
		this.people = people;
		this.link = link;
	}
}