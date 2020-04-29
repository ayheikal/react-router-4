import React from 'react';
import {withRouter} from 'react-router-dom'
function SmartColor({match}) {
    let style={
        backgroundColor:match.params.color,
        textAlign:'center',
        padding:20,
        borderColor:'#000000',
        borderStyle:'solid',
        margin:15,
    };

    return (
        <div style={style}>
            <h1>Smart Color:</h1>
            <h2>{match.params.text}</h2>
            <h3>{match.path}</h3>
        </div>
    );
}

export default withRouter(SmartColor);