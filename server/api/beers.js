const router = require('express').Router()
const {Beer} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const beers = await Beer.findAll()
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
      }
    })
    res.send(beer)
  } catch (err) {
    next(err)
  }
})
