import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router'
class Color extends Component {

    render() {
        let style={
            background:this.props.color,
            padding:20
        }
        return (
            <div style={style}>
                <h2>{this.props.text}</h2>
                <h2>{this.props.match.path}</h2>

            </div>
        );
    }
}

Color.propTypes = {
    color:PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default withRouter(Color);