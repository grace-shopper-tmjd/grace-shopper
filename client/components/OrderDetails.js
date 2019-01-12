import React from 'react'
import {Table} from 'reactstrap'
export default class OrderDetails extends React.Component {
  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>Beer Name</th>
            <th>Pack Size</th>
            <th>Quantity </th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Lagunitas Pils</td>
            <td>6 pack</td>
            <td>$3.99</td>
            <td />
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Lagunitas DayTime</td>
            <td>4 pack</td>
            <td>$3.99</td>
            <td />
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>'Founders All Day IPA'</td>
            <td>1 pack</td>
            <td>$3.99</td>
            <td />
          </tr>
          <tr>
            <th scope="row">4</th>
            <td />
            <td />
            <td />
            <td>$11.97</td>
          </tr>
        </tbody>
      </Table>
    )
  }
}
