const Inventory = require('../modals/Inventory');

const createInventory = async ({ sku, quantity }) => {
  return Inventory.create({ sku, quantity });
};

const updateInventory = async ({ sku, quantity }) => {
  let inventory = await getInventory(sku);
  if (!inventory) {
    return createInventory({ sku, quantity });
  } else {
    return Inventory.findByIdAndUpdate(
      inventory._id,
      {
        sku: inventory.sku,
        quantity: inventory.quantity + quantity,
      },
      { new: true }
    );
  }
};

const getInventory = async (sku) => {
  return Inventory.findOne({ sku });
};

module.exports = {
  getInventory,
  updateInventory,
};
