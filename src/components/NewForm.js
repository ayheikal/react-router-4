import React, {Component} from 'react';
import {Prompt} from 'react-router-dom'
class NewForm extends Component {
    constructor() {
        super();
        this.state={
            firstName:'',
            lastName:'',
            valid:false,
        }
    }

    handleSubmit=(e)=>{
        if(this.state.firstName==''||this.state.lastName==''){
            this.setState({
                valid:false
            })
        }
        else{
            this.setState({
                valid:true
            })
        }
        alert(`ur name is ${this.state.firstName} ${this.state.lastName}`)
    }
    handleChangeFirstName=(e)=>{
        this.setState({
            firstName:e.target.value
        })
    }
    handleChangeLastName=(e)=>{
        this.setState({
            lastName:e.target.value
        })
    }
    render() {
        return (
            <form className="form-inline">
                <Prompt when={this.state.valid ==false} message={'leaving this from will lose data'}></Prompt>
                <div className="form-group mx-sm-3 mb-2">
                    <label htmlFor="staticEmail2" className="sr-only">First Name</label>
                    <input type="text"  className="form-control" id="staticEmail2"
                          placeholder={"First Name"} onChange={this.handleChangeFirstName}/>
                </div>
                <div className="form-group mx-sm-3 mb-2">
                    <label htmlFor="inputPassword2" className="sr-only">Last Name</label>
                    <input type="text" className="form-control" id="inputPassword2" placeholder="lastName" onChange={this.handleChangeLastName}/>
                </div>
                <button onClick={this.handleSubmit} type="submit" className="btn btn-primary mb-2">Confirm </button>
            </form>
        );
    }
}

export default NewForm;