const { Catalog } = require("../src/Catalog");
const { Product } = require("../src/Product");

test("should add and retrieve product by SKU", () => {
    const catalog = new Catalog();
    const product = new Product("SKU1", "Item", 100);

    catalog.add(product);

    expect(catalog.getBySku("SKU1")).toBe(product);
});

test("should return null for missing SKU", () => {
    const catalog = new Catalog();
    expect(catalog.getBySku("X")).toBeNull();
});