import React, { Component } from 'react';
import Header from '../../components/Header';
import { Container } from '@material-ui/core';

class Homepage extends Component{
    render(){

        return(

            <>
                <Container component="main" maxWidth={false}>
                    <Header />
                    <h1>Home page</h1>
                </Container>
            </>
            
        )
    }
}

export default Homepage;