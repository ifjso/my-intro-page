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
import './App.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {osType: OsType.IOS, enableButton: false, buttonType: ButtonType.NEXT};
        window.returnWelcomeButtonType = this.returnWelcomeButtonType.bind(this);
    }

    componentDidMount() {
        try {
            const userAgent = navigator.userAgent.toLowerCase();

            if (/iphone|ipod|ipad/.test(userAgent)) {
                window.webkit.messageHandlers.getButtonType.postMessage("");
            } else if (/android/.test(userAgent)) {
                this.setState({osType: OsType.ANDROID, enableButton: true, buttonType: window.welcomeView.getButtonType()});
            }
        } catch (e) {
            console.error('Native function call failed.');
        }

        AOS.init({ once: true, easing: 'linear' });
    }

    closeWebView(buttonType) {
        const osType = this.state.osType;
        
        try {
            (osType === OsType.IOS) ?
                window.webkit.messageHandlers.close.postMessage(buttonType) :
                window.welcomeView.close(buttonType);
        } catch(e) {
            console.error('Native function call failed.');
        }                
    }

    returnWelcomeButtonType(buttonType) {
        this.setState({...this.state, enableButton: true, buttonType});
    }

    render() {
        return (
            <div className="App">
                <TodayIntro />
                <SettingIntro />
                <OneDayIntro />
                <BudgetIntro />
                {this.state.enableButton ? 
                    <FixedScrollZone height={56}>
                        {(this.state.buttonType === ButtonType.NEXT) ?
                            <BlockButton
                                text="다음에 하기"
                                width="34%"
                                left={0}
                                backgroundColor="#ffb37a"
                                color="white"
                                onClick={() => this.closeWebView(ButtonType.NEXT)}/> : ''
                        }
                        <BlockButton
                            text="시작하기"
                            width={`${(this.state.buttonType === ButtonType.NEXT) ? '66%' : '100%'}`}
                            right={0}
                            backgroundColor="white"
                            color="#ffa059"
                            onClick={() => this.closeWebView(ButtonType.START)}
                        />
                    </FixedScrollZone> : ''
                }
                <ScrollArrow />
            </div>
        );
    }
}

const OsType = { IOS: 'ios', ANDROID: 'android' };
const ButtonType = { NEXT: '0', START: '1' };

export default App;
