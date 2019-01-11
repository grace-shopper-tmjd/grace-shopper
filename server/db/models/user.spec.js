/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const User = db.model('user')

describe('User model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('instanceMethods', () => {
    describe('correctPassword', () => {
      let cody

      beforeEach(async () => {
        cody = await User.create({
          email: 'cody@puppybook.com',
          password: 'bones'
        })
      })

      it('returns true if the password is correct', () => {
        expect(cody.correctPassword('bones')).to.be.equal(true)
      })

      it('returns false if the password is incorrect', () => {
        expect(cody.correctPassword('bonez')).to.be.equal(false)
      })
    }) // end describe('correctPassword')
  }) // end describe('instanceMethods')

  describe('column definitions and validations', () => {
    it('has a `name`, `age`, and `biography`', () => {
      return User.create({
        firstName: 'Joseph',
        lastName: 'Smith',
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
      }).then(user => {
        expect(user.firstName).to.equal('Joseph')
        expect(user.lastName).to.equal('Smith')
        expect(user.email).to.equal('Joseph@aol.com')
        expect(user.password).to.equal('peanutbutter')
        expect(user.salt).to.equal('oiwefhoweihf')
        expect(user.googleId).to.equal('46275849')
        expect(user.address).to.equal('4 Puppy Way')
        expect(user.city).to.equal('Emporia')
        expect(user.state).to.equal('Kansas')
        expect(user.zipcode).to.equal(66801)
        expect(user.role).to.equal('notAdmin')
        expect(user.phone).to.equal('8631625371')
        expect(user.billingAdd).to.equal('4 puppy way')
        expect(user.billingCity).to.equal('Emporia')
        expect(user.billingZip).to.equal(66801)
        expect(user.ship).to.equal(true)
      })
    })

    it('`name` is required', () => {
      const pug = user.build()
      return pug.validate().then(
        () => {
          throw new Error('Validation should have failed!')
        },
        err => {
          expect(err).to.be.an('error')
        }
      )
    })

    it('`role` has a default value of notadmin', () => {
      return User.create({
        firstName: 'Joseph',
        lastName: 'Smith',
        email: 'Joseph@aol.com',
        password: 'peanutbutter',
        salt: 'oiwefhoweihf',
        googleId: '46275849',
        address: '4 Puppy Way',
        city: 'Emporia',
        state: 'Kansas',
        zipcode: 66801,
        phone: '8631625371',
        billingAdd: '4 Puppy Way',
        billingCity: 'Emporia',
        billingZip: 66801,
        ship: true
      }).then(user => {
        expect(user.role).to.equal('notAdmin')
      })
    })

    it('`biography` can hold a longer string', async () => {
      const longBio = `The breed is often described by the Latin phrase multum in parvo, or "much in little" or "a lot of dog in a small space", alluding to the Pug's remarkable and charming personality, despite its small size. Pugs are strong willed but rarely aggressive, and are suitable for families with children. The majority of the breed is very fond of children and sturdy enough to properly play with them. Depending on their owner's mood, they can be quiet and docile but also vivacious and teasing. Pugs tend to be intuitive and sensitive to the moods of their owners and are usually eager to please them. Pugs are playful and thrive on human companionship. They also tend to have a snoozy nature and spend a lot of time napping. Pugs are often called "shadows" because they follow their owners around and like to stay close to the action, craving attention and affection from their owners.`

      return Pug.create({name: 'Wiki', biography: longBio}).then(pug => {
        expect(pug.name).to.equal('Wiki')
        expect(pug.biography).to.equal(longBio)
      })
    })

    // Make sure that you define the associations in `server/models/index.js`!
    // Note: this requires a working Coffee model
    it('has a one-many relationship with Coffee, via `favoriteCoffee`', () => {
      let coffee
      return Promise.all([
        Pug.create({name: 'Joe'}),
        Coffee.create({
          name: 'Puppaccino',
          ingredients: ['espresso', 'frothed milk', 'love']
        })
      ])
        .then(([pug, createdCoffee]) => {
          coffee = createdCoffee
          return pug.setFavoriteCoffee(createdCoffee)
        })
        .then(pug => {
          expect(pug.favoriteCoffeeId).to.be.equal(coffee.id)
        })
    })

    // Make sure that you define the associations in `server/models/index.js`!
    // Note: be careful - the pluralization is important here!
    it('has a many-many relationship with other Pugs as `friends`', () => {
      let penny
      return Promise.all([
        Pug.create({name: 'Penny'}),
        Pug.create({name: 'Doug'})
      ])
        .then(([pennyFromDb, doug]) => {
          penny = pennyFromDb
          return penny.addFriend(doug)
        })
        .then(() => {
          return penny.getFriends()
        })
        .then(friends => {
          expect(friends).to.be.an('array')
          expect(friends.length).to.equal(1)
          expect(friends[0].name).to.equal('Doug')
        })
    })
  })
}) // end describe('User model')
