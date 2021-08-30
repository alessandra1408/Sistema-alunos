import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Homepage from '../Homepage';
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
            restrictions: '',
            descriptionRestrictions: '',
            useImage: '',
            authorizedList: '',
            class: '',
            addNotes: ''
        }
    }

    onChangeSelect = (event) => {
        this.setState({restrictions: event.target.value})
        console.log(this.state.restrictions)
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = () => {
        console.log(this.state)
    }

    handleTextarea = (event) => {
        this.setState({[event.target.name]: event.target.value})
        /* let check = document.getElementById("restrictions")
        if(check.checked){
            const checkRestrictions =  this.props.checkRestrictions;
            checkRestrictions = true;
        } */

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

                    <form onSubmit>

                        <div id="inicial">
                            <label htmlFor="name">Nome do Aluno</label>
                            <input id="name" type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                            <label htmlFor="birthDate">Data de Nascimento</label>
                            <input id="birthDate" type="date" name="birthDate" value={this.state.birthDate} onChange={this.handleChange} />
                            <label htmlFor="responsible">Nome do Responsável pela criança</label>
                            <input id="responsible" type="text" name="responsible" value={this.state.responsible} onChange={this.handleChange}/>
                            <label htmlFor="responsiblePhone">Telefone de Contato do Responsável pela criança</label>
                            <input id="responsiblePhone" type="cellphone" name="responsiblePhone" value={this.state.responsiblePhone} onChange={this.handleChange} />
                            
                            <label htmlFor="emergencyCase">Em caso de emergência avisar: (Pais, Tios, Avós, )</label>
                            
                            <select name="emergencyCase" onChange={this.onChangeSelect}>
                                {emergencyCase.map((item) => (
                                    <option value={item.value}>{item.value}</option>
                                ))}
                            </select>

                            <label htmlFor="emergencyPhone">Telefone para Emergências</label>
                            <input id="emergencyPhone" type="cellphone" name="emergencyPhone" value={this.state.emergencyPhone} onChange={this.handleChange}/>
                        </div>
                            
                        <div id="final">
                            <div class="divCheckbox">
                                <label htmlFor="restrictions">Possui Restrição Alimentar?</label>
                                <input id="restrictions" type="checkbox" name="restrictions" value={this.state.restrictions} onChange={this.handleTextarea}/>
                            </div>

                            {this.props.checkRestrictions && (
                                <>
                                <label htmlFor="descriptionRestrictions">Descrição das Restrições Alimentares</label>
                                <textarea id="descriptionRestrictions" name="descriptionRestrictions" value={this.state.descriptionRestrictions} onChange={this.handleChange}/>
                                </>
                            )}
                            
                            <div class="divCheckbox">
                                <label htmlFor="useImage">Autorização de fotos e vídeos da criança para uso escolar?</label>
                                <input type="checkbox" name="useImage" value={this.state.useImage}/>
                            </div>
                            <label htmlFor="authorizedList">Lista de autorizados a buscar a criança. Ex. Pedro – Padrinho, Maria – Tia</label>
                            <input id="authorizedList" type="text" name="authorizedList" value={this.state.authorizedList} onChange={this.handleChange}/>
                            
                            <label htmlFor="class">Turma</label>
                            <select id="class" name="class" value={this.state.class} onChange={this.handleChange}>
                                <option value="10A"></option>
                                <option value="10B"></option>
                                <option value="10C"></option>
                            </select>
                            
                            <label htmlFor="addNotes">Observações adicionais</label>
                            <input id="addNotes" type="text" name="addNotes" value={this.state.addNotes} onChange={this.handleChange}/>
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