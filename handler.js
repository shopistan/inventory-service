'use strict';
const db = require('./app/config/db');
const send = require('./app/utils/response');

const InventoryController = require('./app/controllers/inventory');

module.exports.editInventory = async (event) => {
  const { body } = event;
  try {
    const inventory = await InventoryController.updateInventory(
      JSON.parse(body)
    );
    return send(inventory);
  } catch (e) {
    return send(e, 500);
  }
};

module.exports.getInventoryCount = async (event) => {
  try {
    const inventory = await InventoryController.getInventoryCount(
      event.pathParameters.sku
    );
    send(inventory);
  } catch (e) {
    send(e, 500);
  }
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
