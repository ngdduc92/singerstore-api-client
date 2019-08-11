export default class ThemeAssets {
	constructor(client) {
		this.client = client;
		this.resourceUrl = 'theme/assets';
		this.version1 = 'v1';
	}

	uploadFile(formData) {
		return this.client.postFormData(`/${this.version1}/${this.resourceUrl}`, formData);
	}

	deleteFile(fileName) {
		return this.client.delete(`/${this.version1}/${this.resourceUrl}/${fileName}`);
	}
}
