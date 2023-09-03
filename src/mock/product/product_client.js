class ProductClient {
  fetchItems() {
    return fetch('https://example.com/login').then((res) => res.json());
  }
}

module.exports = ProductClient;
