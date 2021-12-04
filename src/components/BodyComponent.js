import React, { Component }  from 'react';
import { Switch, Route, Redirect, } from 'react-router-dom';
import Overview from './OverviewComponent';
import End from './EndComponent';
import Setup from './SetupComponent';
import Turn from './TurnComponent';
import Side from './SideComponent';
import TableHand from './TableComponent';

class Body extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="col-sm-1">
                    <Side />
                </div>
                <div className="col">
                    <Switch>
                        <Route exact path='/overview' render={() => <Overview />} />
                        <Route exact path='/turn' render={() => <Turn /> } />
                        <Route exact path='/setup' render={() => <Setup /> } />
                        <Route exact path='/end' render={() => <End /> } />
                        <Route exact path='/score' render={() => <TableHand /> } />
                        <Redirect to='/overview' />
                    </Switch>
                </div>
            </React.Fragment>
            );
    }

}

export default Body;