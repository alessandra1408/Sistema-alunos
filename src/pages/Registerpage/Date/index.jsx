import React, {Component} from 'react';
import InputMask from "react-input-mask"
import "../Date/style.css"


class Date extends Component {
    render(){

        return(
            <>
            <InputMask mask="99/99/9999" id="birthDate" type="text" name="birthDate"
            value={this.props.valor}
            onChange={this.props.change} />
            </>
        )
    }
}

export default Date;