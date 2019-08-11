export default class PublicProductCategories {
	constructor(client) {
		this.client = client;
		this.resourceUrl = 'p/product_categories';
		this.version1 = 'v1';
	}

	list(filter) {
		return this.client.get(`/${this.version1}/${this.resourceUrl}`, filter);
	}
}
