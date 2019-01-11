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
      let joseph

      beforeEach(async () => {
        joseph = await User.create({
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
        })
      })

      it('returns true if the password is correct', () => {
        expect(joseph.correctPassword('peanutbutter')).to.be.equal(true)
      })

      it('returns false if the password is incorrect', () => {
        expect(joseph.correctPassword('jelly')).to.be.equal(false)
      })
    }) // end describe('correctPassword')
  }) // end describe('instanceMethods')

  describe('column definitions and validations', () => {
    it('has all fields', () => {
      return User.create({
        firstName: 'Joseph',
        lastName: 'Smith',
        email: 'Joseph@aol.com',
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
        expect(user.googleId).to.equal('46275849')
        expect(user.address).to.equal('4 Puppy Way')
        expect(user.city).to.equal('Emporia')
        expect(user.state).to.equal('Kansas')
        expect(user.zipcode).to.equal(66801)
        expect(user.role).to.equal('notAdmin')
        expect(user.phone).to.equal('8631625371')
        expect(user.billingAdd).to.equal('4 Puppy Way')
        expect(user.billingCity).to.equal('Emporia')
        expect(user.billingZip).to.equal(66801)
        expect(user.ship).to.equal(true)
      })
    })

    it('`firstName` is required', () => {
      const user = User.build({
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
      })
      return user.validate().then(
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
  })
}) // end describe('User model')
