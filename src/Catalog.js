class Catalog {
    constructor() {
        this.products = new Map();
    }

    add(product) {
        this.products.set(product.sku, product);
    }

    getBySku(sku) {
        return this.products.get(sku) || null;
    }
}

module.exports = { Catalog };