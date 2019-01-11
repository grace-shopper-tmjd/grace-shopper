const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const {Beer, BeerStyle} = require('../db/models/index')

describe('Beer routes', () => {
  describe('GET `/api/beers`', () => {
    it('GET /api/beers', async () => {
      const res = await request(app)
        .get('/api/beers')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].name).to.be.equal(
        `Lagunitas A Little Sumpin' Sumpin' Ale'`
      )
    })
  })
  describe('GET `/api/beers/:id`', () => {
    // before(() => {
    //     return db.sync({ force: true })
    // })
    it('it serves up a single beer', async () => {
      it('GET /api/beers/1', async () => {
        const res = await request(app)
          .get('/api/beers/' + 1)
          .expect(200)

        if (typeof res.body === 'string') {
          res.body = JSON.parse(res.body)
        }
        expect(res.body.name).to.equal('Allagash Map 40 - 12oz Bottle')
        expect(res.body.brand).to.equal('Allagash Brewing Company')
      })

      // Here we pass in a bad ID
      it('returns a 404 error if the ID is incorrect', async () => {
        const res = await request(app)
          .get('/api/beers/12333233243')
          .expect(404)
      })
    })
    // after(() => {
    //     return db.sync({force: true})
    // })
  })
})
