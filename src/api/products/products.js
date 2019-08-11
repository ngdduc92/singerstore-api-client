export default class Products {
	constructor(client) {
		this.client = client;
		this.resourceUrl = 'products';
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
		return this.client.delete(`/${this.version1}/${this.resourceUrl}/${id}`);
	}

	skuExists(productId, sku) {
		return this.client.get(`/${this.version1}/${this.resourceUrl}/${productId}/sku`, { sku });
	}

	slugExists(productId, slug) {
		return this.client.get(`/${this.version1}/${this.resourceUrl}/${productId}/slug`, { slug });
	}
}
