export default class ShippingMethods {
	constructor(client) {
		this.client = client;
		this.resourceUrl = 'shipping_methods';
		this.version1 = 'v1';
	}

	list(filter) {
		return this.client.get(`/${this.version1}/${this.resourceUrl}`, filter);
	}

	retrieve(id, filter) {
		return this.client.get(`/${this.version1}/${this.resourceUrl}/${id}`, filter);
	}

	create(data) {
		return this.client.post(`/${this.version1}/${this.resourceUrl}`, data);
	}

	update(id, data) {
		return this.client.put(`/${this.version1}/${this.resourceUrl}/${id}`, data);
	}

	delete(id) {
		return this.client.delete(`${this.resourceUrl}/${id}`);
	}
}
