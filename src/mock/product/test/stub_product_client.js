class StubProductClient {
  async fetchItems() {
    return [
      { item: 'Milk', available: true },
      { item: 'Water', available: false },
    ];
  }
}

module.exports = StubProductClient;
