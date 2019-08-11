export default class Settings {
	constructor(client) {
		this.client = client;
		this.resourceUrl = 'settings';
		this.version1 = 'v1';
	}

	retrieve() {
		return this.client.get(`/${this.version1}/${this.resourceUrl}`);
	}

	update(data) {
		return this.client.put(`/${this.version1}/${this.resourceUrl}`, data);
	}

	retrieveEmailSettings() {
		return this.client.get(`/${this.version1}/${this.resourceUrl}/email`);
	}

	updateEmailSettings(data) {
		return this.client.put(`/${this.version1}/${this.resourceUrl}/email`, data);
	}

	retrieveEmailTemplate(name) {
		return this.client.get(`/${this.version1}/${this.resourceUrl}/email/templates/${name}`);
	}

	updateEmailTemplate(name, data) {
		return this.client.put(`/${this.version1}/${this.resourceUrl}/email/templates/${name}`, data);
	}

	uploadLogo(formData) {
		return this.client.postFormData(`/${this.version1}/${this.resourceUrl}/logo`, formData);
	}

	deleteLogo() {
		return this.client.delete(`/${this.version1}/${this.resourceUrl}/logo`);
	}
}
