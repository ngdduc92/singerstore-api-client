export default class ProductOptions {
	constructor(client) {
		this.client = client;
		this.version1 = 'v1';
	}

	list(productId) {
		return this.client.get(`/${this.version1}/products/${productId}/options`);
	}

	retrieve(productId, optionId) {
		return this.client.get(`/${this.version1}/products/${productId}/options/${optionId}`);
	}

	create(productId, data) {
		return this.client.post(`/${this.version1}/products/${productId}/options`, data);
	}

	update(productId, optionId, data) {
		return this.client.put(`/${this.version1}/products/${productId}/options/${optionId}`, data);
	}

	delete(productId, optionId) {
		return this.client.delete(`/${this.version1}/products/${productId}/options/${optionId}`);
	}
}
