class Cart {
    constructor() {
        this.items = [];
    }

    addItem(product, quantity) {
        if (quantity <= 0) {
            throw new Error("Invalid quantity");
        }
        this.items.push({ product, quantity });
    }

    total() {
        return this.items.reduce(
            (sum, item) => sum + item.product.price * item.quantity,
            0
        );
    }
}

module.exports = { Cart };