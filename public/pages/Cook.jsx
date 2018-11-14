import React, { Component } from "react";
import "./Cook.css";
const numbers = [1, 2, 3, 4, 5];
const foods = ["momo", "tea"];
const quantity = [4, 3];
const listNum = numbers.map(numbers => <tr>{numbers}</tr>);
const listFood = foods.map(foods => <tr>{foods}</tr>);
const listQuantity = quantity.map(quantity => <tr>{quantity}</tr>);

class Cook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderItems: [
        { Table: "Table1", name: "Momo", qty: 1 },
        { Table: "Table2", name: "Chowmin", qty: 1 },
        { Table: "Table3", name: "coke", qty: 1 }
      ]
    };
  }

  render() {
    const { orderItems } = this.state;
    return (
      <div class="container">
        <nav class="navbar ">
          <p />
          <h1>Orders List</h1>
          <p />
        </nav>

        {orderItems.map(item => {
          return (
            <div class="row">
              <div class="col-md-6 col-lg-3 ">
                <br />
                <div class="card1">
                  <h4>{item.Table}</h4>

                  <table class="table table-bordered">
                    <thead class="thead-light">
                      <tr>
                        <th>SN</th>
                        <th>Name</th>
                        <th>Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{orderItems.indexOf(item) + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.qty}</td>
                      </tr>
                    </tbody>
                  </table>

                  <button type="button" class="btn btn-success">
                    Done
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Cook;
