import React from 'react';
import {NavLink} from "react-router-dom";

function ProtectedHome(props) {
    return (
        <div>
            <h2>Protected Home</h2>
            <nav>
                <NavLink to={'/'}>Home</NavLink>{' | '}
                <NavLink to={'/link1'}>link1</NavLink>{' | '}
                <NavLink to={'/link2'}>link2</NavLink>{' | '}
            </nav>
            <NavLink to={'/logout'} className={"btn btn-primary"}>logout</NavLink>
        </div>
    );
}

export default ProtectedHome;