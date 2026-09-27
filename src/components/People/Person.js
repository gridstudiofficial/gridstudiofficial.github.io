export class Person {
	constructor({name, image, disciplines = [], links = []}) {
		this.name = name;
		this.image = image;
		this.disciplines = disciplines;
		this.links = links;
	}
}