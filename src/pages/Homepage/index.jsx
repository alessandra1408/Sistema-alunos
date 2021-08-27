import React, { Component } from 'react';
import Route from '../../route'
import { Link } from 'react-router-dom';
import Registerpage from '../Registerpage';

class Homepage extends Component{
    render(){
        return(
            <>
            <Link to="/register">Register</Link>
            <Link to="/editpage">Edit</Link>
            <h1>Home page</h1>
            </>
            
        )
    }
}

export default Homepage;