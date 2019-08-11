export default class Orders {
	constructor(client) {
		this.client = client;
		this.resourceUrl = 'orders';
		this.version1 = 'v1';
	}

	list(filter) {
		return this.client.get(`/${this.version1}/${this.resourceUrl}`, filter);
	}

	retrieve(orderId, filter) {
		return this.client.get(`/${this.version1}/${this.resourceUrl}/${orderId}`, filter);
	}

	create(data) {
		return this.client.post(`/${this.version1}/${this.resourceUrl}`, data);
	}

	update(orderId, data) {
		return this.client.put(`/${this.version1}/${this.resourceUrl}/${orderId}`, data);
	}

	delete(orderId) {
		return this.client.delete(`/${this.version1}/${this.resourceUrl}/${orderId}`);
	}

	recalculate(orderId) {
		return this.client.put(`/${this.version1}/${this.resourceUrl}/${orderId}/recalculate`);
	}

	checkout(orderId) {
		return this.client.put(`/${this.version1}/${this.resourceUrl}/${orderId}/checkout`);
	}

	cancel(orderId) {
		return this.client.put(`/${this.version1}/${this.resourceUrl}/${orderId}/cancel`);
	}

	close(orderId) {
		return this.client.put(`/${this.version1}/${this.resourceUrl}/${orderId}/close`);
	}

	updateBillingAddress(orderId, address) {
		return this.client.put(
			`/${this.version1}/${this.resourceUrl}/${orderId}/billing_address`,
			address
		);
	}

	updateShippingAddress(orderId, address) {
		return this.client.put(
			`/${this.version1}/${this.resourceUrl}/${orderId}/shipping_address`,
			address
		);
	}

	getPaymentFormSettings(orderId) {
		return this.client.get(
			`/${this.version1}/${this.resourceUrl}/${orderId}/payment_form_settings`
		);
	}
}
