/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Order = require('../db/models/order')

describe('Order routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/users/', () => {
    beforeEach(() => {
      return Order.create({
        orderNumber: '1468702106',
        orderDate: new Date(),
        shipped: false
      })
    })

    it('GET /api/orders', async () => {
      const res = await request(app)
        .get('/api/orders')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].orderNumber).to.be.equal(1468702106)
    })
  }) // end describe('/api/users')
}) // end describe('User routes')
