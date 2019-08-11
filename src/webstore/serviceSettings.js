export default class WebStoreServices {
	constructor(client) {
		this.client = client;
		this.version1 = 'v1';
	}

	retrieve(id) {
		return this.client.get(`/${this.version1}/services/${id}/settings`);
	}

	update(id, data) {
		return this.client.post(`/${this.version1}/services/${id}/settings`, data);
	}
}
