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
          firstName: 'Cody',
          lastName: 'Woof',
          email: 'cody@puppybook.com',
          password: 'bones',
          address: '4 North Lane',
          city: 'Pacoima',
          state: 'California',
          zipcode: 10427,
          role: 'notAdmin',
          billingAdd: '4 north lane',
          billingCity: 'Pacoima',
          billingZip: 10427,
          ship: false
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

  //   describe('required fields', () => {
  //     describe('omitting required fields', () => {
  //       let scruffy

  //       beforeEach(async () => {
  //         scruffy = await User.create({
  //           firstName: 'Scruffy',
  //           lastName: '',
  //           email: '',
  //           password: '',
  //           address: '4 North Lane',
  //           city: 'Pacoima',
  //           state: 'California',
  //           zipcode: 10427,
  //           role: 'notAdmin',
  //           billingAdd: '4 north lane',
  //           billingCity: 'Pacoima',
  //           billingZip: 10427,
  //           ship: false
  //         })
  //       })

  //       it('does not make a new user if a required field is omitted', () => {
  //         expect(scruffy).to.be.equal(null)
  //       })
  //     }) // end describe('correctPassword')
  //   })
}) // end describe('User model')
