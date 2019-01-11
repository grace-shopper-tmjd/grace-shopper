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

/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const User = db.model('beer')
const {Beer, BeerStyle} = require('../db/models/index')

describe('Beer routes', () => {
  before(() => {
    return db.sync({force: true})
  })

  // describe('GET `/api/beers`', () => {
  //     it('it serves up all beers', async () => {
  //         await beforeEach(() => {
  //             return Beer.create({
  //                 name: 'Founders Solid Gold',
  //                 brand: 'Founders Brewing Co.',
  //                 description:
  //                     'Selected as a benchmark for the Beer Judge Certification Program used in all American based beer judgings. Centennial IPA has quickly become the IPA of choice. Pour yourself a pint of this complex flavorful ale and bask in the frothy head’s floral bouquet. Relish the immense citrus accents, achieved by the abundance of dry hopping. This ale’s sweet, malty undertones balance the hop character with a finish that never turns too bitter.',
  //                 inventory: 100,
  //                 imageUrl:
  //                     'https://cdn.shopify.com/s/files/1/0067/6030/0609/products/founders-solid-gold-6pack-cans_f86b1c2d-246f-40bc-b2ae-fc0060b3bd25_1080x.jpg?v=1538411274',
  //                 price: 40.99,
  //                 ABV: 4.4,
  //                 packSize: '4 pack',
  //                 beerStyleId: 1
  //             })
  //         })

  //         it('GET /api/beers', async () => {
  //             const res = await request(app)
  //                 .get('/api/beers')
  //                 .expect(200)

  //             expect(res.body).to.be.an('array')
  //             expect(res.body[0].name).to.be.equal({ Beer })

  //         })
  //     })
  // })
  describe('GET `/api/beers/:id`', () => {
    beforeEach(() => {
      return db.sync({force: true})
    })
    it('it serves up a single beer', async () => {
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
      await Promise.all(styles.map(style => BeerStyle.create(style)))

      let coolBeer
      beforeEach(async () => {
        const creatingBeers = [
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
        ].map(beer => Beer.create(beer))

        const createdBeers = await Promise.all(creatingBeers)
        coolBeer = createdBeers[2]
      })

      it('GET /api/beers/1', async () => {
        const res = await request(app)
          .get('/api/beers/' + coolBeer.id)
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
