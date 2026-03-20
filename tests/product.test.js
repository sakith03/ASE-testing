const { Product } = require("../src/Product");

test("should fail when price is negative", () => {
    expect(() => {
        new Product("SKU1", "Item", -10);
    }).toThrow();
});