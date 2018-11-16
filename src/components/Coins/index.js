/* --------------------------------------------------------
author: Dval
----------------------------------------------------------*/

import React from 'react';
import Coin from '../Coin';
import './Coins.scss';

const Coins = () =>
    <div className="wrap-coin">
        <div className="coin-box coin-box-left">
            <Coin top={coinInterval * 5} outCoinAos={{type: 'coin-slide-right'}} />
        </div>

        <div className="coin-box coin-box-left" data-aos="coin-box-slide-down" data-aos-delay="1000" data-aos-duration="300">
            <Coin top={coinInterval * 4} inCoinAos={{...coinFade, delay: coinFadeDelayInterval * 3}} />
            <Coin top={coinInterval * 3} inCoinAos={{...coinFade, delay: coinFadeDelayInterval * 2}} />
            <Coin top={coinInterval * 2} inCoinAos={{...coinFade, delay: coinFadeDelayInterval}} />
            <Coin top={coinInterval} inCoinAos={coinFade} />
        </div>

        <div className="coin-box coin-box-right" data-aos="coin-box-slide-up" data-aos-delay="1000" data-aos-duration="300">
            <Coin top={coinInterval * 5} />
            <Coin top={coinInterval * 4} />
            <Coin top={coinInterval * 3} />
            <Coin top={coinInterval * 2} />
            <Coin top={coinInterval} />
        </div>
    </div>;

const coinInterval = 17;
const coinFade = {whiteType: 'd-fade-out', orangeType: 'fade'};
const coinFadeDelayInterval = 200;

export default Coins;
