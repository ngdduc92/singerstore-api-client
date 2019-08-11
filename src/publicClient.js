import RestClient from './restClient';

export default class PublicClient extends RestClient {
	getConfig(method, data, cookie) {
		const config = {
			credentials: this.getCredentialsConfig(this.baseUrl),
			method,
			headers: {
				'Content-Type': 'application/json',
				'X-Access-Key': this.apiKey,
				'X-Tenant-Id': this.tenantId
			}
		};

		if (cookie) {
			config.headers.Cookie = cookie;
		}

		if (data) {
			config.body = JSON.stringify(data);
		}
		return config;
	}
}
