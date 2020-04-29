import React from 'react';
import {Link,Route} from 'react-router-dom'
import LoggingDefaultMessage from "./LoggingDefaultMessage";
import LoggingLink from "./LoggingLink";
import LoggingRoute from "./LoggingRoute";
import Lorem from "./Lorem";
const LoggingHome = ({match}) => {
    console.log(match.path)
    return (
        <div>
            <h1>Loggin home</h1>
            <h4 className={'row'} style={{margin:'auto',width:50,padding:10}}>
                <LoggingLink to={`${match.url}/lorem/12356`}>Link1</LoggingLink>
                {'|'}
               <LoggingLink to={`${match.url}/lorem/36524`}>Link2</LoggingLink>

            </h4>
            <LoggingRoute  path={`${match.url}/lorem/:eid`} component={Lorem} ></LoggingRoute>

            <Route  path={`${match.url}`} component={LoggingDefaultMessage} exact></Route>


        </div>
    );
};

export default LoggingHome;