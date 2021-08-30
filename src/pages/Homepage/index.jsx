import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Homepage/style.css'

class Homepage extends Component{
    render({props}){

        return(

            <>
            
            <ul>
                <li>
                <Link to={{
                pathname:"/teste",
                state:{ myName: "Rhenato"}
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