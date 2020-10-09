const chai = require('chai');
const { expect } = chai;
chai.use(require('chai-as-promised'));
const faker = require('faker');
const InventoryController = require('./index');
const testHelper = require('../../utils/test.helper');

beforeEach(testHelper.setupTest);

describe('Inventory', () => {
  const randomSku = faker.random.uuid();
  console.log(
    'randomSku',
    randomSku,
    faker.random.number({
      min: -50,
      max: 50,
    })
  );
  describe('Update Inventory', () => {
    it('should return a update inventory', async () => {
      const result = await InventoryController.updateInventory({
        sku: randomSku,
        quantity: faker.random.number({
          min: -50,
          max: 50,
        }),
      });
      console.log('inventory updated result', result);
      expect(typeof result).to.equal('object');
    });
    it('should return a inventory count', async () => {
      const result = await InventoryController.getInventoryCount(randomSku);
      console.log('count', result);
      expect(typeof result).to.equal('object');
    });
  });
});
