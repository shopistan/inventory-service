'use strict';
const db = require('./app/config/db');
const InventoryController = require('./app/controllers/inventory.controller');

module.exports.editInventory = async (event) => {
  const { body } = event;
  const inventory = await InventoryController.updateInventory(JSON.parse(body));

  return {
    statusCode: 200,
    body: JSON.stringify(inventory),
  };
};

module.exports.getInventoryCount = async (event) => {
  let inventory = await InventoryController.getInventory(
    event.pathParameters.sku
  );

  return {
    statusCode: 200,
    body: JSON.stringify({ count: inventory ? inventory.quantity : 0 }),
  };
};

// module.exports.snsLamdbaTriggered = (event, context, callback) => {
//   var topic = event.Records[0].Sns.TopicArn;
//   var message = event.Records[0].Sns.Message;
//   console.log(topic + '  ' + message);
//   callback(null, {
//     message:
//       'SNS lamdba was triggered from the topic ' +
//       topic +
//       ' with message ' +
//       message,
//     event,
//   });
// };
