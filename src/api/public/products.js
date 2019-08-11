export default class PublicProducts {
	constructor(client) {
		this.client = client;
		this.resourceUrl = 'p/products';
		this.version1 = 'v1';
	}

	list(filter) {
		return this.client.get(`/${this.version1}/${this.resourceUrl}/`, filter);
	}

	retrieve(id, filter) {
		return this.client.get(`/${this.version1}/${this.resourceUrl}/${id}`, filter);
	}
}
