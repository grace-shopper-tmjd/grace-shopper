const {db, User} = require('./server/models/db')

const beer = [{
    name: 'Bud Light® Beer - 30pk / 12oz Cans',
    brand: 'Bud Light',
    description: 'Bud Light is brewed using a blend of premium aroma hop varieties, both American-grown and imported, and a combination of barley malts and rice. Its superior drinkability and refreshing flavormakesit the worlds favorite light beer.',
    inventory: 30,
    imageUrl: 'https://target.scene7.com/is/image/Target/GUEST_6bf09092-e0c3-43a9-a5e2-777a26287c8b?wid=1464&hei=1464&fmt=webp',
    type: 'IPA',
    price: 21.99,
    ABV: 2,
    packSize: 30
},{
    name: 'Allagash White - 12oz Bottle',
    brand: 'Allagash Brewing Company',
    description: 'Our interpretation of a traditional Belgian wheat beer. Brewed with a generous portion of wheat and spiced with coriander and Curacao orange peel, this beer is fruity, refreshing and slightly cloudy in appearance.',
    inventory: 30,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0067/6030/0609/products/allagash-white-12oz-bottle_becbeab6-dac2-4b2e-8c5e-56fc798f747d_1080x.jpg?v=1541293849',
    type: 'Wheat',
    price: 4.99,
    ABV: 5.1,
    packSize: 1
},{
    name: 'Allagash Map 40 - 12oz Bottle',
    brand: 'Allagash Brewing Company',
    description: 'Our interpretation of a traditional Belgian wheat beer. Brewed with a generous portion of wheat and spiced with coriander and Curacao orange peel, this beer is fruity, refreshing and slightly cloudy in appearance.',
    inventory: 30,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0067/6030/0609/products/allagash-white-12oz-bottle_becbeab6-dac2-4b2e-8c5e-56fc798f747d_1080x.jpg?v=1541293849',
    type: 'Wheat',
    price: 4.99,
    ABV: 7.5,
    packSize: 1
},{
    name: 'Gnomegang - 12oz Bottle',
    brand: 'Allagash Brewing Company',
    description: 'This delectable blonde ale is a co-creation of two famed farmstead breweries: Brewery Ommegang and Brasserie d’Achouffe. It employs five fine malts, two noble hops, and both of the distinctive Chouffe and Ommegang yeasts. You’ll enjoy the smooth drinkability, fruity aromas and flavors, and warming finish',
    inventory: 30,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0067/6030/0609/products/gnomgang_d894f4fa-1312-4153-86b2-b4b7b958a9c4_1080x.jpg?v=1538408950',
    type: 'Wheat',
    price: 4.99,
    ABV: 7.5,
    packSize: 1
},{
    name: 'Ommegang Game of Thrones Winter is Here',
    brand: 'Brewery Ommegang',
    description: 'Winter Is Here is a Belgian-style double white ale. Fittingly for a double white (walker) ale, the label is graced by the ominous visage of the Night King, who is expected to arrive as forcefully in Season 7 as this beer ABV will arrive in your stomach.',
    inventory: 30,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0067/6030/0609/products/gnomgang_d894f4fa-1312-4153-86b2-b4b7b958a9c4_1080x.jpg?v=1538408950',
    type: 'Belgian',
    price: 10.99,
    ABV: 8.3,
    packSize: 1
},{
    name: 'Ommegang Three Philosophers',
    brand: 'Brewery Ommegang',
    description: 'A deep burgundian brew bursting with sweet malt and dark cherry. The perfect marriage of flavor is achieved by blending Lindemans Kriek, a delicious cherry lambic from Belgium, with our rich Belgian-style ale. Crafted with wisdom and patience, this brew will help you unlock the secrets of the universe.',
    inventory: 30,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0067/6030/0609/products/ommegang-three-philosophers_8ced4806-ae2a-429c-8efe-563d062a6b4a_2048x2048.jpg?v=1538407544',
    type: 'Belgian',
    price: 11.99,
    ABV: 9.7,
    packSize: 1
},{
    name: 'Dogfish Head 120 Minute IPA',
    brand: 'Dogfish Head Craft Brewed Ales',
    description: 'Too extreme to be called beer? Brewed to a colossal 45°P, boiled for a full 2 hours while being continually hopped with high alpha American hops, dry-hopped every day in the fermenter for a month, and aged for a month on whole leaf hops, 120 Minute IPA is by far the strongest IPA ever brewed.',
    inventory: 30,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0067/6030/0609/products/dogfish-head-120-minute-ipa_136fee83-9d59-4094-a1e2-cc679ed635ca_1080x.jpg?v=1538409767',
    type: 'IPA',
    price: 12.99,
    ABV: 16.5,
    packSize: 1
},{
    name: 'Founders Breakfast Stout',
    brand: 'Founders Brewing Co.',
    description: 'You’ve got to love coffee to truly appreciate this phenomenal brew. Brewed with an abundance of flaked oats, bitter and sweetened imported chocolates, Sumatra and Kona coffee. We’re actually not sure if this is some type of coffee cake or a beer. Either way you can drink this ale with a fork. Breakfast Stout has an intense fresh roasted coffee nose toped with a cinnamon colored frothy head that seems to never fade and makes you wish breakfast could last forever.',
    inventory: 30,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0067/6030/0609/products/founders-breakfast-stout-12oz-bottle_13cd98be-539e-4a15-940a-9607ed929706_1080x.jpg?v=1538408825',
    type: 'Stout',
    price: 3.99,
    ABV: 8.3,
    packSize: 1
},

];

user = [{
    email: 'Camille@yahoo.com',
    password: 'jar',
    salt: 'awoiejirg',
    googleId: '31451352',
    address: '24 Gofish Lane',
    city: 'Kalamazoo',
    state: 'Michigan',
    zipcode: '49001',
    role: 'notAdmin',
    phone: 1234729573,
    billingAdd: '24 Gofish Lane',
    billingCity: 'Kalamazoo',
    billingZip: '49001',
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
    zipcode: '91331',
    role: 'notAdmin',
    phone: 7361948362,
    billingAdd: '173 Donkey Atreet',
    billingCity: 'Pacoima',
    billingZip: '91331',
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
    zipcode: '90210',
    role: 'Admin',
    phone: 8461956351,
    billingAdd: '389 Stupid Lane',
    billingCity: 'Los Angeles',
    billingZip: '90210',
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
    zipcode: '90210',
    role: 'Admin',
    phone: 5628561826,
    billingAdd: '46 Boring Lane',
    billingCity: 'Los Angeles',
    billingZip: '90210',
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
    zipcode: '66801',
    role: 'notAdmin',
    phone: 8631625371,
    billingAdd: '4 Puppy Way',
    billingCity: 'Emporia',
    billingZip: '66801',
    ship: true
}]







// const seed = async () => {
//   try {
//     await db.sync({force: true})
//     await User.create({
//       email: 'cody@email.com',
//       password: '12345',
//       imageUrl: '/cody.png'
//     })
//     console.log(`
//       Seed success!
//     `)
//     db.close()
//   } catch (err) {
//     console.error(`
//       Oh noes!
//     `)
//     console.error(err.stack)
//     db.close()
//   }
// }

// seed()