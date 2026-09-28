export class Person {
	constructor({id, name, image, disciplines = [], links = []}) {
		this.id = id || name.toLowerCase().replace(/\s+/g, '-');
		this.name = name;
		this.image = image;
		this.disciplines = disciplines;
		this.links = links;
	}
}