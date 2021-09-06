import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, FormLabel, Input, InputLabel } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add'
import Header from '../../components/Header';




class Editpage extends Component{
    constructor(props){
        super(props)
        this.state = {
            fill: 'iiiiiiii'
        };
    }

    inputLocal = () => {
        localStorage.getItem()
    }


    render(){
        return(
            <Container>
                <Header />
                
                <div id="divForm"> 

                    <h1>Aluno: {this.state.name}</h1>

                    <form>

                        <div id="inicial">
                            <label htmlFor="name">Nome do Aluno</label>
                            <input id="name" type="text" />
                            <label htmlFor="birth">Data de Nascimento</label>
                            <input id="birth" type="date" />
                            <label htmlFor="responsible">Nome do Responsável pela criança</label>
                            <input id="responsible" type="text" />
                            <label htmlFor="responsiblePhone">Telefone de Contato do Responsável pela criança</label>
                            <input id="responsiblePhone" type="cellphone" />
                            <label htmlFor="emergencyCase">Em caso de emergência avisar: (Pais, Tios, Avós, Padrinhos)</label>
                            <input id="emergencyCase" type="text" />
                            <label htmlFor="emergencyPhone">Telefone para Emergências</label>
                            <input id="emergencyPhone" type="cellphone" />
                        </div>
                    </form>
                </div>
                <Button startIcon={<AddIcon />} variant="contained" color="primary" mx="auto"/>
            </Container>
        )
    }
}

export default Editpage;