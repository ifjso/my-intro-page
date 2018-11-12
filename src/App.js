import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.scss';
import HalfDonut from './components/HalfDonut';

class App extends Component {
    componentDidMount() {
        AOS.init({ once: true });

        // document.addEventListener('aos:in:graph-2', ({ detail }) => {
        // console.log('animated in', detail);
        // });
    }

    render() {
        // const graphDuration = 1500;
        
        return (
            <div className="App">
                <div className="wrap_donut">
                    <HalfDonut width={124} height={124} borderWidth={12} borderColor="#EA5800" />

                    {/* <div className="graph2 bg-graph" 
                        data-aos="rotate-graph"
                        data-aos-duration={graphDuration}></div>
                    <div className="graph2 bg-graph" 
                        data-aos="rotate-graph"
                        data-aos-duration={graphDuration}
                        data-aos-delay={graphDuration}></div>
                    <div className="graph2 bg-graph" 
                        data-aos="rotate-graph"
                        data-aos-duration={graphDuration}
                        data-aos-delay={graphDuration * 2}
                        data-aos-id="graph-2"></div> */}
                    {/* <div className="jelly" data-aos="donut"></div> */}
                    {/* <div className="don" data-aos="don-t"></div> */}
                </div>
            </div>
        );
    }
}

export default App;
