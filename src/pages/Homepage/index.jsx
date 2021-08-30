import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Homepage/style.css'

class Homepage extends Component{
    render(){
        const checkRestrictions = true;

        return(
            <>
            <ul>
                <li>
                <Link  to="/register" params={{checkRestrictions: true}} >Register</Link>
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