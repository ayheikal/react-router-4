import React from 'react';
import {withRouter} from 'react-router'

function Lorem({match}) {
    return (
        <div>
            <h3>{match.params.eid}</h3>
            <p><strong>Request path: </strong>{match.path}</p>
            <p>
                lorem isopl je suis tres content and u have to tell me ur name and i will fuck u i a good style
            </p>
            <p>
                aha agian and i will say forgive me God everyday and everyTime thanks God for this life u gift me
            </p>
            <p><strong>Time Stamp:</strong>{Date.now()}</p>
        </div>
    );
}

export default withRouter(Lorem);