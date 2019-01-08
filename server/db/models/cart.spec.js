const { expect } = require('chai')
const db = require('../index')
const Cart = db.model('cart')

describe('Cart model', () => {
  describe('Validations', () => {
    it('requires `quantity`', async () => {
      const cart = Cart.build();

      try {
        await cart.validate()
        throw Error('validation was successful but should have failed without `quantity`');
      }
      catch (err) {
        expect(err.message).to.contain('quantity cannot be null');
      }
    });
  });
});
