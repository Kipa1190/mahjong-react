import React, { Component }  from 'react';
import { Navbar, Nav, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom'; 

class Body extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                        <div className="row">
                            <div className="col">
                            <a className="list-group-item list-group-item-success list-group-item-action active" id="list-overview-list" data-toggle="list" href="#list-overview" role="tab" aria-controls="overview">Overview</a>
                            <a className="list-group-item list-group-item-success list-group-item-action" id="list-set-up-list" data-toggle="list" href="#list-set-up" role="tab" aria-controls="set-up">Set Up</a>
                            <a className="list-group-item list-group-item-success list-group-item-action" id="list-turn-order-list" data-toggle="list" href="#list-turn-order" role="tab" aria-controls="turn-order">Turns</a>
                            
                            <a className="list-group-item list-group-item-success list-group-item-action" id="list-end-list" data-toggle="list" href="#list-endGame" role="tab" aria-controls="endGame">Ending the Game</a>
                            </div>
                        </div>
                </div>
            </React.Fragment>
            );
    }
}

export default Body;