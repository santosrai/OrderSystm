import React, { Component } from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

// const data = ''
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // isToggleOn: true,
      // data: "",
      // clicks: 0,
      // value: 0,
      // array lai list ma change garda qty ko use garna milxa
      buyItems: [{ name: "Momo", qty: 1 }, { name: "Chowmin", qty: 1 }]
    };

    // This binding is necessary to make `this` work in the callback
    // this.handleClick = this.handleClick.bind(this);
  }

  addItem(item) {
    const { buyItems } = this.state;
    const newItem = item;
    //list ma array jasari include rakhna namilne vayera some use gareko xa
    // some le pani include jastai list ma same value xa vane TRUE return garxa
    const isOnTheList = buyItems.some(e => e.name == newItem);

    if (isOnTheList) {
      //pahile ko element haru addBuyItems ma sareko
      const addBuyItems = this.state.buyItems;
      // jun repeated element xa tyo matrai changeItem ma sareko
      const changeItem = this.state.buyItems.filter(buyItems => {
        return buyItems.name === item;
        //yesko value [o:object-name="coke",qty=1] hunxa
        //yesko return jahile pani 1 matrai hunxa cus filter bata same value eutai matrai niskinxa
      });
      changeItem[0].qty++; // always [0] cus yesko object 0 position ma matrai hunxa
      // ++ le 1 le increase garxa

      this.setState({
        // [...] le sabai change vayeko addBuyItems haru buyItems ma update garxa
        buyItems: [...addBuyItems]
      });
    } else {
      newItem !== "" &&
        this.setState({
          buyItems: [...this.state.buyItems, { name: item, qty: 1 }],
          message: ""
        });
    }
  }

  removeItem(item) {
    const newBuyItems = this.state.buyItems.filter(buyItems => {
      return buyItems.name !== item; // [!==] le tyo bata nabayeko sabai filter vayera baki rahanxa
    });
    this.setState({
      buyItems: [...newBuyItems]
    });
  }

  confirmMenu() {
    const fs = require("fs");
    var jsonString = JSON.stringify(this.state.buyItems);
    //console.log(jsonString);
    alert(jsonString);
  }

  render() {
    const { buyItems, message } = this.state;
    return (
      <div className="container">
        <nav className="navbar navbar-light bg-light">
          <Link className=" btn" to="/Home">
            Back
          </Link>
          <h1>Orders List</h1>
        </nav>
        <Router>
          <div>
            <Route
              path="/"
              render={() => {
                return "";
              }}
            />
          </div>
        </Router>
        <div className="row">
          <div className="container panelBody">
            <div className="orderView" type="text" id="inputData">
              <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Item</th>
                    <th>Qty</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {buyItems.map(item => {
                    return (
                      <tr key={buyItems.indexOf(item)}>
                        <th scope="row">{buyItems.indexOf(item) + 1}</th>
                        <td>{item.name}</td>
                        <td>{item.qty}</td>
                        <td className="text-middle">
                          <button
                            onClick={e => this.removeItem(item.name)}
                            type="button"
                            className="btn btn-default btn-sm"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="rowPad">
              <button
                className="btn  btn-lg"
                onClick={e => this.addItem("Momo")}
              >
                {" "}
                MO:MO
              </button>
              <button
                className="btn  btn-lg"
                onClick={e => this.addItem("Chowmin")}
              >
                CHOWMIN
              </button>
              <button
                className="btn  btn-lg"
                onClick={e => this.addItem("Burger")}
              >
                BURGER
              </button>
              <button
                className="btn  btn-lg"
                onClick={e => this.addItem("Cola")}
              >
                COLA
              </button>
              <button
                className="btn  btn-lg"
                onClick={e => this.addItem("Pepsi")}
              >
                PEPSI
              </button>
            </div>

            {/* When button clicks it render data from button.value using event */}

            <div class="rowPad">
              <button
                type="submit"
                className="btn btn-info"
                onClick={e => this.confirmMenu()}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
