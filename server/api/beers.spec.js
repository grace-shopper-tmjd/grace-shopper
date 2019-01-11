const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const {Beer} = require('../db/models/index')

describe('Beer routes', () => {
  beforeEach(() => {
    return Beer.create({
      name: 'Lagunitas Pils',
      brand: 'Lagunitas Brewing Company',
      description:
        'Pours a clear yellow-orange amber with a thin medium white head without retension, bu leaving a bit of lacing. Light aroma of grain and light malt. Taste is grainy with light malt but finishing with a mild hops presence that lingers as a herbal almost floral hop taste. Light to medium mouthfeel.',
      inventory: 30,
      imageUrl:
        'https://cdn.shopify.com/s/files/1/0067/6030/0609/products/lagunitas-maximus_a9438a91-b3ae-473d-a22c-edafc92aa832_2048x2048.jpg?v=1538407446',
      price: 3.99,
      ABV: 6.2,
      packSize: '6 pack'
    })
  })
  describe('GET `/api/beers`', () => {
    it('GET /api/beers', async () => {
      const res = await request(app)
        .get('/api/beers')
        .expect(200)
      if (typeof res.body === 'string') {
        res.body = JSON.parse(res.body)
      }
      expect(res.body).to.be.an('array')
      expect(res.body[0].brand).to.be.equal('Lagunitas Brewing Company')
    })
  })
  describe('GET `/api/beers/:id`', () => {
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
  })
})
