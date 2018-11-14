import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);

    this.state ={
      tableList: ['Table 1','Table 2','Table 3'],
      message: '',
    };
  }

  

  addItem(e){
    e.preventDefault();
    const {tableList} = this.state;
    const newTable = this.newTable.value;
    const isOnTheList = tableList.includes(newTable);
    if (isOnTheList){
      this.setState({
        message : 'This table is already on the list.'
      })

    } else{
      newTable !== '' && this.setState({
        tableList: [...this.state.tableList, newTable],
        message : ''
      })
    }

    
    this.addForm.reset();
  }
  removeItem(item){
    const newtableList = this.state.tableList.filter(tableList => {
      return tableList !== item;
    });
    this.setState({
      tableList: [...newtableList]
    })
  }
  render() {
    const {tableList, message } =this.state;
    return (

     <div className="container">
       <form ref={input => this.addForm = input } className="form-inline" onSubmit={(e) => {this.addItem(e)}}>
         <div className="form-group">
           <label className="sr-only" htmlFor="newTableInput">Add New Item</label>
                    
         </div>
         <select ref={input => this.newTable = input }>
            <option value="Table 1">Table 1</option>
            <option value="Table 2">Table 2</option>
            <option value="Table 3">Table 3</option>
            <option value="Table 4">Table 4</option>
            <option value="Table 5">Table 5</option>
            <option value="Table 6">Table 6</option>
            </select>
         <button type="submit" className="btn btn-primary">Add</button>
       </form>
       {
         message !== '' && <p className="message text-danger">{message}</p>
       }
       <div class="col-md-12 ">
          
        <div class ="row">
        {
                tableList.map(item => {
                  return(
                    <div className="item col-md-6 col-lg-3"  key={item}>
                    <div>{item}</div>
                    <div className="content"></div>
                    <button onClick={(e)=> this.removeItem(item)} type="button" className="btn btn-default btn-sm">
                        Remove
                      </button>
                    </div>
                    
                  ) 
                })
              }
        </div>

      </div>
     
     </div>
    );
  }
}

export default App;
