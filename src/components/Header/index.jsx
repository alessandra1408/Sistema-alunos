import React, { Component } from 'react';
import MenuBar from '../../components/MenuBar'
import Route from '../../route';
import { Link } from 'react-router-dom';
import './index.css'

class Header extends Component {
    render(){
        return (
            <div>
                <header>Alunos Escola Amorinha</header>
                <MenuBar />
            </div>
        );
    }
};

export default Header;