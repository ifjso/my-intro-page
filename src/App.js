/* --------------------------------------------------------
author: Dval
----------------------------------------------------------*/

import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BudgetCards from './components/BudgetCards';
import './App.scss';

class App extends Component {
    componentDidMount() {
        AOS.init({
            once: true,
            easing: 'linear'
        });
    }

    render() {
        return (
            <div className="App">
                <div style={{height: 700}}></div>
                <BudgetCards />
            </div>
        );
    }
}

export default App;
