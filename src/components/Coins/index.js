/* --------------------------------------------------------
author: Dval
----------------------------------------------------------*/

import React from 'react';
import PropTypes from 'prop-types';
import Coin from '../Coin';
import './Coins.scss';

const Coins = ({count = 5, side = sideType.SIDE_TYPE_LEFT}) =>
    <div className={`coins-${side}`}>
        {[...Array(count)].map((coin, i) =>  <Coin key={i} top={offsetTop * (5 - i)} />)}
    </div>;

const offsetTop = 17;

Coins.propTypes = {
    count: PropTypes.number,
    side: PropTypes.string
}

export const sideType = {
    SIDE_TYPE_LEFT: 'left',
    SIDE_TYPE_RIGHT: 'right'
}

export default Coins;
