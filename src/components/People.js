import React, {Component} from 'react';
import PersonApi from './PersonApi'
import {Link} from 'react-router-dom'

let api=new PersonApi();
class People extends Component {
    constructor(props) {
        super(props);
        this.state={
            people:[],
            newName:'',
            newOccupation:''
        };
    }
    componentDidMount() {
        this.setState({
            people:api.getAuthors(),

        });

    }
    onAddNewPerson=()=>{}
    onOccupationChange=()=>{}
    onNameChange=()=>{}
    onDeleteChange=()=>{}
    onDeletePerson=(e,id)=>{}
    getId(){}

    render() {
        let people=this.state.people.map((person,index)=>{
            const linkUrl=`${this.props.match.url}/${person.id}?name=${person.name}&occupation=${person.occupation}`;

            return(
                <tr key={index}>
                    <td>{person.id}</td>
                    <td>
                        <Link to={linkUrl}>{person.name}</Link>
                    </td>
                    <td>{person.occupation}</td>
                    <td>
                        <button onClick={(e)=>this.onDeletePerson(e,person.id)}>Delete</button>
                    </td>
                </tr>
            )

        })
        return (
            <div>
                <h1>people</h1>
                <table bordered={false} responsive={true} striped={true}>
                    <thead>
                    <tr>
                        <td><strong>ID</strong></td>
                        <td><strong>Name</strong></td>
                        <td><strong>Occupation</strong></td>
                        <td>&nbsp;</td>
                    </tr>
                    </thead>
                    <tbody>
                    {people}
                    </tbody>

                </table>
            </div>
        );
    }
}

export default People;