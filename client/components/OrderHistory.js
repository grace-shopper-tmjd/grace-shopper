import React from 'react'
import {Table} from 'reactstrap'

export default class OrderHistory extends React.Component {
  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>Order Number</th>
            <th>Order Date</th>
            <th>Shipping Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">17194723</th>
            <td>4/25/18</td>
            <td>Shipped</td>
          </tr>
          <tr>
            <th scope="row">27294618</th>
            <td>8/5/18</td>
            <td>Shipped</td>
          </tr>
          <tr>
            <th scope="row">84759261</th>
            <td>9/4/18</td>
            <td>Shipped</td>
          </tr>
        </tbody>
      </Table>
    )
  }
}
