export default class WebStoreAccount {
	constructor(client) {
		this.client = client;
		this.resourceUrl = 'account';
		this.version1 = 'v1';
	}

	retrieve() {
		return this.client.get(`/${this.version1}/${this.resourceUrl}`);
	}

	update(data) {
		return this.client.put(`/${this.version1}/${this.resourceUrl}`, data);
	}

	updateDeveloper(data) {
		return this.client.put(`/${this.version1}/${this.resourceUrl}/developer`, data);
	}
}
