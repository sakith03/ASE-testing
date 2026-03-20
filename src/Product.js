class Product {
    constructor(sku, name, price) {
        if (!sku || !name || price < 0) {
            throw new Error("Invalid product");
        }
        this.sku = sku;
        this.name = name;
        this.price = price;
    }
}

module.exports = { Product };