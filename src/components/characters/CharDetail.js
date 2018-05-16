import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {CircularProgress} from 'material-ui';
import {getCharacterById} from '../../services/api';
import Lapiz from 'material-ui/svg-icons/content/create'
import CharForm from './CharForm';

class CharDetail extends React.Component{

    state = {
        character:{},
        loading:true,
        formOpen:false
    }

componentWillMount(){
    getCharacterById(this.props.match.params.id)
      .then(character=>{
          this.changeLoading();
          this.setState({character})
      })
      .catch(e=>console.log(e));
}

changeLoading = () => {
    setTimeout(()=>{
        this.setState({loading:false})
    }  ,2000)
}

handleClose = () =>{
    this.props.history.goBack();
};

render(){
    const {name, occupation, debt, weapon} = this.state.character;
    return (
        <div >
        <Dialog
          title={name}
          modal={false}
          open={true}
          onRequestClose={this.handleClose}
        >
        <FlatButton 
            onClick={()=>this.setState({formOpen:true})}
            icon={<Lapiz  />} style={{position:'fixed', top:10,right:10}}/>
        {this.state.loading ? <CircularProgress/> : 
        <div>
            <p>{occupation}</p>
            <p>{debt}</p>
            <p>{weapon}</p>
        </div>}
        </Dialog>



                <Dialog
                    open={this.state.formOpen}
                    onRequestClose={()=>this.setState({formOpen:false})}
                >
                    <CharForm character={this.state.character} />
                </Dialog>
        </div>

        
    );
}
}

export default CharDetail;