export default class PublicSitemap {
	constructor(client) {
		this.client = client;
		this.resourceUrl = 'p/sitemap';
		this.version1 = 'v1';
	}

	list(filter) {
		return this.client.get(`/${this.version1}/${this.resourceUrl}`, filter);
	}

	retrieve(filter) {
		return this.client.get(`/${this.version1}/${this.resourceUrl}`, filter);
	}
}