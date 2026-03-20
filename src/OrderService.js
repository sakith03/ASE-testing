class OrderService {
    constructor(repo) {
        this.repo = repo;
    }

    create(order) {
        this.repo.save(order);
    }
}

module.exports = { OrderService };