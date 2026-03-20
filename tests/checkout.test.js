const { Checkout } = require("../src/Checkout");

test("should process successful payment", () => {
    const fakePayment = {
        charge: jest.fn(() => true)
    };

    const checkout = new Checkout(fakePayment);

    const result = checkout.process(500, "token123");

    expect(result).toBe(true);
});

test("should fail when payment fails", () => {
    const fakePayment = {
        charge: jest.fn(() => false)
    };

    const checkout = new Checkout(fakePayment);

    const result = checkout.process(500, "token123");

    expect(result).toBe(false);
});