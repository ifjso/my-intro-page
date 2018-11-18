/* --------------------------------------------------------
author: Dval
----------------------------------------------------------*/

import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TodayIntro from './components/TodayIntro';
import SettingIntro from './components/SettingIntro';
import OneDayIntro from './components/OneDayIntro';
import BudgetIntro from './components/BudgetIntro';
import FixedScrollZone from './components/FixedScrollZone';
import BlockButton from './components/BlockButton';
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
                <TodayIntro />
                <SettingIntro />
                <OneDayIntro />
                <BudgetIntro />
                <FixedScrollZone height={56}>
                    <BlockButton text="다음에 하기" width="34%" left={0} backgroundColor="#ffb37a" color="white" />
                    <BlockButton text="시작하기" width="66%" right={0} backgroundColor="white" color="#ffa059" />
                </FixedScrollZone>
            </div>
        );
    }
}

export default App;
