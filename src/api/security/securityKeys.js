export default class ApiKeys {
	constructor(client) {
		this.client = client;
        this.resourceUrl = 'security/apikeys';
        this.version1 = 'v1';
	}

	list(filter) {
		return this.client.get(`/${this.version1}/${this.resourceUrl}`, filter);
	}

	retrieve(id) {
		return this.client.get(`/${this.version1}/${this.resourceUrl}/${id}`);
	}

	create(data) {
		return this.client.post(`/${this.version1}/${this.resourceUrl}`, data);
	}

	update(id, data) {
		return this.client.put(`/${this.version1}/${this.resourceUrl}/${id}`, data);
	}

	delete(id) {
		return this.client.delete(`/${this.version1}/${this.resourceUrl}/${id}`);
	}
}
