/* global describe beforeEach it */

//database and models
const db = require('../index')
const {Order, OrderDetails, User, Beer, BeerStyle} = require('./index')

//
const {expect} = require('chai')
// const assertType = require('chai-asserttype')

describe('The `order` model', () => {
  // First we clear the database and recreate the tables before beginning a run

  before(() => {
    return db.sync({force: true})
  })

  // Next, we create an (un-saved!) beer instance before every spec
  let order
  let orderDetails

  beforeEach(() => {
    order = Order.build({
      shipped: false
    })

    orderDetails = OrderDetails.build({
      quantity: 2,
      price: 24.99
    })
  })

  describe('order attributes definition', () => {
    it('includes all fields', async () => {
      const savedOrder = await order.save()
      expect(Number(savedOrder.orderNumber)).to.equal(2)
      // expect(savedOrder.orderDate).to.equal(new Date())
      //expect(savedOrder.shipped).to.equal(false)
    })
  })

  describe('order details attributes definition', () => {
    it('includes all fields', async () => {
      const savedOrderDetails = await orderDetails.save()
      expect(Number(savedOrderDetails.quantity)).to.equal(2)
      expect(Number(savedOrderDetails.price)).to.equal(24.99)
    })

    // it('requires `order number`', async () => {
    //     order.orderNumber = null

    //     let result, error
    //     try {
    //         result = await order.validate()
    //     } catch (err) {
    //         error = err
    //     }

    //     if (result)
    //         throw Error('validation should fail when order number is null')

    //     expect(error).to.be.an.instanceOf(Error)
    // })
  })

  describe('associations', () => {
    before(() => {
      return db.sync({force: true})
    })
    it('testing `belongs to` relationship between order<-> user, orderDetails <-> Beer, and orderDetails <-> Order', async () => {
      const creatingUser = User.create({
        firstName: 'Lala',
        lastName: 'Lewis',
        email: 'lala@yahoo.com',
        password: 'jar',
        salt: 'awoiejirg',
        googleId: '31451352',
        address: '24 Gofish Lane',
        city: 'Kalamazoo',
        state: 'Michigan',
        zipcode: 49001,
        role: 'notAdmin',
        phone: '1234729573',
        billingAdd: '24 Gofish Lane',
        billingCity: 'Kalamazoo',
        billingZip: 49001,
        ship: false
      })

      const creatingOrder = Order.create({
        shipped: false
      })
      const creatingBeerStyle = BeerStyle.create({
        name: 'Lager'
      })
      const creatingBeer = Beer.create({
        name: "Lagunitas A Little Sumpin' Sumpin' Ale'",
        brand: 'Lagunitas Brewing Company',
        description:
          'Way smooth and silky with a nice wheaty-esque-ish-ness. Just the little sumpin’ sumpin’ we all need to kick Summer into full swing! Ingredients: Hops, Malt, Hops, Hops, Yeast, Hops, Water, and Hops.',
        inventory: 30,
        imageUrl:
          'https://cdn.shopify.com/s/files/1/0067/6030/0609/products/lagunitas-a-little-sumpin-sumpin-ale-12oz-bottle_652ab982-a23f-4cd6-bee6-555d0bb67d43_1080x.jpg?v=1541293821',
        price: 3.99,
        ABV: 7.5,
        packSize: '6 pack',
        beerStyleId: 1
      })

      const creatingOrderDetails = OrderDetails.create({
        quantity: 2,
        price: 24.99
      })
      // Add everything to our test DB
      const [
        createdBeerStyle,
        createdBeer,
        createdUser,
        createdOrder,
        createdOrderDetails
      ] = await Promise.all([
        creatingBeerStyle,
        creatingBeer,
        creatingUser,
        creatingOrder,
        creatingOrderDetails
      ])

      //this method `setBeerStyle` automatically exists if you set up the association correctly
      await createdBeer.setBeerStyle(createdBeerStyle)

      const foundBeer = await Beer.findOne({
        where: {name: "Lagunitas A Little Sumpin' Sumpin' Ale'"},
        include: {model: BeerStyle}
      })

      expect(foundBeer.beerStyle).to.exist // eslint-disable-line no-unused-expressions
      expect(foundBeer.beerStyle.name).to.equal('Lager')

      // Add a`belongsTo` relationship between order and user
      // this method`setUser` automatically exists if you set up the association correctly
      await createdOrder.setUser(createdUser)
      const foundOrderAndUser = await Order.findOne({
        where: {userId: 1},
        include: {model: User}
      })
      expect(foundOrderAndUser.user).to.exist // eslint-disable-line no-unused-expressions
      expect(foundOrderAndUser.user.firstName).to.equal('Lala')

      // Add a`belongsTo` relationship between orderDetails and beer
      // this method`setBeer` automatically exists if you set up the association correctly
      await createdOrderDetails.setBeer(createdBeer)

      const foundBeerFromOrderDetails = await OrderDetails.findOne({
        where: {beerId: 1},
        include: {model: Beer}
      })
      expect(foundBeerFromOrderDetails.beer).to.exist // eslint-disable-line no-unused-expressions
      expect(foundBeerFromOrderDetails.beer.name).to.equal(
        "Lagunitas A Little Sumpin' Sumpin' Ale'"
      )

      //  Add a `belongsTo` relationship between orderDetails and order

      await createdOrderDetails.setOrder(createdOrder)
      const foundOrderFromOrderDetails = await OrderDetails.findOne({
        where: {orderId: 1},
        include: {model: Order}
      })
      expect(foundOrderFromOrderDetails.order).to.exist // eslint-disable-line no-unused-expressions
      expect(foundOrderFromOrderDetails.order.orderNumber).to.equal(1)
    })
  })
})
