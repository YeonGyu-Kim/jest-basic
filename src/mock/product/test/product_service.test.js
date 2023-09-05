const ProductService = require('../product_service');
const StubProductClient = require('./stub_product_client');

describe('ProductService - Stub', () => {
  let productService;

  beforeEach(() => {
    productService = new ProductService(new StubProductClient());
  });

  it('available true만 필터링', async () => {
    const items = await productService.fetchAvailableItems();
    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: 'Milk', available: true }]);
  });
});
