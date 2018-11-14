import React, { Component } from 'react';
import './Main.css';
import { Link} from "react-router-dom";
        


class Cook extends Component {
    render(){
        return(            
                <div class="container">
                    <nav class="navbar ">
                        <p></p>
                        <h1>Ordering Sytem</h1>
                        <p></p>
                    </nav>
                        <div class ="row">
                            <div class="col-md-12 col-lg-12 align-self-center">
                                 
                            <Link to ="/Cook"><button type="button" class="btn main">Cook</button></Link>
                              
                            </div>
                            <div class="col-md-12 col-lg-12 align-self-center">
                            <Link to ="/Home"><button type="button" class="btn main">Waiter</button></Link>
                            </div>
                        </div>
                    </div>
                     
           
           
        );
    }
}

export default Cook