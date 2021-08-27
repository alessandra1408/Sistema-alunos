import React, { Component } from 'react';
import SelectRestrictions from '../../Select/Restrictions';
import SelectImage from '../../Select/UseImage';
import { Link } from 'react-router-dom';
import './style.css'
import Header from '../../Header';
  

class FormRegister extends Component {
    constructor(props){
        super(props);
        this.state = {
        isGoing: true,
        numberOfGuests: 2,
        name: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value});

    return {
        name, value
    }
    
  }

  handleSubmit(event){
    event.preventDefault();
    
    this.setState({
        [event.target.name]: event.target.value});
    localStorage.setItem([event.target.name],JSON.stringify([event.target.value]))
    console.log(this.state);
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

        const formNewStudent01 = [
            {
                labelName: 'Nome do Aluno',
                inputId: 'studentName'
            },
            {
                labelName: 'Data de Nascimento',
                inputId: 'dayBirth'
            },
            {
                labelName: 'Nome do Responsável pela Criança',
                inputId: 'studentGuardian'
            },
            {
                labelName: 'Em caso de emergência avisar: (Pais, Tios, Avós, Padrinhos)',
                inputId: 'guardianNumber'
            },
            {
                labelName: 'Telefone para Emergências',
                inputId: 'emergencyCase'
            }
        ];

        const formNewStudent02 = [
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

        return (
            <>
            <div id="divMenu">
                <nav>
                        <ul>
                            <li>
                            <Link to="/">Home</Link>
                            </li>

                            <li>
                            <Link to="/editpage">Edit</Link>
                            </li>
                        </ul>
                </nav>
            </div>
            
            <div id="divForm"> 

            <form onSubmit={this.handleSubmit} >
                    {formNewStudent01.map((item, index)=>(
                        <>
                            <label htmlFor={index}>{item.labelName}</label>
                            <input onChange={this.handleInputChange} type="text" name={this.state.name} id={item.inputId}/>
                            <br />
                        </> 
                    ))}

                    <SelectRestrictions labelName="Possui Restrições Alimentares?" opcoes={sim_ou_nao}/>
        
                    <SelectImage labelName="Autoriza o uso de imagens para a escola?" opcoes={sim_ou_nao}/>

                    {formNewStudent02.map((item, index)=>(
                        <>
                            <label htmlFor={index}>{item.labelName}</label>
                            <input onChange={this.handleInputChange} type="text" name={this.state.name} id={item.inputId}/>
                            <br />
                        </> 
                    ))}
                    <button type="submit">Cadastrar</button>
            </form>
            </div>
            </>
        );
    }
}

export default FormRegister;