import React, {Component} from 'react';
import PropTypes from 'prop-types';

class PropsViewer extends Component {
    render() {
        return (
            <div>
                <p> {this.props.match.path}</p>
                <p>{this.props.location.pathname}</p>
                <p>{this.props.location.key}</p>

            </div>
        );
    }
}

PropsViewer.propTypes = {};

export default PropsViewer;