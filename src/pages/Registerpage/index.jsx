import React, { Component } from 'react';
import Header from '../../components/Header'
import FormRegister from '../../components/Form/FormRegister';
import Homepage from '../../pages/Homepage'
import Editpage from '../Editpage';
import Route from '../../route';
import { Link } from 'react-router-dom';

class Registerpage extends Component {
    render() {
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

        return(
            <>  
                
                <Header />
                <FormRegister infos={formNewStudent}/>
                <button onClick={Editpage}>CLIQUE AQUI</button>
                <h1>PAGINA DE HOME</h1>
            </>
        );
    }
}

export default Registerpage;