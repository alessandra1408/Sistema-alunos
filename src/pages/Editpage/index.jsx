import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Editpage extends Component{
    constructor(props){
        super(props)
        this.state = {
            fill: ''
        };
    }
    render(){
        return(
            <div>
                <Link to="/">Home</Link>
                <Link to="/register">Register</Link>
                <p>Nome: {this.state.fill}</p>
            </div>
        )
    }
}

export default Editpage;