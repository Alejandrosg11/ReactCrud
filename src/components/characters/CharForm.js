import React, {Component} from 'react';
import {TextField} from 'material-ui';

class CharForm extends Component{

    state = {
        character:this.props.character || {}
    }

    onChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const {character} = this.state;
        character[field] = value;
        this.setState({character});
    }

    render(){
        const {name, occupation, weapon, debt, id} = this.state.character;
        return(
            <div>
                <h5>Nombre del personaje</h5>
                <TextField 
                name="name"
                floatingLabelText="Nombre"
                value={name}
                />
            </div>
        );
    }
}

export default CharForm;