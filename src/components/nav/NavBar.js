import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import {MenuItem} from 'material-ui';

let num=1;

export const NavBar = () => {
return(
    <div>
        <Toolbar>
            <ToolbarTitle  />
            <ToolbarGroup firstChild={true}> 
                <MenuItem  containerElement={<NavLink activeStyle={styles.activo}  to="/" />} primaryText="Home" />
                <NavLink  activeStyle={styles.activo}  to="/foods" >Foods</NavLink>
            </ToolbarGroup>   
            
        </Toolbar>
    </div>
);
}

const styles = {
    activo:{
        backgroundColor:'red'
    },
    noActivo:{
        backgroundColor:'grey'
    }
};
  