export default class PublicPages {
	constructor(client) {
		this.client = client;
		this.resourceUrl = 'p/pages';
		this.version1 = 'v1';
	}

	list(filter) {
		return this.client.get(`/${this.version1}/${this.resourceUrl}`, filter);
	}

	retrieve(id) {
		return this.client.get(`/${this.version1}/${this.resourceUrl}/${id}`);
	}
}
