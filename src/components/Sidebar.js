import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Sidebar extends Component {



    render() {
        var x=11;
        if(x==1) {
            return (

                <div className={'leftNavContainer'} style={{margin: 20, padding: 20}}>
                    <NavLink to={'/'} activeClassName={'activeNavLink'} className={'navLink'} exact>Home</NavLink><br/>
                    <NavLink to={'/props'} activeClassName={'activeNavLink'} className={'navLink'}>props</NavLink><br/>
                    <NavLink to={'/prompt'} activeClassName={'activeNavLink'}
                             className={'navLink'}>pormpt</NavLink><br/>
                    <NavLink to={'/color'} className={'navLink'}>color</NavLink><br/>
                    <NavLink  className={'navLink'}>new </NavLink>


                </div>
            );
        }
        else{
            return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink to={'/'} className="navbar-brand" >Logo</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink to={'/'}className="nav-item nav-link active" >Home <span className="sr-only">(current)</span></NavLink>
                        <NavLink to={'/props'} className="nav-item nav-link" >props</NavLink>
                        <NavLink to={'/color'} className="nav-item nav-link" >color</NavLink>
                        <NavLink to={'/prompt'} className="nav-item nav-link "  tabIndex="-1"
                           aria-disabled="true">prompt</NavLink>
                        <NavLink to={'/logging'} className="nav-item nav-link" >Loggin</NavLink>
                        <NavLink to={'/private'} className={'nav-item nav-link'}>Private</NavLink>
                        <NavLink to={'/color/Green/Green'} className={'nav-item nav-link'}>Smart color</NavLink>
                        <NavLink to={'/people'} className={'nav-item nav-link'} >People</NavLink>

                    </div>
                </div>
            </nav>
            )
        }
    }
}

export default Sidebar;