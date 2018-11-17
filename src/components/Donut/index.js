/* --------------------------------------------------------
author: Dval
----------------------------------------------------------*/

import React from 'react';
import PropTypes from 'prop-types';
import './Donut.scss';

const Donut = ({style = {top: 23, left: 20}}) =>
    <div className="donut" style={style}></div>;

Donut.propTypes = {
    style: PropTypes.shape({
        top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        left: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })
}

export default Donut;
