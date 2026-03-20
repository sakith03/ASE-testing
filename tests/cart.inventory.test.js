const { Cart } = require("../src/Cart");

test("should fail if requested quantity exceeds inventory", () => {
    const fakeInventory = {
        getAvailable: (sku) => 5
    };

    const cart = new Cart(fakeInventory);

    expect(() => {
        cart.addItem({ sku: "A", price: 100 }, 10);
    }).toThrow("Not enough stock");
});