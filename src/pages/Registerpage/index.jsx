import React, { Component, useState} from 'react';
import { Link } from 'react-router-dom';
import Editpage from '../Editpage';
import Homepage from '../Homepage';
import InputMask from "react-input-mask";
import { Button, FormLabel, Input, InputLabel } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
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


                    <FormLabel onSubmit={this.handleSubmit}>

                        <div id="inicial">
                            <InputLabel htmlFor="name">Nome do Aluno</InputLabel>
                            <Input id="name" type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                            <InputLabel htmlFor="birthDate">Data de Nascimento</InputLabel>
                            <Date valor={this.state.birthDate} change={this.handleChange.bind(this)}/>
                            <InputLabel htmlFor="responsible">Nome do Responsável pela criança</InputLabel>
                            <Input id="responsible" type="text" name="responsible" value={this.state.responsible} onChange={this.handleChange}/>
                            <InputLabel htmlFor="responsiblePhone">Telefone do Responsável</InputLabel>
                            <InputMask mask="(999)999999999" id="responsiblePhone" name="responsiblePhone" nome="Telefone do Responsável" value={this.state.responsiblePhone}
                            onChange={this.handleChange}/>                            <InputLabel htmlFor="emergencyCase">Em caso de emergência avisar: (Pais, Tios, Avós, )</InputLabel>
                            
                            <select name="emergencyCase" onChange={this.onChangeSelect}>
                                {emergencyCase.map((item) => (
                                    <option value={item.value}>{item.value}</option>
                                ))}
                            </select>
                            
                            <InputLabel htmlFor="emergencyPhone">Telefone para Emergências</InputLabel>
                            <InputMask mask="(999)999999999" valor={this.state.emergencyPhone} id="emergencyPhone" name="emergencyPhone" onChange={this.handleChange}/>

                        </div>
                            
                        <div id="final">
                            <div id="divCheckboxRestrictions">
                                <InputLabel htmlFor="restrictions">Possui Restrição Alimentar?</InputLabel>
                                <Input id="restrictions" type="checkbox" name="restrictions" value={this.state.restrictions} onChange={this.handleTextarea}/>
                            
                                </div> 
                            {this.state.restrictions && (
                                <>
                                <InputLabel htmlFor="descriptionRestrictions">Descrição das Restrições Alimentares</InputLabel>
                                <textarea id="descriptionRestrictions" name="descriptionRestrictions" value={this.state.descriptionRestrictions} onChange={this.handleChange}/>
                                </>
                            )}
                           

                            <div id="divCheckboxUseImage">
                                <InputLabel htmlFor="useImage">Autorização de fotos e vídeos da criança para uso escolar?</InputLabel>
                                <Input type="checkbox" name="useImage" value={this.state.useImage} id="useImage" onChange={this.handleTextarea}/>
                            </div>

                            <InputLabel htmlFor="authorizedList">Lista de autorizados a buscar a criança. Ex. Pedro – Padrinho, Maria – Tia</InputLabel>
                            <Input id="authorizedList" type="text" name="authorizedList" value={this.state.authorizedList} onChange={this.handleChange}/>
                            
                            <InputLabel htmlFor="class">Turma</InputLabel>

                            <select name="class" id="class" 
                            onChange={this.onChangeSelect}>
                                {classOptions.map((item) => (
                                    <option value={item.value}>{item.value}</option>
                                ))}
                            </select>
                            
                            <InputLabel htmlFor="addNotes">Observações adicionais</InputLabel>
                            <Input id="addNotes" type="text" name="addNotes" value={this.state.addNotes} onChange={this.handleChange}/>
                                
                            <InputLabel htmlFor="familyList">Pessoas autorizadas</InputLabel>
                            <div class="divFamilyList">
                                <Input id="familyList" type="text" placeholder="Clauber" />
                                <Input id="familyRelation" type="text" placeholder="Pai"/>
                                <Button startIcon={<AddIcon />} size="small" variant="contained" color="primary"/>
                            </div>
                        </div>

                        <footer >
                            <Button type="submit">Cadastrar</Button>
                        </footer>

                    </FormLabel>
                
                </div>
            </div>
        );
    }
}

export default Registerpage;