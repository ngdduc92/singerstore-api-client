export default class ThemePlaceholders {
	constructor(client) {
		this.client = client;
		this.resourceUrl = 'theme/placeholders';
		this.version1 = 'v1';
	}

	list() {
		return this.client.get(`/${this.version1}/${this.resourceUrl}`);
	}

	retrieve(placeholderKey) {
		return this.client.get(`/${this.version1}/${this.resourceUrl}/${placeholderKey}`);
	}

	create(data) {
		return this.client.post(`/${this.version1}/${this.resourceUrl}`, data);
	}

	update(placeholderKey, data) {
		return this.client.put(`/${this.version1}/${this.resourceUrl}/${placeholderKey}`, data);
	}

	delete(placeholderKey) {
		return this.client.delete(`/${this.version1}/${this.resourceUrl}/${placeholderKey}`);
	}
}
