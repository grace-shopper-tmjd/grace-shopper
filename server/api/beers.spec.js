// /* global describe beforeEach it */

// const {expect} = require('chai')
// const request = require('supertest')
// const db = require('../db')
// const app = require('../index')
// const User = db.model('beer')

// describe('Beer routes', () => {
//   beforeEach(() => {
//     return db.sync({force: true})
//   })

//   describe('/api/beer/', () => {
//     const beerName = 'Heineken'

//     beforeEach(() => {
//       return Beer.create({
//         name: beerName
//       })
//     })

//     it('GET /api/beers', async () => {
//       const res = await request(app)
//         .get('/api/beers')
//         .expect(200)

//       expect(res.body).to.be.an('array')
//       expect(res.body[0].name).to.be.equal(beerName)
//     })
//   }) // end describe('/api/users')
// }) // end describe('User routes')
