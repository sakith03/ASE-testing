class Checkout {
    constructor(paymentGateway) {
        this.paymentGateway = paymentGateway;
    }

    process(amount, token) {
        return this.paymentGateway.charge(amount, token);
    }
}

module.exports = { Checkout };