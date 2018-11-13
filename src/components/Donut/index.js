/* --------------------------------------------------------
author: Dval
----------------------------------------------------------*/

import React from 'react';
import PropTypes from 'prop-types';
import './Donut.scss';

const Donut = ({ style }) =>
    <div className="donut" style={style}></div>;

Donut.propTypes = {
    style: PropTypes.shape({
        left: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        top: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })
}

export default Donut;
