'use strict'

const db = require('../server/db')
const {
  User,
  Beer,
  Order,
  OrderDetails,
  BeerStyle
} = require('../server/db/models')

// async function seed() {
//   await db.sync({force: true})
//   console.log('db synced!')

//   const users = await Promise.all([
//     User.create({email: 'cody@email.com', password: '123'}),
//     User.create({email: 'murphy@email.com', password: '123'})
//   ])

//   console.log(`seeded ${users.length} users`)
//   console.log(`seeded successfully`)
// }
const beers = [
  {
    name: 'Bud Light® Beer - 30pk / 12oz Cans',
    brand: 'Bud Light',
    description:
      'Bud Light is brewed using a blend of premium aroma hop varieties, both American-grown and imported, and a combination of barley malts and rice. Its superior drinkability and refreshing flavormakesit the worlds favorite light beer.',
    inventory: 30,
    imageUrl:
      'https://target.scene7.com/is/image/Target/GUEST_6bf09092-e0c3-43a9-a5e2-777a26287c8b?wid=1464&hei=1464&fmt=webp',
    price: 21.99,
    ABV: 2,
    packSize: '1 pack',
    beerStyleId: 1
  },
  {
    name: 'Allagash White - 12oz Bottle',
    brand: 'Allagash Brewing Company',
    description:
      'Our interpretation of a traditional Belgian wheat beer. Brewed with a generous portion of wheat and spiced with coriander and Curacao orange peel, this beer is fruity, refreshing and slightly cloudy in appearance.',
    inventory: 30,
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0067/6030/0609/products/allagash-white-12oz-bottle_becbeab6-dac2-4b2e-8c5e-56fc798f747d_1080x.jpg?v=1541293849',
    price: 4.99,
    ABV: 5.1,
    packSize: '1 pack',
    beerStyleId: 1
  },
  {
    name: 'Allagash Map 40 - 12oz Bottle',
    brand: 'Allagash Brewing Company',
    description:
      'Our interpretation of a traditional Belgian wheat beer. Brewed with a generous portion of wheat and spiced with coriander and Curacao orange peel, this beer is fruity, refreshing and slightly cloudy in appearance.',
    inventory: 30,
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0067/6030/0609/products/allagash-white-12oz-bottle_becbeab6-dac2-4b2e-8c5e-56fc798f747d_1080x.jpg?v=1541293849',
    price: 4.99,
    ABV: 7.5,
    packSize: '1 pack',
    beerStyleId: 2
  },
  {
    name: 'Gnomegang - 12oz Bottle',
    brand: 'Allagash Brewing Company',
    description:
      'This delectable blonde ale is a co-creation of two famed farmstead breweries: Brewery Ommegang and Brasserie d’Achouffe. It employs five fine malts, two noble hops, and both of the distinctive Chouffe and Ommegang yeasts. You’ll enjoy the smooth drinkability, fruity aromas and flavors, and warming finish',
    inventory: 30,
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0067/6030/0609/products/gnomgang_d894f4fa-1312-4153-86b2-b4b7b958a9c4_1080x.jpg?v=1538408950',
    price: 4.99,
    ABV: 7.5,
    packSize: '6 pack',
    beerStyleId: 2
  },
  {
    name: 'Ommegang Game of Thrones Winter is Here',
    brand: 'Brewery Ommegang',
    description:
      'Winter Is Here is a Belgian-style double white ale. Fittingly for a double white (walker) ale, the label is graced by the ominous visage of the Night King, who is expected to arrive as forcefully in Season 7 as this beer ABV will arrive in your stomach.',
    inventory: 30,
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0067/6030/0609/products/gnomgang_d894f4fa-1312-4153-86b2-b4b7b958a9c4_1080x.jpg?v=1538408950',
    price: 10.99,
    ABV: 8.3,
    packSize: '4 pack',
    beerStyleId: 3
  },
  {
    name: 'Ommegang Three Philosophers',
    brand: 'Brewery Ommegang',
    description:
      'A deep burgundian brew bursting with sweet malt and dark cherry. The perfect marriage of flavor is achieved by blending Lindemans Kriek, a delicious cherry lambic from Belgium, with our rich Belgian-style ale. Crafted with wisdom and patience, this brew will help you unlock the secrets of the universe.',
    inventory: 30,
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0067/6030/0609/products/ommegang-three-philosophers_8ced4806-ae2a-429c-8efe-563d062a6b4a_2048x2048.jpg?v=1538407544',
    price: 11.99,
    ABV: 9.7,
    packSize: '4 pack',
    beerStyleId: 3
  },
  {
    name: 'Dogfish Head 120 Minute IPA',
    brand: 'Dogfish Head Craft Brewed Ales',
    description:
      'Too extreme to be called beer? Brewed to a colossal 45°P, boiled for a full 2 hours while being continually hopped with high alpha American hops, dry-hopped every day in the fermenter for a month, and aged for a month on whole leaf hops, 120 Minute IPA is by far the strongest IPA ever brewed.',
    inventory: 30,
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0067/6030/0609/products/dogfish-head-120-minute-ipa_136fee83-9d59-4094-a1e2-cc679ed635ca_1080x.jpg?v=1538409767',
    price: 12.99,
    ABV: 16.5,
    packSize: '6 pack',
    beerStyleId: 3
  },
  {
    name: 'Founders Breakfast Stout',
    brand: 'Founders Brewing Co.',
    description:
      'You’ve got to love coffee to truly appreciate this phenomenal brew. Brewed with an abundance of flaked oats, bitter and sweetened imported chocolates, Sumatra and Kona coffee. We’re actually not sure if this is some type of coffee cake or a beer. Either way you can drink this ale with a fork. Breakfast Stout has an intense fresh roasted coffee nose toped with a cinnamon colored frothy head that seems to never fade and makes you wish breakfast could last forever.',
    inventory: 30,
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0067/6030/0609/products/founders-breakfast-stout-12oz-bottle_13cd98be-539e-4a15-940a-9607ed929706_1080x.jpg?v=1538408825',
    price: 3.99,
    ABV: 8.3,
    packSize: '1 pack',
    beerStyleId: 4
  },
  {
    name: 'Founders Centennial IPA',
    brand: 'Founders Brewing Co.',
    description:
      'Selected as a benchmark for the Beer Judge Certification Program used in all American based beer judgings. Centennial IPA has quickly become the IPA of choice. Pour yourself a pint of this complex flavorful ale and bask in the frothy head’s floral bouquet. Relish the immense citrus accents, achieved by the abundance of dry hopping. This ale’s sweet, malty undertones balance the hop character with a finish that never turns too bitter.',
    inventory: 30,
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0067/6030/0609/products/founders-centennial-ipa-12oz-bottle_bd9bbb73-b677-41d5-a29b-42d3edfb64aa_1080x.jpg?v=1541293851',
    price: 3.99,
    ABV: 8.3,
    packSize: '6 pack',
    beerStyleId: 4
  },
  {
    name: 'Founders Solid Gold',
    brand: 'Founders Brewing Co.',
    description:
      'Selected as a benchmark for the Beer Judge Certification Program used in all American based beer judgings. Centennial IPA has quickly become the IPA of choice. Pour yourself a pint of this complex flavorful ale and bask in the frothy head’s floral bouquet. Relish the immense citrus accents, achieved by the abundance of dry hopping. This ale’s sweet, malty undertones balance the hop character with a finish that never turns too bitter.',
    inventory: 30,
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0067/6030/0609/products/founders-solid-gold-6pack-cans_f86b1c2d-246f-40bc-b2ae-fc0060b3bd25_1080x.jpg?v=1538411274',
    price: 3.99,
    ABV: 4.4,
    packSize: '4 pack',
    beerStyleId: 4
  },
  {
    name: 'Founders All Day IPA',
    brand: 'Founders Brewing Co.',
    description:
      'The beer you’ve been waiting for. Keeps your taste satisfied while keeping your senses sharp. An all-day IPA naturally brewed with a complex array of malts, grains and hops. Balanced for optimal aromatic and a clean finish. The perfect reward for an honest day’s work and the ultimate companion to celebrate life’s simple pleasures. ',
    inventory: 30,
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0067/6030/0609/products/founders-all-day-ipa-12oz-bottle_1_4ddbfbaa-1ec7-45fe-aef7-ea6c3ed896b6_1080x.jpg?v=1538407031',
    price: 3.99,
    ABV: 4.7,
    packSize: '1 pack',
    beerStyleId: 4
  },
  {
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
    beerStyleId: 2
  },
  {
    name: 'Lagunitas India Pale Ale',
    brand: 'Lagunitas Brewing Company',
    description:
      'Taste focuses on the hops. Floral, piney and citrus all are there. Mouth feel is somewhat light, but still has some nice body.',
    inventory: 30,
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0067/6030/0609/products/lagunitas-ipa_ee1fc081-4510-44e1-878a-beaecb5b51f3_2048x2048.jpg?v=1538407443',
    price: 3.99,
    ABV: 6.2,
    packSize: '6 pack',
    beerStyleId: 1
  },
  {
    name: 'Lagunitas Maximus',
    brand: 'Lagunitas Brewing Company',
    description:
      'At the height of the heat in the heart of the summer, we felt the only cure was a raging mouthful of fresh Hops and Malt. Caution: May remove enamel from teeth.',
    inventory: 30,
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0067/6030/0609/products/lagunitas-maximus_a9438a91-b3ae-473d-a22c-edafc92aa832_2048x2048.jpg?v=1538407446',
    price: 3.99,
    ABV: 6.2,
    packSize: '6 pack',
    beerStyleId: 4
  },
  {
    name: 'Lagunitas Pils',
    brand: 'Lagunitas Brewing Company',
    description:
      'Pours a clear yellow-orange amber with a thin medium white head without retension, bu leaving a bit of lacing. Light aroma of grain and light malt. Taste is grainy with light malt but finishing with a mild hops presence that lingers as a herbal almost floral hop taste. Light to medium mouthfeel.',
    inventory: 30,
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0067/6030/0609/products/lagunitas-maximus_a9438a91-b3ae-473d-a22c-edafc92aa832_2048x2048.jpg?v=1538407446',
    price: 3.99,
    ABV: 6.2,
    packSize: '6 pack',
    beerStyleId: 4
  },
  {
    name: 'Lagunitas DayTime',
    brand: 'Lagunitas Brewing Company',
    description:
      'At 4% ABV and only 98 calories, DayTime IPA represents everything we know about making hop-forward beer, expressed in a sotto voice.',
    inventory: 30,
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0067/6030/0609/products/lagunitas-daytime-6pack-cans_2048x2048.jpg?v=1546662828',
    price: 3.99,
    ABV: 4,
    packSize: '4 pack',
    beerStyleId: 3
  },
  {
    name: 'Lagunitas Willettized Coffee Stout 2018',
    brand: 'Lagunitas Brewing Company',
    description:
      " 'Stout aged in Rye Oak barrels. From our friend, the Kentucky distiller J.D. Willet himself, 'We have one type of barrel: Wood. And we put two things in'em: Rye or Bourbon.' We scored some of J.D.'s scrutable casks and put in thing in'em: beer. The taste tells. It's good to have friends!",
    inventory: 30,
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0067/6030/0609/products/lagunitas-willettized-coffee-stout-2018-2ox-bottle_1080x.jpg?v=1544761814',
    price: 12.99,
    ABV: 12.9,
    packSize: '4 pack',
    beerStyleId: 3
  }
]

const users = [
  {
    email: 'Camille@yahoo.com',
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
  },
  {
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
  },
  {
    email: 'Loretta@yahoo.com',
    password: 'apple',
    salt: 'aeugaewkfhuk',
    googleId: '84826465',
    address: '22 Seuss St',
    city: 'Pacoima',
    state: 'California',
    zipcode: 91331,
    role: 'notAdmin',
    phone: '7361948362',
    billingAdd: '173 Donkey Atreet',
    billingCity: 'Pacoima',
    billingZip: 91331,
    ship: true
  },
  {
    email: 'Rufus@aol.com',
    password: 'snickerdoodle',
    salt: 'uewhaewufhaewkfh',
    googleId: '83619485',
    address: '49 Dumb Street',
    city: 'Los Angeles',
    state: 'California',
    zipcode: 90210,
    role: 'isAdmin',
    phone: '8461956351',
    billingAdd: '389 Stupid Lane',
    billingCity: 'Los Angeles',
    billingZip: 90210,
    ship: true
  },
  {
    email: 'Philip@aol.com',
    password: 'kumquat',
    salt: 'oeofqhefoih',
    googleId: '56381642',
    address: '46 Boring Lane',
    city: 'Los Angeles',
    state: 'California',
    zipcode: 90210,
    role: 'isAdmin',
    phone: '5628561826',
    billingAdd: '46 Boring Lane',
    billingCity: 'Los Angeles',
    billingZip: 90210,
    ship: false
  },
  {
    email: 'Joseph@aol.com',
    password: 'peanutbutter',
    salt: 'oiwefhoweihf',
    googleId: '46275849',
    address: '4 Puppy Way',
    city: 'Emporia',
    state: 'Kansas',
    zipcode: 66801,
    role: 'notAdmin',
    phone: '8631625371',
    billingAdd: '4 Puppy Way',
    billingCity: 'Emporia',
    billingZip: 66801,
    ship: true
  }
]

const orders = [
  {
    orderNumber: '1468702106',
    orderDate: new Date(),
    shipped: false,
    userId: 1,
    orderDetailsId: 1
  },
  {
    orderNumber: '7230300940',
    orderDate: new Date(),
    shipped: false,
    userId: 1,
    orderDetailsId: 2
  },
  {
    orderNumber: '0464719925',
    orderDate: new Date(),
    shipped: true,
    userId: 2,
    orderDetailsId: 3
  },
  {
    orderNumber: '6822459111',
    orderDate: new Date(),
    shipped: false,
    userId: 2,
    orderDetailsId: 4
  },
  {
    orderNumber: '5360186429',
    orderDate: new Date(),
    shipped: true,
    userId: 2,
    orderDetailsId: 5
  },
  {
    userId: 2,
    orderDetailsId: 6,
    orderNumber: '3771006201',
    orderDate: new Date(),
    shipped: true
  },
  {
    orderNumber: '4326521961',
    orderDate: new Date(),
    shipped: true,
    userId: 2,
    orderDetailsId: 7
  },
  {
    orderNumber: '5761182963',
    orderDate: new Date(),
    shipped: true,
    userId: 6,
    orderDetailsId: 8
  },
  {
    orderNumber: '3323951549',
    orderDate: new Date(),
    shipped: false,
    userId: 4,
    orderDetailsId: 9
  },
  {
    orderNumber: '6734058093',
    orderDate: new Date(),
    shipped: true,
    userId: 5,
    orderDetailsId: 10
  }
]

const orderDetails = [
  {
    beerId: 1,
    orderId: 9,
    quantity: 15,
    price: 47.42
  },
  {
    beerId: 2,
    orderId: 11,
    quantity: 10,
    price: 91.16
  },
  {
    beerId: 1,
    orderId: 8,
    quantity: 9,
    price: 29.06
  },
  {
    beerId: 4,
    orderId: 1,
    quantity: 5,
    price: 17.69
  },
  {
    beerId: 4,
    orderId: 1,
    quantity: 30,
    price: 2.64
  },
  {
    beerId: 10,
    orderId: 3,
    quantity: 18,
    price: 91.79
  },
  {
    beerId: 9,
    orderId: 5,
    quantity: 7,
    price: 73.38
  },
  {
    beerId: 15,
    orderId: 1,
    quantity: 21,
    price: 52.45
  },
  {
    beerId: 8,
    orderId: 10,
    quantity: 7,
    price: 80.06
  },
  {
    beerId: 8,
    orderId: 1,
    quantity: 29,
    price: 57.53
  }
]

const styles = [
  {
    name: 'IPA'
  },
  {
    name: 'Lager'
  },
  {
    name: 'Stout'
  },
  {
    name: 'Pilsner'
  }
]

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  await Promise.all(styles.map(style => BeerStyle.create(style)))
  await Promise.all(users.map(user => User.create(user)))
  await Promise.all(beers.map(beer => Beer.create(beer)))
  await Promise.all(orders.map(order => Order.create(order)))
  await Promise.all(
    orderDetails.map(orderDetail => OrderDetails.create(orderDetail))
  )

  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
