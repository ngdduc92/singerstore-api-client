export default class DiscountTypes {
	constructor(client) {
		this.client = client;
		this.resourceUrl = 'discount_types';
		this.version1 = 'v1';
	}

	list(filter) {
		return this.client.get(`/${this.version1}/${this.resourceUrl}`, filter);
	}
}
