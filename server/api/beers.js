const router = require('express').Router()
const {Beer, BeerStyle} = require('../db/models/index')
const requireLogin = require('../middlewares/requireLogin')
module.exports = router

const throwNotFoundIfFalsey = maybeFalsey => {
  if (!maybeFalsey) {
    const err = Error('beer not found')
    err.status = 404
    throw err
  }
}

router.get('/', async (req, res, next) => {
  try {
    const beers = await Beer.findAll()
    throwNotFoundIfFalsey(beers)
    res.send(beers)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const beer = await Beer.findOne({
      where: {
        id: req.params.id
      },
      include: [{model: BeerStyle}]
    })
    throwNotFoundIfFalsey(beer)
    res.send(beer)
  } catch (err) {
    next(err)
  }
})

router.get('/style/:beerStyleId', async (req, res, next) => {
  try {
    const beers = await Beer.findAll({
      where: {
        beerStyleId: req.params.beerStyleId
      }
    })
    throwNotFoundIfFalsey(beers)
    res.send(beers)
  } catch (err) {
    next(err)
  }
})

router.get('/packsize/:num', async (req, res, next) => {
  try {
    const beers = await Beer.findAll({
      where: {
        packSize: req.params.num + ' pack'
      }
    })
    throwNotFoundIfFalsey(beers)
    res.send(beers)
  } catch (err) {
    next(err)
  }
})

router.post('/', requireLogin, async (req, res, next) => {
  try {
    const beer = await Beer.create(req.body)
    res.status(201).json(beer)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', requireLogin, async (req, res, next) => {
  try {
    const array = await Beer.update(req.body, {
      returning: true,
      where: {
        id: req.params.id
      }
    })
    throwNotFoundIfFalsey(array[0])
    res.json(array[1])
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', requireLogin, async (req, res, next) => {
  try {
    const deletedBeer = await Beer.destroy({
      where: {
        id: req.params.id
      }
    })
    throwNotFoundIfFalsey(deletedBeer)
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
})
