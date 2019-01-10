// /* global describe beforeEach it */

// //database and models
// const db = require('../index')
// const {Order, OrderDetails} = require('./index')

// //
// const {expect} = require('chai')
// const chaiThings = require('chai-things')
// // const assertType = require('chai-asserttype')

// describe('The `order` model', () => {
//   // First we clear the database and recreate the tables before beginning a run

//   before(() => {
//     return db.sync({force: true})
//   })

//   // Next, we create an (un-saved!) beer instance before every spec
//   let order
//   let orderDetails

//   beforeEach(() => {
//     order = Order.build({
//       orderNumber: '1468702106',
//       orderDate: new Date(),
//       shipped: false
//     })

//     orderDetails = OrderDetails.build({
//       quantity: 2,
//       price: 24.99
//     })
//   })

//   describe('order attributes definition', () => {
//     it('includes all fields', async () => {
//       const savedOrder = await order.save()
//       expect(savedOrder.orderNumber).to.equal('1468702106')
//       expect(savedOrder.orderDate).to.equal(new Date())
//       expect(savedOrder.shipped).to.equal(false)
//     })
//   })

//   describe('order details attributes definition', () => {
//     it('includes all fields', async () => {
//       const savedOrderDetails = await orderDetails.save()
//       expect(Number(savedOrderDetails.quantity)).to.equal(2)
//       expect(Number(savedOrderDetails.price)).to.equal(24.99)
//     })

//     it('requires `order number`', async () => {
//       order.orderNumber = null

//       let result, error
//       try {
//         result = await order.validate()
//       } catch (err) {
//         error = err
//       }

//       if (result)
//         throw Error('validation should fail when order number is null')

//       expect(error).to.be.an.instanceOf(Error)
//     })
//   })

//   describe('associations', () => {
//     //  Add a `belongsTo` relationship between articles and users,
//     //  but make sure the user is aliased as `author` for each article.
//     // it("belongs to a user, who is stored as the article's `author`", async () => {
//     //   const creatingBeerStyle = BeerStyle.create({
//     //     name: 'Lager'
//     //   })
//     //   const creatingBeer = Beer.create({
//     //     name: "Lagunitas A Little Sumpin' Sumpin' Ale'",
//     //     brand: 'Lagunitas Brewing Company',
//     //     description:
//     //       'Way smooth and silky with a nice wheaty-esque-ish-ness. Just the little sumpin’ sumpin’ we all need to kick Summer into full swing! Ingredients: Hops, Malt, Hops, Hops, Yeast, Hops, Water, and Hops.',
//     //     inventory: 30,
//     //     imageUrl:
//     //       'https://cdn.shopify.com/s/files/1/0067/6030/0609/products/lagunitas-a-little-sumpin-sumpin-ale-12oz-bottle_652ab982-a23f-4cd6-bee6-555d0bb67d43_1080x.jpg?v=1541293821',
//     //     price: 3.99,
//     //     ABV: 7.5,
//     //     packSize: '6 pack',
//     //     beerStyleId: 1
//     //   })
//     //   const [createdBeerStyle, createdBeer] = await Promise.all([
//     //     creatingBeerStyle,
//     //     creatingBeer
//     //   ])
//     //   // this method `setAuthor` automatically exists if you set up the association correctly
//     //   await createdBeer.setBeerStyle(createdBeerStyle)
//     //   const foundBeer = await Beer.findOne({
//     //     where: { name: "Lagunitas A Little Sumpin' Sumpin' Ale'" },
//     //     include: { model: BeerStyle }
//     //   })
//     //   expect(foundBeer.beerStyle).to.exist // eslint-disable-line no-unused-expressions
//     //   expect(foundBeer.beerStyle.name).to.equal('Lager')
//     // })
//   })
// })
