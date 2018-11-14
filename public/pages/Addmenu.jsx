import React, { Component } from 'react';
import './Main.css';
import { Link} from "react-router-dom";
        
class Admin extends Component {
    render(){
        return(
    <div class="container">
        <div class="sidenav">
        <Link to ="/Admin"><a>Admin</a></Link>
        <Link to ="/Addmenu"><a href="">Add Menu</a></Link>
        <Link to ="/Addtable"><a href="">Add Table</a></Link>
        <Link to ="/Viewmenu"><a>View Menu</a></Link>
            <a href="">Setting</a>
        </div>

        <div class="page">
        <h2>Admin Panel</h2> 
           
            <form class="text-center border border-light p-5">

                <p class="h4 mb-4">Add Menu</p>
                <div className="radio">Select Category :
                <label><input type="radio" name="optradio" checked/> Option 1</label>               
                <label><input type="radio" name="optradio"/> Option 2</label>
                </div>
                <input type="text" id="defaultContactFormName" class="form-control mb-4" placeholder="Insert New Category"/>

                <select class="browser-default custom-select mb-4">
                    <option value="2">Breakfast</option>
                    <option value="3">Drinks</option>
                    <option value="4">Dinner</option>
                </select>
                <input type="text" id="defaultContactFormName" class="form-control mb-4" placeholder="Name of Item"/>
                <input type="text" id="defaultContactFormName" class="form-control mb-4" placeholder="Price of Item"/>
                <button class="btn btn-info btn-block" type="submit">Save</button>
            </form>     
                
        </div>
        </div>
        );
    }
}

export default Admin