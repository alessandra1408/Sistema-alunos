import React, { Component } from 'react';
import { Link } from 'react-router-dom';


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
            <div id="divBody">
                <div id="divMenu">
                    <nav>
                            <ul>
                                <li>
                                <Link to="/">Home</Link>
                                </li>

                                <li>
                                <Link to="/register">Register</Link>
                                </li>
                            </ul>
                    </nav>
                </div>

                <div>
                    <ul>
                        <li></li>
                    </ul>
                </div>
                        

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
            </div>
        )
    }
}

export default Editpage;