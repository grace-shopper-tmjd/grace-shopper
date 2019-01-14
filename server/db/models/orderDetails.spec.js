/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const OrderDetails = db.model('orderDetails')

describe('OrderDetails model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('column definitions and validations', () => {
    it('has all fields', () => {
      return OrderDetails.create({
        quantity: 4,
        price: 3.99
      }).then(orderDetails => {
        expect(orderDetails.quantity).to.equal(4)
        expect(orderDetails.price).to.equal(3.99)
      })
    })

    it('`quantity` is required', () => {
      const orderDetails = OrderDetails.build({
        price: 3.99
      })
      return orderDetails.validate().then(
        () => {
          throw new Error('Validation should have failed!')
        },
        err => {
          expect(err).to.be.an('error')
        }
      )
    })

    it('`price` is required', () => {
      const orderDetails = OrderDetails.build({
        quantity: 4
      })
      return orderDetails.validate().then(
        () => {
          throw new Error('Validation should have failed!')
        },
        err => {
          expect(err).to.be.an('error')
        }
      )
    })
  })
})
