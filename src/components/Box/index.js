/* --------------------------------------------------------
author: Dval
----------------------------------------------------------*/

import React from 'react';
import PropTypes from 'prop-types';
import './Box.scss';

const Box = ({id, aosType = 'one-day-intro-box-slide-down', aosDelay = 0 }) => {
    const boxAosOpts = {
        'data-aos': aosType,        
        'data-aos-delay': aosDelay,
        'data-aos-anchor-placement': 'bottom-bottom',
    };

    return (
        <div className="one-day-intro-box" id={id} {...boxAosOpts} />
    );
};

Box.propTypes = {
    id: PropTypes.string,
    aosType: PropTypes.string,
    aosDelay: PropTypes.number
};

export default Box;
