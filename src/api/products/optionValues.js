export default class ProductOptionValues {
	constructor(client) {
		this.client = client;
		this.version1 = 'v1';
	}

	list(productId, optionId) {
		return this.client.get(`/${this.version1}/products/${productId}/options/${optionId}/values`);
	}

	retrieve(productId, optionId, valueId) {
		return this.client.get(
			`/${this.version1}/products/${productId}/options/${optionId}/values/${valueId}`
		);
	}

	create(productId, optionId, data) {
		return this.client.post(
			`/${this.version1}/products/${productId}/options/${optionId}/values`,
			data
		);
	}

	update(productId, optionId, valueId, data) {
		return this.client.put(
			`/${this.version1}/products/${productId}/options/${optionId}/values/${valueId}`,
			data
		);
	}

	delete(productId, optionId, valueId) {
		return this.client.delete(
			`/${this.version1}/products/${productId}/options/${optionId}/values/${valueId}`
		);
	}
}
