import React, { Component, useState} from 'react';
import { Link } from 'react-router-dom';
import Editpage from '../Editpage';
import Homepage from '../Homepage';
import InputMask from "react-input-mask"
import { Button } from '@material-ui/core';
import Date from './Date'


import '../Registerpage/style.css'

  
class Registerpage extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            birthDate: '',
            responsible: '',
            responsiblePhone: '',
            emergencyCase: '',
            emergencyPhone: '',
            restrictions: false,
            descriptionRestrictions: '',
            useImage: false,
            authorizedList: '',
            class: '',
            addNotes: '',
        }
    }
    
    onChangeSelect = (event) => {
        this.setState({[event.target.name]: event.target.value})
        console.log({[event.target.name]: event.target.value})
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})

        console.log({[event.target.name]: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
        localStorage.setItem(this.state.name,JSON.stringify(this.state))
/*         this.props.navigation.navigate(Editpage, {Aluno: this.state})
 */
    }

    handleTextarea = (event) => {
        this.setState({[event.target.name]: false})
        let check = this.props.location.state.checkRestrictions;
        let checkbox = document.getElementById([event.target.name]);
        console.log("checkbox: ", checkbox)
        console.log("Antes",this.props.location.state.checkRestrictions)

        this.setState({[event.target.name]: this.props.location.state.checkRestrictions})

        if(checkbox.checked){
            this.setState({[event.target.name]: true})
        }
        else{
            this.setState({[event.target.name]: false})
        }
        
        /* this.setState({this.props.location.state.checkRestrictions: false}) */
        console.log(check)
    }

    render(){

       const emergencyCase = [
           {
                value: ''
           },
           {
               value: 'Pais'
           },
           {
               value: 'Tios'
           },
           {
               value: 'Avós'
           },
           {
               value: 'Padrinhos'
           }
       ];

       const classOptions = [
           {
               value: ''
           },
           {
               value: '10A'
           },
           {
               value: '20B'
           },
           {
               value: '30C'
           }
       ];

        return (

            <div id="divBody">
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

                    <form onSubmit={this.handleSubmit}>

                        <div id="inicial">
                            <label htmlFor="name">Nome do Aluno</label>
                            <input required id="name" type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                            <Date valor={this.state.birthDate} change={this.handleChange.bind(this)}/>
                            <label htmlFor="responsible">Nome do Responsável pela criança</label>
                            <input id="responsible" type="text" name="responsible" value={this.state.responsible} onChange={this.handleChange}/>
                            <label htmlFor="responsiblePhone">Telefone do Responsável</label>
                            <InputMask mask="(999)999999999" id="responsiblePhone" name="responsiblePhone" nome="Telefone do Responsável" value={this.state.responsiblePhone}
                            onChange={this.handleChange}/>                            <label htmlFor="emergencyCase">Em caso de emergência avisar: (Pais, Tios, Avós, )</label>
                            
                            <select name="emergencyCase" onChange={this.onChangeSelect}>
                                {emergencyCase.map((item) => (
                                    <option value={item.value}>{item.value}</option>
                                ))}
                            </select>
                            
                            <label htmlFor="emergencyPhone">Telefone para Emergências</label>
                            <InputMask mask="(999)999999999" valor={this.state.emergencyPhone} id="emergencyPhone" name="emergencyPhone" onChange={this.handleChange}/>

                        </div>
                            
                        <div id="final">
                            <div id="divCheckboxRestrictions">
                                <label htmlFor="restrictions">Possui Restrição Alimentar?</label>
                                <input id="restrictions" type="checkbox" name="restrictions" value={this.state.restrictions} onChange={this.handleTextarea}/>
                            
                                </div> 
                            {this.state.restrictions && (
                                <>
                                <label htmlFor="descriptionRestrictions">Descrição das Restrições Alimentares</label>
                                <textarea id="descriptionRestrictions" name="descriptionRestrictions" value={this.state.descriptionRestrictions} onChange={this.handleChange}/>
                                </>
                            )}
                           

                            <div id="divCheckboxUseImage">
                                <label htmlFor="useImage">Autorização de fotos e vídeos da criança para uso escolar?</label>
                                <input type="checkbox" name="useImage" value={this.state.useImage} id="useImage" onChange={this.handleTextarea}/>
                            </div>

                            <label htmlFor="authorizedList">Lista de autorizados a buscar a criança. Ex. Pedro – Padrinho, Maria – Tia</label>
                            <input id="authorizedList" type="text" name="authorizedList" value={this.state.authorizedList} onChange={this.handleChange}/>
                            
                            <label htmlFor="class">Turma</label>

                            <select name="class" id="class" 
                            onChange={this.onChangeSelect}>
                                {classOptions.map((item) => (
                                    <option value={item.value}>{item.value}</option>
                                ))}
                            </select>
                            
                            <label htmlFor="addNotes">Observações adicionais</label>
                            <input id="addNotes" type="text" name="addNotes" value={this.state.addNotes} onChange={this.handleChange}/>
                                
                            <label htmlFor="familyList">Pessoas autorizadas</label>
                            <div class="divFamilyList">
                                <input id="familyList" type="text" placeholder="Clauber" />
                                <input id="familyRelation" type="text" placeholder="Pai"/>
                                <Button>ADD</Button>
                            </div>
                        </div>

                        <footer >
                            <button type="submit">Cadastrar</button>
                        </footer>

                    </form>
                
                </div>
            </div>
        );
    }
}

export default Registerpage;