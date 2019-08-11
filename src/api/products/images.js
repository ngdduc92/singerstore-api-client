export default class ProductImages {
	constructor(client) {
		this.client = client;
		this.version1 = 'v1';
	}

	list(productId) {
		return this.client.get(`/${this.version1}/products/${productId}/images`);
	}

	update(productId, imageId, data) {
		return this.client.put(`/${this.version1}/products/${productId}/images/${imageId}`, data);
	}

	upload(productId, formData) {
		return this.client.postFormData(`/${this.version1}/products/${productId}/images`, formData);
	}

	delete(productId, imageId) {
		return this.client.delete(`/${this.version1}/products/${productId}/images/${imageId}`);
	}
}
