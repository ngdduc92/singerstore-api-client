export default class WebStoreServices {
	constructor(client) {
		this.client = client;
		this.version1 = 'v1';
	}

	list(serviceId) {
		return this.client.get(`/${this.version1}/services/${serviceId}/logs`);
	}
}
