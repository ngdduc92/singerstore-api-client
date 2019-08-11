export default class WebStoreServices {
	constructor(client) {
		this.client = client;
		this.resourceUrl = 'services';
		this.version1 = 'v1';
	}

	list(filter) {
		return this.client.get(`/${this.version1}/${this.resourceUrl}`, filter);
	}

	retrieve(id) {
		return this.client.get(`/${this.version1}/${this.resourceUrl}/${id}`);
	}

	enable(id) {
		return this.client.post(`/${this.version1}/${this.resourceUrl}/${id}/enable`);
	}

	disable(id) {
		return this.client.post(`/${this.version1}/${this.resourceUrl}/${id}/disable`);
	}
}
