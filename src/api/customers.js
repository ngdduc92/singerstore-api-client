export default class Customers {
	constructor(client) {
		this.client = client;
		this.resourceUrl = 'customers';
		this.version1 = 'v1';
	}

	list(filter) {
		return this.client.get(`/${this.version1}/${this.resourceUrl}`, filter);
	}

	retrieve(id, filter) {
		return this.client.get(`/${this.version1}/${this.resourceUrl}/${id}`, filter);
	}

	create(data) {
		return this.client.post(`/${this.version1}/${this.resourceUrl}`, data);
	}

	update(id, data) {
		return this.client.put(`/${this.version1}/${this.resourceUrl}/${id}`, data);
	}

	delete(id) {
		return this.client.delete(`/${this.version1}/${this.resourceUrl}/${id}`);
	}

	createAddress(customerId, data) {
		return this.client.post(`/${this.version1}/${this.resourceUrl}/${customerId}`, data);
	}

	updateAddress(customerId, addressId, data) {
		return this.client.put(
			`/${this.version1}/${this.resourceUrl}/${customerId}/addresses/${addressId}`,
			data
		);
	}

	deleteAddress(customerId, addressId) {
		return this.client.delete(
			`/${this.version1}/${this.resourceUrl}/${customerId}/addresses/${addressId}`
		);
	}

	setDefaultBillingAddress(customerId, addressId) {
		return this.client.post(
			`/${this.version1}/${this.resourceUrl}/${customerId}/addresses/${addressId}/default_billing`
		);
	}

	setDefaultShippingAddress(customerId, addressId) {
		return this.client.post(
			`/${this.version1}/${
				this.resourceUrl
			}/${customerId}/addresses/${addressId}/default_shipping`
		);
	}
}
