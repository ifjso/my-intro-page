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
import ScrollArrow from './components/ScrollArrow';
// import * from './lib/bridge';
import './App.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { osType: OS_TYPE.IOS };
    }

    componentDidMount() {
        const userAgent = navigator.userAgent.toLowerCase();
        
        if ((userAgent.search('iphone') > -1) || (userAgent.search('ipod') > -1) || (userAgent.search('ipad') > -1)) {
            console.log(userAgent);
            console.log(window.webkit);
            console.log(window.webkit.messageHandlers);
            window.webkit.messageHandlers.getButtonType.postMessage("aa");
        } else if (userAgent.search('android')) {
            this.setState({ osType: OS_TYPE.ANDROID });
        }

        AOS.init({
            once: true,
            easing: 'linear'
        });
    }

    returnWelcomeButtonType(type) {
        console.log(type);
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
                <ScrollArrow />
            </div>
        );
    }
}

const OS_TYPE = {
    IOS: 'ios',
    ANDROID: 'android'
};

export default App;
