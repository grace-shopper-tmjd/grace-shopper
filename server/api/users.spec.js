// /* global describe beforeEach it */

// const {expect} = require('chai')
// const request = require('supertest')
// const db = require('../db')
// const app = require('../index')
// const User = db.model('user')

// describe('User routes', () => {
//   beforeEach(() => {
//     return db.sync({force: true})
//   })

//   describe('/api/users/', () => {
//     const laurensEmail = 'lauren@webbook.com'

//     beforeEach(() => {
//       return User.create({
//         firstName: 'Lauren',
//         lastName: 'James',
//         email: laurensEmail,
//         password: 'apple',
//         salt: 'aeugaewkfhuk',
//         googleId: '84826465',
//         address: '22 Seuss St',
//         city: 'Pacoima',
//         state: 'California',
//         zipcode: 91331,
//         role: 'notAdmin',
//         phone: '7361948362',
//         billingAdd: '173 Donkey Atreet',
//         billingCity: 'Pacoima',
//         billingZip: 91331,
//         ship: true
//       })
//     })

//     it('GET /api/users', async () => {
//       const res = await request(app)
//         .get('/api/users')
//         .expect(200)

//       expect(res.body).to.be.an('array')
//       expect(res.body[0].email).to.be.equal(laurensEmail)
//     })
//   }) // end describe('/api/users')
// }) // end describe('User routes')
