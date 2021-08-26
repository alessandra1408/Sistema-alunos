import React, { Component } from 'react';
import Route from '../../route';
import { Link } from 'react-router-dom';
import './index.css'

class Header extends Component {
    render(){
        return (
            <div>
                <header>Alunos Escola Amorinha</header>
            </div>
        );
    }
};

export default Header;