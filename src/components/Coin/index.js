/* --------------------------------------------------------
author: Dval
----------------------------------------------------------*/

import React from 'react';
import PropTypes from 'prop-types';
import './Coin.scss';

const Coin = ({ type = CoinType.COIN_LEFT, top = 0 }) =>
    <div className={`coin coin-${type}`} style={{top}}>
        <div className="coin-orange" />
        <div className="coin-white" />
    </div>;

Coin.propTypes = {
    type: PropTypes.string,
    top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

export const CoinType = {
    COIN_LEFT: 'left',
    COIN_RIGHT: 'right'
}

export default Coin;
