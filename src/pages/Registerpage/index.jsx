import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Registerpage/style.css'
  
class Registerpage extends Component {

    render(){

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

                        <div id="final">
                            <label htmlFor="selectRestrictions">Possui Restrição Alimentar?</label>
                            <select name="" id="selectRestrictions">
                                <option value="SIM"></option>
                                <option value="NÃO"></option>
                            </select>
                            <label htmlFor="name">Descrição das Restrições Alimentares</label>
                            <input id="descriptionRestrictions" type="cellphone" />
                            <label htmlFor="selectUseImage">Autorização de fotos e vídeos da criança para uso escolar?</label>
                            <select name="" id="selectUseImage">
                                <option value="SIM"></option>
                                <option value="NÃO"></option>
                            </select>
                            
                            <label htmlFor="authorizedList">Lista de autorizados a buscar a criança. Ex. Pedro – Padrinho, Maria – Tia</label>
                            <input id="authorizedList" type="text" />
                            
                            <label htmlFor="name">Turma</label>
                            <input id="class" type="text" />
                            
                            <label htmlFor="addNotes">Observações adicionais</label>
                            <input id="addNotes" type="text" />
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