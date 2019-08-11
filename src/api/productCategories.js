export default class ProductCategories {
	constructor(client) {
		this.client = client;
		this.resourceUrl = 'product_categories';
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

	uploadImage(categoryId, formData) {
		return this.client.postFormData(
			`/${this.version1}/${this.resourceUrl}/${categoryId}/image`,
			formData
		);
	}

	deleteImage(id) {
		return this.client.delete(`/${this.version1}/${this.resourceUrl}/${id}/image`);
	}
}
