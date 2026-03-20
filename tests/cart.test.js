const { Cart } = require("../src/Cart");

test("should add item and calculate total", () => {
    const cart = new Cart();
    cart.addItem({ price: 100 }, 2);

    expect(cart.total()).toBe(200);
});

test("should throw error for invalid quantity", () => {
    const cart = new Cart();
    expect(() => cart.addItem({ price: 100 }, 0)).toThrow();
});