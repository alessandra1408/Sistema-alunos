import React, { Component } from 'react';

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
                <p>Nome: {this.state.fill}</p>
            </div>
        )
    }
}

export default FormEdit;