import React from 'react';
import Paper from 'material-ui/Paper';
import {Link} from 'react-router-dom';



export const Char = ({name, occupation, debt, weapon, id}) => {
    return (
        <div style={{margin:'10px', cursor:'pointer'}}>
        <Paper zDepth={4} >
            <Link to={`/${id}`}>
                <h2>{name}</h2>
            </Link>
        </Paper>
        </div>
    );
};