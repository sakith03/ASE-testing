class Cart {
    constructor(inventory = null) {
        this.items = [];
        this.inventory = inventory;
    }

    addItem(product, quantity) {
        if (quantity <= 0) {
            throw new Error("Invalid quantity");
        }

        if (this.inventory) {
            const available = this.inventory.getAvailable(product.sku);
            if (quantity > available) {
                throw new Error("Not enough stock");
            }
        }

        this.items.push({ product, quantity });
    }

    removeItem(sku) {
        this.items = this.items.filter(item => item.product.sku !== sku);
    }

    total() {
        return this.items.reduce(
            (sum, item) => sum + item.product.price * item.quantity,
            0
        );
    }
}

module.exports = { Cart };