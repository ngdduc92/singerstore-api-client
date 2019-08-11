export default class WebStoreServices {
	constructor(client) {
		this.client = client;
		this.version1 = 'v1';
	}

	call(serviceId, actionId) {
		return this.client.post(`/${this.version1}/services/${serviceId}/actions/${actionId}`);
	}
}
