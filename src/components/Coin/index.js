/* --------------------------------------------------------
author: Dval
----------------------------------------------------------*/

import React from 'react';
import PropTypes from 'prop-types';
import './Coin.scss';

const Coin = ({ top = 0, outCoinAos = { delay: 1000, duration: 300 }, inCoinAos = { delay: 0, duration: 50 } }) =>
    <div className="coin"
        style={{top}}
        data-aos={outCoinAos.type}
        data-aos-anchor="#one-day-intro-box"
        data-aos-anchor-placement="top-bottom"
        data-aos-delay={outCoinAos.delay || 1000}
        data-aos-duration={outCoinAos.duration || 300}>

        <div className="coin-white"
            data-aos={inCoinAos.whiteType}
            data-aos-anchor="#one-day-intro-box"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay={inCoinAos.delay || 0}
            data-aos-duration={inCoinAos.duration || 50} />

        <div className="coin-orange"
            data-aos={inCoinAos.orangeType}
            data-aos-anchor="#one-day-intro-box"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay={inCoinAos.delay || 0}
            data-aos-duration={inCoinAos.duration || 50} />
    </div>;

Coin.propTypes = {
    type: PropTypes.string,
    top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    outCoinAos: PropTypes.shape({
        type: PropTypes.string,
        delay: PropTypes.number,
        duration: PropTypes.number
    }),
    inCoinAos: PropTypes.shape({
        whiteType: PropTypes.string,
        orangeType: PropTypes.string,
        delay: PropTypes.number,
        duration: PropTypes.number
    })
}

export default Coin;
