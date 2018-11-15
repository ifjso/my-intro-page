/* --------------------------------------------------------
author: Dval
----------------------------------------------------------*/

import React from 'react';
import PropTypes from 'prop-types';
import './Coin.scss';

const Coin = ({ top = 0 }) =>
    <div className="coin-white" style={{top}}></div>;

Coin.propTypes = {
    top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

export default Coin;
