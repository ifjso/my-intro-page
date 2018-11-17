/* --------------------------------------------------------
author: Dval
----------------------------------------------------------*/

import React from 'react';
import PropTypes from 'prop-types';
import Coin from '../Coin';
import './Coins.scss';

const Coins = ({top}) =>
    <div className="wrap-coin" style={{top}}>
        {/* coin box direction type */}
        <div className="coin-box coin-box-left">
            <Coin top={coinInterval * 5} outerAos={{type: 'coin-slide-right'}} />
        </div>

        {/* coinFadeDelayOffset */}
        {/* height by type */}
        {/* aos(delay, type) by type */}
        <div className="coin-box coin-box-left"
            data-aos="coin-box-slide-down"
            data-aos-anchor="#one-day-intro-box"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="1000"
            data-aos-duration="300">
            <Coin top={coinInterval * 4} innerAos={{...coinFade, delay: coinFadeDelayInterval * 3}} />
            <Coin top={coinInterval * 3} innerAos={{...coinFade, delay: coinFadeDelayInterval * 2}} />
            <Coin top={coinInterval * 2} innerAos={{...coinFade, delay: coinFadeDelayInterval}} />
            <Coin top={coinInterval} innerAos={coinFade} />
        </div>

        <div className="coin-box coin-box-right"
            data-aos="coin-box-slide-up"
            data-aos-anchor="#one-day-intro-box"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="1000"
            data-aos-duration="300">
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

Coins.propTypes = {
    top: PropTypes.number
}

export default Coins;
