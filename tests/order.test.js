const { OrderService } = require("../src/OrderService");

test("should save order after successful checkout", () => {
    const fakeRepo = {
        save: jest.fn()
    };

    const orderService = new OrderService(fakeRepo);

    const order = { total: 500 };

    orderService.create(order);

    expect(fakeRepo.save).toHaveBeenCalledWith(order);
});