import React, { Component } from 'react';
import './style.css'

class SelectRestrictions extends Component{
    constructor(props){
        super(props)
        this.state = {
            optionSelected: ''
        };
    }

    onChangeSelected = (evento) => {
        this.setState({optionSelected: evento.target.value});
    }

    render(){
        return(
            <div>
                <label>{this.props.labelName}</label>
                <select onChange={this.onChangeSelected}>
                    {this.props.opcoes.map((item, index)=>(
                        <>
                            <option key={index}>{item.value}</option>
                        </>
                    ))}
                </select>

                <label htmlFor="restricoes" id="Textarea">Descrição das restricões</label>
                            <textarea name="restricoes" id="restricoes" cols="90" rows="5"></textarea>
                            <br />

            </div>
        )
    }
}

export default SelectRestrictions;