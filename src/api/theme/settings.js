export default class ThemeSettings {
	constructor(client) {
		this.client = client;
		this.version1 = 'v1';
	}

	retrieve() {
		return this.client.get(`/${this.version1}/theme/settings`);
	}

	update(data) {
		return this.client.put(`/${this.version1}/theme/settings`, data);
	}

	retrieveSchema(language) {
		return this.client.get(`/${this.version1}/theme/settings_schema/${language}`);
	}
}
