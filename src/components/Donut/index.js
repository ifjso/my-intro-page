/* --------------------------------------------------------
author: Dval
----------------------------------------------------------*/

import React from 'react';
import PropTypes from 'prop-types';
import './Donut.scss';

const Donut = ({top = 23, left = 20}) =>
    <div className="donut img-donut" style={{top, left}}></div>;

Donut.propTypes = {
    top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    left: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default Donut;
