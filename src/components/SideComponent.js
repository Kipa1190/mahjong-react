import React, { Component }  from 'react';
import { NavLink } from 'react-router-dom';

const sideStyle = {
    color: 'white',
    backgroundColor: 'black',
}

class Side extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col" id="sides" style={sideStyle}>
                            <NavLink className="nav-link" to="/overview" style={{color: 'white', textDecoration: 'none'}} activeStyle={{color: 'green', textDecoration: 'none'}}>Overview</NavLink>
                            <NavLink className="nav-link" to="/setup" style={{color: 'white', textDecoration: 'none'}} activeStyle={{color: 'green', textDecoration: 'none'}}>Setup</NavLink>
                            <NavLink className="nav-link" to="/turn" style={{color: 'white', textDecoration: 'none'}} activeStyle={{color: 'green', textDecoration: 'none'}}>Turns</NavLink>
                            <NavLink className="nav-link" to="/end" style={{color: 'white', textDecoration: 'none'}} activeStyle={{color: 'green', textDecoration: 'none'}}>End</NavLink>
                        </div>
                    </div> 
                </div>
            </React.Fragment>
            );
    }

}
export default Side;