// /* global describe beforeEach it */

// const { expect } = require('chai')
// const db = require('../index')
// const Order = db.model('order')

// describe('Order model', () => {
//   describe('Validations', () => {
//     it('requires `order number`', async () => {
//       const order = Order.build();

//       try {
//         await order.validate()
//         throw Error('validation was successful but should have failed without `name`');
//       }
//       catch (err) {
//         expect(err.message).to.contain('order number cannot be null');
//       }
//     });

//     it('requires `price` to not be an integer', async () => {
//       const order = Order.build({
//         price: ''
//       });

//       try {
//         await order.validate()
//         throw Error('validation was successful but should have failed if price is an empty string');
//       } catch (err) {
//         expect(err.message).to.contain('Validation error');
//       }
//     });
//   });
// });
