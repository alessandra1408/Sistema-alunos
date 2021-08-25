import React, { Component } from 'react';

class SelectImage extends Component {
    constructor(props){
        super(props)
        this.state = {
            optionSelected: ''
        };
    }

    onChangeSelected = (event) => {
        this.setState({optionSelected: event.target.value});
        if(this.state.optionSelected === "SIM"){
            console.log("Entrou");
        }
    }

    render(){
        return(
            <div>
                <label>{this.props.labelName}</label>
                <select onChange={this.onChangeSelected}>
                    {this.props.opcoes.map((item, index)=>(
                        <option key={index}>{item.value}</option>
                    ))}
                </select>
                
            </div>
        )
    }
}

export default SelectImage;