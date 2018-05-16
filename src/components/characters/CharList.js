import React, {Component} from 'react';
import {Char} from './Char';
import {getCharacters} from '../../services/api';
import toastr from 'toastr';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {Dialog} from 'material-ui';
import CharForm from './CharForm';

class CharList extends Component{

    state = {
        characters:[],
        formOpen:false
    }

    componentWillMount(){
        this.getCharacters();
    }

    getCharacters = () => {
        getCharacters()
        .then(characters=>{
            this.setState({characters})
            toastr.success('La lista se ha cargado con exito...')
        })
        .catch(e=>console.log(e));
    };

    render(){
        return(
            <div>
                <h1>Personajes indispensables de la vida diaria del mexicano...</h1>
                <div style={styles.conFlex} >
                    {this.state.characters.map(c=>{
                        return (
                            <Char key={c.id} {...c} />
                        );
                    })}
                </div>



                <FloatingActionButton 
                onClick={()=>this.setState({formOpen:true})}
                secondary={true} style={{position:'fixed', bottom:20,right:20}}>
                <ContentAdd />
                </FloatingActionButton>


                <Dialog
                    open={this.state.formOpen}
                    onRequestClose={()=>this.setState({formOpen:false})}
                >
                    <CharForm />
                </Dialog>
            </div>
        );
    }
}

const styles = {
    conFlex:{
        display:"flex",
        flexWrap:'wrap'
    }
}

export default CharList;