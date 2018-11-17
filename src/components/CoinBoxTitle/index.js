/* --------------------------------------------------------
author: Dval
----------------------------------------------------------*/

import React from 'react';
import PropTypes from 'prop-types';
import './CoinBoxTitle.scss';

const CoinBoxTitle = ({text}) =>
    <div className="align-center coin-box-title">
        <p>{text}</p>
    </div>;

CoinBoxTitle.propTypes = {
    text: PropTypes.string.isRequired
};

export default CoinBoxTitle;
