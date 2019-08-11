export default class Currencies {
	constructor(client) {
		this.client = client;
		this.version1 = 'v1';
	}

	list() {
		return this.client.get(`/${this.version1}/currencies`);
	}
}
