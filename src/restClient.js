import fetch from 'cross-fetch';
import queryString from 'query-string';

export default class RestClient {
	constructor({ baseUrl, apiKey, token, tenantId }) {
		this.baseUrl = baseUrl;
		this.apiKey = apiKey;
		this.token = token;
		this.tenantId = tenantId;
	}

	getConfig(method, data, cookie) {
		const config = {
			credentials: this.getCredentialsConfig(this.baseUrl),
			method,
			headers: {
				'Content-Type': 'application/json',
				'X-Access-Key': this.apiKey,
				Authorization: `Bearer ${this.token}`,
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

	getCredentialsConfig(baseUrl) {
		const includePrefix =
			baseUrl.includes('http://') || baseUrl.includes('https://');
		return includePrefix ? 'include' : 'same-origin';
	}

	postFormDataConfig = formData => ({
		method: 'post',
		body: formData,
		headers: {
			'X-Access-Key': this.apiKey,
			Authorization: `Bearer ${this.token}`,
			'X-Tenant-Id': this.tenantId
		}
	});

	returnStatusAndJson = response =>
		response
			.json()
			.then(json => ({ status: response.status, json }))
			.catch(() => ({ status: response.status, json: null }));

	static returnStatusAndJsonStatic = response =>
		response
			.json()
			.then(json => ({ status: response.status, json }))
			.catch(() => ({ status: response.status, json: null }));

	get(endpoint, filter, cookie) {
		return fetch(
			`${this.baseUrl}${endpoint}?${queryString.stringify(filter)}`,
			this.getConfig('get', null, cookie)
		).then(this.returnStatusAndJson);
	}

	post(endpoint, data) {
		return fetch(this.baseUrl + endpoint, this.getConfig('post', data)).then(
			this.returnStatusAndJson
		);
	}

	postFormData(endpoint, formData) {
		return fetch(
			this.baseUrl + endpoint,
			this.postFormDataConfig(formData)
		).then(this.returnStatusAndJson);
	}

	put(endpoint, data) {
		return fetch(this.baseUrl + endpoint, this.getConfig('put', data)).then(
			this.returnStatusAndJson
		);
	}

	delete(endpoint) {
		return fetch(this.baseUrl + endpoint, this.getConfig('delete')).then(
			this.returnStatusAndJson
		);
	}
}
