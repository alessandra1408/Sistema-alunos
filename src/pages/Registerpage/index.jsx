import React, { Component, createElement} from 'react';
import Header from '../../components/Header'
import { Button, FormLabel, InputLabel, Container, CssBaseline, TextField, Grid, Select, Checkbox, MenuItem, FormControlLabel, Box, FormGroup } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import '../Registerpage/style.css';

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
            f: '',
            familyList: ["Clauber"]
        }
    }
    
    onChangeSelect = (event) => {
        this.setState({[event.target.name]: event.target.value})
        console.log({[event.target.name]: event.target.value})
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
        localStorage.setItem(this.state.name,JSON.stringify(this.state))
    }

    handleTextarea = (event) => {
        this.setState({[event.target.name]: false})
        let checkbox = document.getElementById([event.target.name]);

        this.setState({[event.target.name]: this.state.restrictions})

        if(checkbox.checked){
            this.setState({[event.target.name]: true})
        }
        else{
            this.setState({[event.target.name]: false})
        }
    }

    addFamily= () => {
        this.setState({familyList: [].concat(this.state.familyList, this.state.f)})
    }

    render(){
        
        console.log(this.state)
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

                <Container component="main" maxWidth={false}>
                    <Header />
                    <CssBaseline />

                    <Container className="Form">
                        <FormLabel>
                            <Grid container spacing={4}>
                                <Grid item xs={12} sm={6}>
                                    <TextField 
                                    autoComplete="name"
                                    name="name"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="Nome do Aluno"
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                    autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField 
                                    name="birthDate"
                                    variant="outlined"
                                    type="date"
                                    required
                                    fullWidth
                                    label="Data de Nascimento"
                                    value={this.state.birthDate}
                                    onChange={this.handleChange}
                                    InputLabelProps={{
                                        shrink: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField 
                                    name="responsible"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="Nome do Responsável pela criança"
                                    value={this.state.responsible}
                                    onChange={this.handleChange}
                                    />
                                </Grid>
                                <Grid id="responsiblePhone" item xs={12} sm={6}>
                                    <TextField 
                                        name="responsiblePhone"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        label="Telefone do Responsável pela criança"
                                        value={this.state.responsiblePhone}
                                        onChange={this.handleChange}
                                        />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <InputLabel id='emergencyCase'>Em caso de Emergência avisar:</InputLabel>
                                    <Select
                                    name="emergencyCase"
                                    labelId='emergencyCase'
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="Em caso de emergência avisar"
                                    value={this.state.emergencyCase}
                                    onChange={this.handleChange} >
                                            
                                            {emergencyCase.map((item) => (
                                            <MenuItem value={item.value}>{item.value}</MenuItem>
                                            ))}

                                    </Select>
                                </Grid>
                                <Grid id="emergencyPhone" item xs={12} sm={6}>
                                    <TextField 
                                        name="emergencyPhone"
                                        variant="outlined"
                                        type="phone"
                                        required
                                        fullWidth
                                        label="Telefone para Emergências"
                                        value={this.state.emergencyPhone}
                                        onChange={this.handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormControlLabel
                                        control={<Checkbox onChange={this.handleTextarea} id="restrictions" name="restrictions" />}
                                        label="Possui Restrição Alimentar?"
                                    />

                                    {this.state.restrictions && (
                                        <>
                                            <InputLabel htmlFor="descriptionRestrictions" id="labelRestrictions">Descrição das Restrições Alimentares</InputLabel>
                                            <TextField
                                                name="descriptionRestrictions"
                                                variant="outlined"
                                                required
                                                fullWidth
                                                value={this.state.descriptionRestrictions}
                                                onChange={this.handleChange}/>
                                        </>
                                    )}


                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={<Checkbox onChange={this.handleTextarea} id="useImage" name="useImage" />}
                                        label="Autorização de fotos e vídeos da criança para uso escolar?"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField 
                                    name="authorizedList"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="Lista de autorizados a buscar a criança"
                                    value={this.state.authorizedList}
                                    onChange={this.handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <InputLabel id='class'>Turma</InputLabel>
                                    <Select
                                    name="class"
                                    labelId='class'
                                    variant="outlined"

                                    required
                                    fullWidth
                                    label="Em caso de emergência avisar"
                                    value={this.state.class}
                                    onChange={this.handleChange} >
                                            
                                            {classOptions.map((item) => (
                                            <MenuItem value={item.value}>{item.value}</MenuItem>
                                            ))}

                                    </Select>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField 
                                        name="addNotes"
                                        variant="outlined"
                                        fullWidth
                                        label="Observações adicionais"
                                        value={this.state.addNotes}
                                        onChange={this.handleChange}
                                        />
                                </Grid>
                                

                                    {this.state.familyList.map(f =>
                                        <>
                                            <Grid class="familyList" name="familyList" id="familyList" item xs={12}>
                                                <TextField
                                                name="familyList"
                                                variant="outlined"
                                                required
                                                style = {{width: 300}}
                                                label="Lista de autorizados a buscar:"
                                                value={this.state.f}
                                                onChange={this.handleChange}
                                                />
                                                <Button
                                                id="btnAdd"
                                                variant="contained" onClick={this.addFamily} color="primary" value={this.state.familyList}>{<AddIcon />}</Button>
                                            </Grid>
                                        </>   
                                    )}
                            </Grid>    
                                <Box  display="flex" justifyContent="center" m={2} p={1} style={{height: 70}}>
                                    <Button
                                        variant="contained"
                                        color="Secondary"
                                        style = {{left: 30}}
                                        onClick={this.handleSubmit}>Cadastrar</Button>
                                </Box>
                        </FormLabel>
                    </Container>
                
                </Container>
        );
    }
}

export default Registerpage;