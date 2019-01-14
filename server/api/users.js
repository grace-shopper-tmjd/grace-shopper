const router = require('express').Router()
const {User} = require('../db/models/index')
module.exports = router

// const throwNotFoundIfFalsey = maybeFalsey => {
//   if (!maybeFalsey) {
//     const err = Error('user not found')
//     err.status = 404
//     throw err
//   }
// }

// router.get('/', async (req, res, next) => {
//   try {
//     const users = await User.findAll({
//       // explicitly select only the id and email fields - even though
//       // users' passwords are encrypted, it won't help if we just
//       // send everything to anyone who asks!
//       attributes: ['id', 'email']
//     })
//     res.json(users)
//   } catch (err) {
//     next(err)
//   }
// })

// router.get('/:id', async (req, res, next) => {
//   try {
//     const user = await User.findOne({
//       where: {
//         id: req.params.id
//       }
//     })
//     res.send(user)
//   } catch (err) {
//     next(err)
//   }
// })

// router.post('/', async (req, res, next) => {
//   try {
//     const user = await User.create(req.body)
//     res.status(201).json(user)
//   } catch (err) {
//     next(err)
//   }
// })

// router.put('/:id', async (req, res, next) => {
//   try {
//     const array = await User.update(req.body, {
//       returning: true,
//       where: {
//         id: req.params.id
//       }
//     })
//     throwNotFoundIfFalsey(array[0])
//     res.json(array[1])
//   } catch (err) {
//     next(err)
//   }
// })

// router.delete('/:id', async (req, res, next) => {
//   try {
//     const deletedUser = await User.destroy({
//       where: {
//         id: req.params.id
//       }
//     })
//     throwNotFoundIfFalsey(deletedUser)
//     res.sendStatus(204)
//   } catch (err) {
//     next(err)
//   }
// })

router.post('/login', async (req, res, next) => {
  try {
    const user = await User.findOne({where: {email: req.body.email}})
    if (!user) {
      console.log('No such user found:', req.body.email)
      res.status(401).send('Wrong username and/or password')
    } else if (!user.correctPassword(req.body.password)) {
      console.log('Incorrect password for user:', req.body.email)
      res.status(401).send('Wrong username and/or password')
    } else {
      req.login(user, err => (err ? next(err) : res.json(user)))
    }
  } catch (err) {
    next(err)
  }
})

router.get('/me', (req, res) => {
  res.json(req.user)
})

router.post('/registration', async (req, res, next) => {
  try {
    const user = await User.create(req.body)
    req.login(user, err => (err ? next(err) : res.json(user)))
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists')
    } else {
      next(err)
    }
  }
})
