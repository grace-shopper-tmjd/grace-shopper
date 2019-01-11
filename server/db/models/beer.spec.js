/* global describe beforeEach it */

//database and models
const db = require('../index')
const {Beer, BeerStyle} = require('./index')

//
const {expect} = require('chai')
// const assertType = require('chai-asserttype')

describe('The `beer` model', () => {
  // First we clear the database and recreate the tables before beginning a run

  before(() => {
    return db.sync({force: true})
  })

  // Next, we create an (un-saved!) beer instance before every spec
  let beerStyle1
  let beer
  beforeEach(() => {
    beerStyle1 = BeerStyle.build({
      name: 'Lager'
    })

    beer = Beer.build({
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
      beerStyleId: 1
    })
  })

  describe('beer style attributes definition', () => {
    it('includes a name field', async () => {
      const savedBeerStyle = await beerStyle1.save()
      expect(savedBeerStyle.name).to.equal('Lager')
    })
  })

  describe('beer attributes definition', () => {
    it('includes all fields', async () => {
      const desc =
        'Selected as a benchmark for the Beer Judge Certification Program used in all American based beer judgings. Centennial IPA has quickly become the IPA of choice. Pour yourself a pint of this complex flavorful ale and bask in the frothy head’s floral bouquet. Relish the immense citrus accents, achieved by the abundance of dry hopping. This ale’s sweet, malty undertones balance the hop character with a finish that never turns too bitter.'
      const imgUrl =
        'https://cdn.shopify.com/s/files/1/0067/6030/0609/products/founders-solid-gold-6pack-cans_f86b1c2d-246f-40bc-b2ae-fc0060b3bd25_1080x.jpg?v=1538411274'
      const savedBeer = await beer.save()
      expect(savedBeer.name).to.equal('Founders Solid Gold')
      expect(savedBeer.brand).to.equal('Founders Brewing Co.')
      expect(savedBeer.description).to.equal(desc)
      expect(savedBeer.inventory).to.equal(30)
      expect(savedBeer.imageUrl).to.equal(imgUrl)
      expect(Number(savedBeer.price)).to.equal(3.99)
      expect(Number(savedBeer.ABV)).to.equal(4.4)
      expect(savedBeer.packSize).to.equal('4 pack')
    })

    it('requires `name`', async () => {
      beer.name = null

      let result, error
      try {
        result = await beer.validate()
      } catch (err) {
        error = err
      }

      if (result) throw Error('validation should fail when name is null')

      expect(error).to.be.an.instanceOf(Error)
    })

    it('can handle long `beer description`', async () => {
      const beerDesc =
        'Selected as a benchmark for the Beer Judge Certification Program used in all American based beer judgings. Centennial IPA has quickly become the IPA of choice. Pour yourself a pint of this complex flavorful ale and bask in the frothy head’s floral bouquet. Relish the immense citrus accents, achieved by the abundance of dry hopping. This ale’s sweet, malty undertones balance the hop character with a finish that never turns too bitter.'

      const beer2 = await Beer.create({
        name: 'Founders Solid Gold',
        brand: 'Founders Brewing Co.',
        description: beerDesc,
        inventory: 30,
        imageUrl:
          'https://cdn.shopify.com/s/files/1/0067/6030/0609/products/founders-solid-gold-6pack-cans_f86b1c2d-246f-40bc-b2ae-fc0060b3bd25_1080x.jpg?v=1538411274',
        price: 3.99,
        ABV: 4.4,
        packSize: '4 pack',
        beerStyleId: 1
      })

      expect(beer2).to.be.an('object')
      expect(beer2.name).to.equal('Founders Solid Gold')
      expect(beer2.description).to.equal(beerDesc)
    })
  })

  describe('associations', async () => {
    //  Add a `belongsTo` relationship between articles and users,
    //  but make sure the user is aliased as `author` for each article.

    it('beerSyle belongs to a beer, that is stored as the beerStyleId', async () => {
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

      const [createdBeerStyle, createdBeer] = await Promise.all([
        creatingBeerStyle,
        creatingBeer
      ])

      // this method `setBeerStyle` automatically exists if you set up the association correctly
      await createdBeer.setBeerStyle(createdBeerStyle)

      const foundBeer = await Beer.findOne({
        where: {name: "Lagunitas A Little Sumpin' Sumpin' Ale'"},
        include: {model: BeerStyle}
      })

      expect(foundBeer.beerStyle).to.exist // eslint-disable-line no-unused-expressions
      expect(foundBeer.beerStyle.name).to.equal('Lager')
    })
  })
})
