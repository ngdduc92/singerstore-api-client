export default class PaymentGateways {
	constructor(client) {
		this.client = client;
		this.resourceUrl = 'payment_gateways';
		this.version1 = 'v1';
	}

	retrieve(gatewayName) {
		return this.client.get(`/${this.version1}/${this.resourceUrl}/${gatewayName}`);
	}

	update(gatewayName, data) {
		return this.client.put(`/${this.version1}/${this.resourceUrl}/${gatewayName}`, data);
	}
}
