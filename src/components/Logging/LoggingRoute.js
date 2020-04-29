import React from 'react';
import {Route} from 'react-router-dom'


const LoggingRoute =({component:ComponentToRender, ...rest}) => {
    return (
        <Route {...rest} render={(props)=>{
            alert('Routing is logging: '+props.match.params.eid);
            return<ComponentToRender{...props}/>
        }}></Route>
    );
};



export default LoggingRoute;