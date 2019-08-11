export default class PublicRedirects {
	constructor(client) {
		this.client = client;
		this.resourceUrl = 'p/redirects';
		this.version1 = 'v1';
	}

	list() {
		return this.client.get(`/${this.version1}/${this.resourceUrl}`);
	}
}
