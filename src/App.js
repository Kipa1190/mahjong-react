import React, { Component } from 'react';
import Header from './components/HeaderComponent';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Body from './components/BodyComponent';
import Overview from './components/OverviewComponent';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Header />
                    <Body/>
                    <Overview/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
