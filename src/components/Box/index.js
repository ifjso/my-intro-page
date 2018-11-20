<<<<<<< HEAD
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
        'data-aos-anchor-placement': 'top-bottom',
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
||||||| merged common ancestors
=======
/* --------------------------------------------------------
author: Dval
----------------------------------------------------------*/

import React from 'react';
import PropTypes from 'prop-types';
import './Box.scss';

const Box = ({id, aosType = 'one-day-intro-box-slide-down', aosDelay = 0 }) => {
    const boxAosOpts = {
        'data-aos': aosType,
        'data-aos-offset': 60,
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
>>>>>>> cdffb6465432010e44806591f874f82fa731e8f1
