import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.scss';
import HalfDonut, { aosType } from './components/HalfDonut';

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
        // const top = 124;
        const duration = 3000;
        const type = aosType.ROTATE;
        const borderColor = '#EEEEEE';  // '#EA5800';

        return (
            <div className="App">
                <div className="wrap_donut">
                    <HalfDonut style={{borderColor}} />
                </div>
                <div className="wrap_donut">
                    <HalfDonut style={{borderColor: '#EA5800', left: '50%'}} aos={{type, duration}} />
                </div>
            </div>
        );
    }
}

export default App;
