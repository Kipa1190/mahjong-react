import React, { Component } from 'react';
import Header from './components/HeaderComponent';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Body from './components/BodyComponent';
import Overview from './components/OverviewComponent';
import Setup from './components/SetupComponent';
import End from './components/EndComponent';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Header />
                    <Body/>
                    <Overview/>
                    <Setup/>
                    <End/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
