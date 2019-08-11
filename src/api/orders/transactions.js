export default class OrderTransactions {
	constructor(client) {
		this.client = client;
		this.version1 = 'v1';
	}

	create(orderId, data) {
		return this.client.post(`/${this.version1}/orders/${orderId}/transactions`, data);
	}

	update(orderId, transactionId, data) {
		return this.client.put(
			`/${this.version1}/orders/${orderId}/transactions/${transactionId}`,
			data
		);
	}

	delete(orderId, transactionId) {
		return this.client.delete(
			`/${this.version1}/orders/${orderId}/transactions/${transactionId}`
		);
	}
}
