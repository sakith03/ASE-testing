const { Cart } = require("../src/Cart");

test("bulk discount: 10% off when quantity >= 10", () => {
    const cart = new Cart();
    cart.addItem({ sku: "A", price: 100 }, 10);

    expect(cart.total()).toBe(900); // 1000 - 10%
});

test("order discount: 5% off when total >= 1000", () => {
    const cart = new Cart();
    cart.addItem({ sku: "A", price: 500 }, 2); // 1000

    expect(cart.total()).toBe(950); // 5% discount
});