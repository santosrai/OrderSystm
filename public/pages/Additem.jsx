import React, { Component } from 'react';


class App extends Component {
   constructor(props) {
    super(props);
 this.state = {
      // array lai list ma change garda qty ko use garna milxa
      buyItems: [{ name: "momo", qty: 1 }, { name: "chowmin", qty: 1 }],
    };
  }

  addItem(item,) {
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
  render() {
    const { buyItems, message } = this.state;
    return (
      <div className="container">
        <button type="button" onClick={e => this.addItem("coke")}>
          Coke
        </button>
        <button type="button" onClick={e => this.addItem("Tea")}>
          Tea
        </button>

        <div>
          <h1>{this.state.text}</h1>
        </div>

        {message !== "" && <p className="message text-danger">{message}</p>}
        <div className="col-md-6 col-lg-3 ">
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
      </div>
    );
  }

   

}

export default App;
