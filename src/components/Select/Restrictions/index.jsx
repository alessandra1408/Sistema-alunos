import React, { Component } from 'react';


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
                        <option key={index}>{item.value}</option>
                    ))}
                </select>
                {this.props.infos.map((item, index)=>(
                    <div>
                        <label htmlFor={index}>{item.labelName}</label>
                        <input type="text" name={index} id={item.inputId}/>
                    </div> 
                ))}
            </div>
        )
    }
}

export default SelectRestrictions;