import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Homepage/style.css'

class Homepage extends Component{
    render(){

        return(

            <>

            <ul>
                <li>
                <Link to={{
                pathname:"/register",
                state:{checkRestrictions:''}
                 }}>Vamos pro teste</Link>
                </li>

                <li>
                <Link to="/editpage">Edit</Link>
                </li>
            </ul>
            
            <h1>Home page</h1>
            </>
            
        )
    }
}

export default Homepage;