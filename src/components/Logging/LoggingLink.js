import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {PropTypes} from 'prop-types'
class LoggingLink extends Component {
    constructor(props) {
        super(props);
    }
    handleClick=()=>{
        let urlparts=this.props.to.split('/');
        const eid=urlparts[urlparts.length-1]
        alert('clicking on the link is logging: '+eid)
    }
    render() {
        return (
            <div>
                <Link {...this.props}onClick={this.handleClick}>{this.props.children}</Link>
                
            </div>
        );
    }
}
LoggingLink.propotype={
    to: PropTypes.string.isRequired
}
export default LoggingLink;