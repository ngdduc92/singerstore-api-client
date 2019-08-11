export default class PublicSettings {
	constructor(client) {
		this.client = client;
		this.resourceUrl = 'p/settings';
		this.version1 = 'v1';
	}

	retrieve() {
		return this.client.get(`/${this.version1}/${this.resourceUrl}`);
    }
}
