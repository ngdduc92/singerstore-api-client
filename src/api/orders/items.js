export default class OrderItems {
	constructor(client) {
		this.client = client;
		this.version1 = 'v1';
	}

	create(orderId, data) {
		return this.client.post(`/${this.version1}/orders/${orderId}/items`, data);
	}

	update(orderId, itemId, data) {
		return this.client.put(`/${this.version1}/orders/${orderId}/items/${itemId}`, data);
	}

	delete(orderId, itemId) {
		return this.client.delete(`/${this.version1}/orders/${orderId}/items/${itemId}`);
	}
}
