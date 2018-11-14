import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

class Home extends Component {

    render () {
        return (
           
            <div id ="bg">
                    <div className="container">{ /*this is for format */}
                        <h1 className='font'>TABLE</h1>

                                <div className="d-flex justify-content-center">
                                
                                         <Link className="p-2 btn btn-primary btn-lg" to={"/Menu"}>Table1</Link>
                                         <Link className="p-2 btn btn-primary btn-lg" to={"/Menu"}>Table2</Link>
                                         <Link className="p-2 btn btn-primary btn-lg" to={"/Menu"}>Table3</Link>
                                </div>

                                <div className="d-flex justify-content-center">
                                
                                <Link className="p-2 btn btn-primary btn-lg" to={"/Menu"}>Table4</Link>
                                <Link className="p-2 btn btn-primary btn-lg" to={"/Menu"}>Table5</Link>
                                <Link className="p-2 btn btn-primary btn-lg" to={"/Menu"}>Table6</Link>

                                </div>

                                <div className="d-flex justify-content-center">
                                
                                <Link className="p-2 btn btn-primary btn-lg" to={"/Menu"}>Table7</Link>
                                <Link className="p-2 btn btn-primary btn-lg" to={"/Menu"}>Table8</Link>
                                <Link className="p-2 btn btn-primary btn-lg" to={"/Menu"}>Table9</Link>

                                </div>
                      
                                        
                    </div>
                  
                   
            </div>
             
          
                    
                 
        );
    }
}

export default Home