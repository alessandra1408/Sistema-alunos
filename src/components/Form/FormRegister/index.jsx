import React, { Component } from 'react';
import SelectRestrictions from '../../Select/Restrictions';
import SelectImage from '../../Select/UseImage';
import { Link } from 'react-router-dom';
import './index.css'
  

class FormRegister extends Component {
    constructor(props){
        super(props);
        this.state = {
        isGoing: true,
        numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value});

    localStorage.setItem([name],JSON.stringify({value}))
    event.preventDefault();
  }

        /* super(props)
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event){
        this.setState({value: event.target.value})
    }

    handleSubmit(event){
        alert('Aluno cadastrado');
        localStorage.setItem("Algo: ",this.state.value)
        event.preventDefault();
    } */

    render(){

        const formNewStudent = [
            {
                labelName: 'Nome do Aluno',
                inputId: 'studentName'
            },
            {
                labelName: 'Data de Nascimento',
                inputId: 'dayBirth'
            },
            {
                labelName: 'Responsável pelo Aluno',
                inputId: 'studentGuardian'
            },
            {
                labelName: 'Número do Responsável pelo Aluno',
                inputId: 'guardianNumber'
            },
            {
                labelName: 'Em caso de Emergência avisar',
                inputId: 'emergencyCase'
            },
            {
                labelName: 'Número de emergência',
                inputId: 'emergencyNumber'
            },
            {
                labelName: 'Lista de autoriados a buscar a criança',
                inputId: 'authorizationList'
            },
            {
                labelName: 'Turma',
                inputId: 'class'
            },
            {
                labelName: 'Observações adicionais',
                inputId: 'addInfos'
            }
        ];

        const sim_ou_nao = [
            {
                value: ''
            },
            {
                value: 'SIM'
            },
            {
                value: 'NÃO'
            }
        ];
        
        const description = [
            {
                labelName: 'Descrição das Restrições:',
                inputId: 'resDescription'
            }
        ];

        return (
            <>
            <Link to="/">Home</Link>
            <form onSubmit={this.handleSubmit} >
                    {formNewStudent.map((item, index)=>(
                        <>
                            <label htmlFor={index}>{item.labelName}</label>
                            <input onChange={this.handleInputChange} type="text" value={this.state.inputValue} name={item.labelName} id={item.inputId}/>
                            
                        </> 
                    ))}
                    <SelectRestrictions labelName="Possui Restrições Alimentares?" opcoes={sim_ou_nao} infos={description}/>
                    <SelectImage labelName="Autoriza o uso de imagens para a escola?" opcoes={sim_ou_nao}/>
                    <input type="submit" />
            </form>
            </>
        );
    }
}

export default FormRegister;