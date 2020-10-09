const Inventory = require('../../models/Inventory');

const createInventory = async ({ sku, quantity }) => {
  return Inventory.create({ sku, quantity });
};

const getInventory = async (sku) => {
  return await Inventory.findOne({ sku });
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

const getInventoryCount = async (sku) => {
  const inventory = await Inventory.findOne({ sku }).select('quantity');
  return { count: inventory ? inventory.quantity : 0 };
};

module.exports = {
  getInventoryCount,
  updateInventory,
};
