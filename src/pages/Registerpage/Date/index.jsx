import React, {Component} from 'react';
import Registerpage from '../../Registerpage';
import InputMask from "react-input-mask"


class Date extends Component {
    render(){

        return(
            <>
            <label htmlFor="birthDate">Data de Nascimento</label>
            <InputMask mask="99/99/9999" id="birthDate" type="text" name="birthDate"
            value={this.props.valor}
            onChange={this.props.change} />
            </>
        )
    }
}

export default Date;