export class Team {
	name: string;
	initialSeed: number;
	logo: string;

	constructor(name: string, initialSeed: number, logo?: string) {
		this.name = name;
		this.initialSeed = initialSeed;
        if (logo) {
            this.logo = "/logos/".concat(logo);
        } else {
		    this.logo = "/logos/default.png";
        }
	}
}
