/* --------------------------------------------------------
author: Dval
----------------------------------------------------------*/

import React from 'react';
import PropTypes from 'prop-types';
import './HalfDonut.scss';

const HalfDonut = ({type, top = 23, left = 83, transform}) =>
    <div className="wrap-half-donut" style={{top, left, transform}}>
        <div className={`half-donut img-half-donut${type}`} />
    </div>;

HalfDonut.propTypes = {
    type: PropTypes.string.isRequired,
    top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    transform: PropTypes.string
};

export const HalfDonutType = {    
    HALF_DONUT_0: '0',
    HALF_DONUT_1: '1',
    HALF_DONUT_2: '2',
};

export default HalfDonut;
