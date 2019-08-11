export default class Public {
	constructor(client) {
		this.client = client;
		this.resourceUrl = 'p';
		this.version1 = 'v1';
	}

    getTenantIdByUrlName(tenantUrlName) {
		return this.client.get(`/${this.version1}/${this.resourceUrl}/tenants/${tenantUrlName}`);
    }
    
	authorize(data) {
		return this.client.post(`/${this.version1}/${this.resourceUrl}/authorize`, data);
	}

	register(data) {
		return this.client.post(`/${this.version1}/${this.resourceUrl}/register`, data);
	}

	resetPassword(data) {
		return this.client.post(`/${this.version1}/${this.resourceUrl}/resetPassword`, data);
	}

	getVerificationTokenById(id) {
		return this.client.get(`/${this.version1}/${this.resourceUrl}/verification_tokens/${id}`);
	}

	disableVerificationToken(id) {
		return this.client.put(`/${this.version1}/${this.resourceUrl}/disable_verification_tokens/${id}`);
	}

	updateUserPassword(id, data) {
		return this.client.put(`/${this.version1}/${this.resourceUrl}/update_users_password/${id}`, data);
	}

	activeUserAccount(id) {
		return this.client.put(`/${this.version1}/${this.resourceUrl}/active_users_account/${id}`);
	}

	logout() {
		return this.client.get(`/${this.version1}/${this.resourceUrl}/logout`);
	}
}
