export default class ProductVariants {
	constructor(client) {
		this.client = client;
		this.version1 = 'v1';
	}

	list(productId) {
		return this.client.get(`/${this.version1}/products/${productId}/variants`);
	}

	create(productId, data) {
		return this.client.post(`/${this.version1}/products/${productId}/variants`, data);
	}

	update(productId, variantId, data) {
		return this.client.put(
			`/${this.version1}/products/${productId}/variants/${variantId}`,
			data
		);
	}

	delete(productId, variantId) {
		return this.client.delete(`/${this.version1}/products/${productId}/variants/${variantId}`);
	}

	setOption(productId, variantId, data) {
		return this.client.put(
			`/${this.version1}/products/${productId}/variants/${variantId}/options`,
			data
		);
	}
}
