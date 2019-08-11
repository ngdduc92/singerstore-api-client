export default class PublicThemePlaceholders {
	constructor(client) {
		this.client = client;
		this.resourceUrl = 'p/theme/placeholders';
		this.version1 = 'v1';
	}

	list() {
		return this.client.get(`/${this.version1}/${this.resourceUrl}`);
	}
}
