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

        // document.addEventListener('aos:in:graph-2', ({ detail }) => {
        // console.log('animated in', detail);
        // });
    }

    render() {
        return (
            <div className="App">
                <BudgetCards />
            </div>
        );
    }
}

export default App;
