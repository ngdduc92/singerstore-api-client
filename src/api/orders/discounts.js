export default class OrderDiscounts {
	constructor(client) {
		this.client = client;
		this.version1 = 'v1';
	}

	create(orderId, data) {
		return this.client.post(`/${this.version1}/orders/${orderId}/discounts`, data);
	}

	update(orderId, discountId, data) {
		return this.client.put(`/${this.version1}/orders/${orderId}/discounts/${discountId}`, data);
	}

	delete(orderId, discountId) {
		return this.client.delete(`/${this.version1}/orders/${orderId}/discounts/${discountId}`);
	}
}
