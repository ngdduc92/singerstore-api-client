export default class AppSettings {
	constructor(client) {
		this.client = client;
		this.resourceUrl = 'apps';
		this.version1 = 'v1';
	}

	retrieve(appKey) {
		return this.client.get(`/${this.version1}/${this.resourceUrl}/${appKey}/settings`);
	}

	update(appKey, data) {
		return this.client.put(`/${this.version1}/${this.resourceUrl}/${appKey}/settings`, data);
	}
}
