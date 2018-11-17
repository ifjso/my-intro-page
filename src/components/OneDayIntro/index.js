/* --------------------------------------------------------
author: Dval
----------------------------------------------------------*/

import React from 'react';
import CoinBox, { CoinBoxType } from '../CoinBox';
import './OneDayIntro.scss';

const OneDayIntro = () => {
    const boxAosOpts = {
        'data-aos-anchor-placement': 'top-bottom',
        'data-aos': 'one-day-intro-box-slide-down',
        'data-aos-delay': 1800
    };

    return (
        <div className="one-day-intro">
            <div className="one-day-intro-box" id="one-day-intro-box" {...boxAosOpts} />

            <div className="wrap-coin" style={{top: 46}}>
                <CoinBox calcTop={calcTop(5)}
                    useBoxAos={false}
                    useOuterCoinAos={true}
                    outerCoinAosType="coin-slide-right"
                />
                <CoinBox count={4}
                    calcTop={calcTop(4)}
                    boxAosType="coin-box-slide-down"
                    boxAosDelay={1000}
                    useInnerCoinAos={true}
                    calcInnerCoinAosDelay={calcDelay(3)}
                />
                <CoinBox type={CoinBoxType.COIN_BOX_RIGHT}
                    count={5}
                    calcTop={calcTop(5)}
                    boxAosDelay={1000}
                />
            </div>

            <div className="wrap-coin" style={{top: 108}}>
                <CoinBox type={CoinBoxType.COIN_BOX_RIGHT}
                    calcTop={calcTop(5)}
                    useBoxAos={false}
                    useOuterCoinAos={true}
                    useInnerCoinAos={true}
                    outerCoinAosDelay={3700}
                    calcInnerCoinAosDelay={calcDelay(6, bottomCoinBoxAosDelayOffset)}
                    innerCoinAosDuration={300}
                />
                <CoinBox count={5}
                    calcTop={calcTop(5)} 
                    boxAosDelay={3700}
                    useInnerCoinAos={true}
                    calcInnerCoinAosDelay={calcDelay(4, bottomCoinBoxAosDelayOffset)}
                />
                <CoinBox type={CoinBoxType.COIN_BOX_RIGHT}
                    count={4}
                    calcTop={calcTop(4)}
                    boxAosType="coin-box-slide-down"
                    boxAosDelay={3700}
                />
            </div>
        </div>
    );
};

const calcTop = n => i => 17 * (n - i);
const calcDelay = (n, d = 0) => i => 200 * (n - i) + d;
const bottomCoinBoxAosDelayOffset = 2500;

export default OneDayIntro;
