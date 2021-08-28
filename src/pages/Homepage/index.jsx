import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Homepage/style.css'

class Homepage extends Component{
    render(){
        return(
            <>
            <ul>
                <li>
                <Link to="/register">Register</Link>
                </li>

                <li>
                <Link to="/editpage">Edit</Link>
                </li>
            </ul>s
            
            <h1>Home page</h1>
            </>
            
        )
    }
}

export default Homepage;