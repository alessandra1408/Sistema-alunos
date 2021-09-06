import React, { Component } from 'react';
import { Container, Typography, CssBaseline } from '@material-ui/core';
import { MenuList, MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './style.css'

class Header extends Component {
    render(){
        return (
            <Container id="container">
                <CssBaseline/>
                <Typography id="h1">Sistema De Alunos Escola Amorinha</Typography>

                <MenuList class="menu">
                        <MenuItem >
                            <Link class="item" to="/">Home</Link>
                        </MenuItem>
                        <MenuItem >
                            <Link class="item" to="/register">Register</Link>
                        </MenuItem>                           
                        <MenuItem >
                            <Link class="item" to="/editpage">Edit</Link>
                        </MenuItem>                         
                    </MenuList>
            </Container>
        );
    }
};

export default Header;