export default class Cart {
	constructor(client) {
		this.client = client;
		this.resourceUrl = 'cart';
		this.version1 = 'v1';
	}

	retrieve(email) {
		return this.client.get(`/${this.version1}/${this.resourceUrl}`, { email });
    }
    
	create(data) {
		return this.client.post(`/${this.version1}/${this.resourceUrl}`, data);
	}
	
	update(data) {
		return this.client.put(`/${this.version1}/${this.resourceUrl}`, data);
	}

	checkout() {
		return this.client.put(`/${this.version1}/${this.resourceUrl}/checkout`);
    }

    createItem(data) {
		return this.client.post(`/${this.version1}/${this.resourceUrl}/items`, data);
    }

    updateItem(itemId, data) {
		return this.client.put(`/${this.version1}/${this.resourceUrl}/items/${itemId}`, data);
    }
    
    deleteItem(itemId) {
		return this.client.delete(`/${this.version1}/${this.resourceUrl}/items/${itemId}`);
    }
    
    updateBillingAddress(address) {
		return this.client.put(
			`/${this.version1}/${this.resourceUrl}/billing_address`,
			address
		);
	}

	updateShippingAddress(address) {
		return this.client.put(
			`/${this.version1}/${this.resourceUrl}/shipping_address`,
			address
		);
	}
	
	getPaymentFormSettings() {
		return this.client.get(
			`/${this.version1}/${this.resourceUrl}/payment_form_settings`
		);
	}
}
