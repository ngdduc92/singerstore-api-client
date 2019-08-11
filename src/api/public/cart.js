export default class PublicCart {
	constructor(client) {
		this.client = client;
		this.resourceUrl = 'p/cart';
		this.version1 = 'v1';
	}

	retrieve(cookie) {
		return this.client.get(`/${this.version1}/${this.resourceUrl}`, null, cookie);
    }
}
