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
    let total = this.items.reduce((sum, item) => {
        let subtotal = item.product.price * item.quantity;

        if (item.quantity >= 10) {
            subtotal *= 0.9;
        }

        return sum + subtotal;
    }, 0);

    if (total >= 1000) {
        total *= 0.95;
    }

    return total;
}
}

module.exports = { Cart };