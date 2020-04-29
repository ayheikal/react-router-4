import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "./components/Sidebar";
import NewForm from "./components/NewForm";
import PropsViewer from "./components/PropsViewer";
import PageNotFound from "./components/PageNotFound";
import Color from "./components/Color";
import LoggingHome from "./components/Logging/LoggingHome";
import ProtectedHome from "./components/secure/ProtectedHome";
import SmartColor from "./components/SmartColor";
import People from "./components/People";
function App() {
  return (
      <Router>
        <div className="App">
            <Sidebar></Sidebar>
            <Switch>
                <Route path={'/props'} component={PropsViewer}></Route>
                <Route path='/' exact component={Home}></Route>
                <Route path={'/prompt'} component={NewForm}></Route>
                <Route path={'/color/:text/:color'} component={SmartColor}></Route>
                <Route path={'/people'} component={People}></Route>
                <Route path={'/color'} render={()=>{
                    return<Color color={'#4d5c39'} text={'heikal'}/>
                }}></Route>

                <Route path={'/logging'} component={LoggingHome}></Route>
                <Route path={'/private'} component={ProtectedHome}></Route>

                <Route component={PageNotFound}></Route>
            </Switch>
        </div>
      </Router>
  );
}

export default App;
