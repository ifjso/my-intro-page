/* --------------------------------------------------------
author: Dval
----------------------------------------------------------*/

import React, { Component } from 'react';
import Helmet from 'react-helmet';
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
        this.state = {
            loaded: false,
            osType: OsType.IOS,
            enableButton: false,
            buttonType: ButtonType.NEXT,
            bodyColor: BodyColor.IOS,
            nextButtonColor: NextButtonColor.IOS
        };

        window.returnWelcomeButtonType = this.returnWelcomeButtonType.bind(this);
        window.osType = OsType.IOS;
    }
    
    componentDidMount() {
        try {
            const userAgent = navigator.userAgent.toLowerCase();
            
            if (/iphone|ipod|ipad/.test(userAgent)) {
                window.webkit.messageHandlers.getButtonType.postMessage("");
                this.setState({...this.state, loaded: true});
            } else if (/android/.test(userAgent)) {
                window.osType = OsType.ANDROID;
                this.setState({
                    loaded: true,
                    osType: OsType.ANDROID,
                    enableButton: true,
                    buttonType: "0", // window.welcomeView.getButtonType(),
                    bodyColor: BodyColor.ANDROID,
                    nextButtonColor: NextButtonColor.ANDROID
                });
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

    // ios > js call method
    returnWelcomeButtonType(buttonType) {
        this.setState({...this.state, enableButton: true, buttonType});
    }

    render() {
        return (
            this.state.loaded ? 
                <div>
                    <Helmet bodyAttributes={{style: `background-color: ${this.state.bodyColor}`}} />

                    <TodayIntro />
                    <SettingIntro />
                    <OneDayIntro />
                    <BudgetIntro />

                    <FixedScrollZone height={56} enable={this.state.enableButton}>
                        {(this.state.buttonType === ButtonType.NEXT) ?
                            <BlockButton
                                text="다음에 하기"
                                width="34%"
                                left={0}
                                backgroundColor={this.state.nextButtonColor}
                                color="white"
                                onClick={() => this.closeWebView(ButtonType.NEXT)}
                            /> : ''
                        }
                        <BlockButton
                            text="시작하기"
                            width={`${(this.state.buttonType === ButtonType.NEXT) ? '66%' : '100%'}`}
                            right={0}
                            backgroundColor="white"
                            color={this.state.bodyColor}
                            onClick={() => this.closeWebView(ButtonType.START)}
                        />
                    </FixedScrollZone>

                    <ScrollArrow />
                </div> : 
                <div>
                    <Helmet bodyAttributes={{style: `background-color: ${this.state.bodyColor}`}} />
                </div>
        );
    }
}

const OsType = { IOS: 'ios', ANDROID: 'android' };
const BodyColor = { IOS: '#ffa059', ANDROID: '#f3b173' };
const NextButtonColor = { IOS: '#ffb37a', ANDROID: '#f6c596' };
const ButtonType = { NEXT: '0', START: '1' };

export default App;
