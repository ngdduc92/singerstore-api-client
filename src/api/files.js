export default class Files {
	constructor(client) {
		this.client = client;
		this.resourceUrl = 'files';
		this.version1 = 'v1';
	}

	list(filter) {
		return this.client.get(`/${this.version1}/${this.resourceUrl}`, filter);
	}

	upload(formData) {
		return this.client.postFormData(`/${this.version1}/${this.resourceUrl}`, formData);
	}

	delete(fileName) {
		return this.client.delete(`/${this.version1}/${this.resourceUrl}/${fileName}`);
	}
}
