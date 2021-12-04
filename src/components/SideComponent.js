import React, { Component }  from 'react';
import { NavLink } from 'react-router-dom';

const sideStyle = {
    color: 'yellow',
    backgroundColor: 'blue',
}

class Side extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-1" id="sides" style={sideStyle}>
                            <NavLink className="nav-link" to="/overview">Overview</NavLink>
                            <NavLink className="nav-link" to="/setup">Setup</NavLink>
                            <NavLink className="nav-link" to="/turn">Turns</NavLink>
                            <NavLink className="nav-link" to="/end">End</NavLink>
                        </div>
                    </div> 
                </div>
            </React.Fragment>
            );
    }

}
export default Side;