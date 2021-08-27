import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FormRegister from '../FormRegister';

class FormEdit extends Component{
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

export default FormEdit;