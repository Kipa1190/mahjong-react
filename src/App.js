import React, { Component } from 'react';
import Header from './components/HeaderComponent';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Body from './components/BodyComponent';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Header />
                    <Body/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
