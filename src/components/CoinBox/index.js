/* --------------------------------------------------------
author: Dval
----------------------------------------------------------*/

import React from 'react';
import PropTypes from 'prop-types';
import Coin from '../Coin';
import CoinBoxTitle from '../CoinBoxTitle';
import './CoinBox.scss';

const CoinBox = ({
    type = CoinBoxType.COIN_BOX_LEFT,
    title,
    count = 1,
    calcTop = () => 0,
    useBoxAos = true,
    boxAosType = 'coin-box-slide-up',
    boxAosDelay = 0,
    useOuterCoinAos = false,
    useInnerCoinAos = false,
    outerCoinAosType = 'coin-slide-left',
    outerCoinAosDelay = 1200,
    calcInnerCoinAosDelay = () => 0,
    innerCoinAosDuration = 50
}) => {
    let boxAosOpts = {};
    
    if (useBoxAos) {
        boxAosOpts = {
            'data-aos': boxAosType,
            'data-aos-delay': boxAosDelay,
            'data-aos-anchor-placement': 'bottom-bottom',
            'data-aos-anchor': '#one-day-intro-box',
            'data-aos-duration': 300
        };
    }
    
    let coinBoxTitle;

    if (title) {
        coinBoxTitle = <CoinBoxTitle text={title} />;
    }

    return (
        <div className={`coin-box coin-box-${type}`}>
            <div className="wrap-coin" {...boxAosOpts}>
                {[...Array(count)].map((n, i) =>
                    <Coin key={i} 
                        top={calcTop(i)}
                        useOuterAos = {useOuterCoinAos}
                        useInnerAos = {useInnerCoinAos}
                        outerAosType = {outerCoinAosType}
                        outerAosDelay = {outerCoinAosDelay}
                        innerAosDelay = {calcInnerCoinAosDelay(i)}
                        innerAosDuration = {innerCoinAosDuration}
                    />
                )}
            </div>
            {coinBoxTitle}
        </div>
    );
};

CoinBox.propTypes = {
    type: PropTypes.string,
    title: PropTypes.string,
    count: PropTypes.number,
    calcTop: PropTypes.func,
    useBoxAos: PropTypes.bool,
    boxAosType: PropTypes.string,
    boxAosDelay: PropTypes.number,
    useOuterCoinAos: PropTypes.bool,
    useInnerCoinAos: PropTypes.bool,
    outerCoinAosType: PropTypes.string,
    outerCoinAosDelay: PropTypes.number,
    calcInnerCoinAosDelay: PropTypes.func,
    innerCoinAosDuration: PropTypes.number
};

export const CoinBoxType = {
    COIN_BOX_LEFT: 'left',
    COIN_BOX_RIGHT: 'right'
};

export default CoinBox;
