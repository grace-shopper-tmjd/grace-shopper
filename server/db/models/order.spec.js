// Assertions
// const chai = require('chai')
// const expect = chai.expect
// const chaiThings = require('chai-things')
// chai.use(chaiThings)

// //Order Model
// const {Order} = require('../index')

// describe('Campus model', () => {
//   describe('Validations', () => {
//     it('requires `orderNumber`', async () => {
//       const lala = Order.build({
//         shipped: true
//       })

//       try {
//         await lala.validate()
//         throw Error(
//           'validation was successful but should have failed without `name`'
//         )
//       } catch (err) {
//         expect(err.message).to.contain('name cannot be null')
//       }
//     })

// it('requires `name` to not be an empty string', async () => {
//   const campus = Campus.build({
//     name: ''
//   });

//   try {
//     await campus.validate()
//     throw Error('validation was successful but should have failed if name is an empty string');
//   } catch (err) {
//     expect(err.message).to.contain('Validation error');
//     /* handle error */
//   }
// });
//   })
// })
