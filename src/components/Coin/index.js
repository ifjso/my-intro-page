<<<<<<< HEAD
/* --------------------------------------------------------
author: Dval
----------------------------------------------------------*/

import React from 'react';
import PropTypes from 'prop-types';
import './Coin.scss';

const Coin = ({
    top = 0,
    useOuterAos = true,
    useInnerAos = true,
    outerAosType = 'coin-slide-left',
    outerAosDelay = 1000,
    outerAosDuration = 300,
    innerAosWhiteType = 'd-fade-out',
    innerAosOrangeType = 'fade',
    innerAosDelay = 0,
    innerAosDuration = 50
}) => {
    const commonAosOpts = {
        'data-aos-anchor': '#one-day-intro-box',
        'data-aos-anchor-placement': 'top-bottom'
    };

    let outerAosOpts = {};
    let innerWhiteAosOpts = {};
    let innerOrangeAosOpts = {};

    if (useOuterAos) {
        outerAosOpts = {
            ...commonAosOpts,
            'data-aos': outerAosType,
            'data-aos-delay': outerAosDelay,
            'data-aos-duration': outerAosDuration,
        };
    }

    if (useInnerAos) {
        const innerAosOpts = {
            ...commonAosOpts,
            'data-aos-delay': innerAosDelay,
            'data-aos-duration': innerAosDuration,
        };

        innerWhiteAosOpts = {
            ...innerAosOpts,
            'data-aos': innerAosWhiteType
        };
    
        innerOrangeAosOpts = {
            ...innerAosOpts,
            'data-aos': innerAosOrangeType
        };
    }

    return (
        <div className="coin" {...outerAosOpts} style={{top}}>
            <div className="img-coin-white" {...innerWhiteAosOpts} />
            <div className="img-coin-orange" {...innerOrangeAosOpts} />
        </div>
    );
};

Coin.propTypes = {
    top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    useOuterAos: PropTypes.bool,
    useInnerAos: PropTypes.bool,
    outerAosType: PropTypes.string,
    outerAosDelay: PropTypes.number,
    outerAosDuration: PropTypes.number,
    innerAosWhiteType: PropTypes.string,
    innerAosOrangeType: PropTypes.string,
    innerAosDelay: PropTypes.number,
    innerAosDuration: PropTypes.number
};

export default Coin;
||||||| merged common ancestors
=======
/* --------------------------------------------------------
author: Dval
----------------------------------------------------------*/

import React from 'react';
import PropTypes from 'prop-types';
import './Coin.scss';

const Coin = ({
    top = 0,
    useOuterAos = true,
    useInnerAos = true,
    outerAosType = 'coin-slide-left',
    outerAosDelay = 1000,
    outerAosDuration = 300,
    innerAosWhiteType = 'd-fade-out',
    innerAosOrangeType = 'fade',
    innerAosDelay = 0,
    innerAosDuration = 50
}) => {
    const commonAosOpts = {
        'data-aos-offset': 60,
        'data-aos-anchor': '#one-day-intro-box',
        'data-aos-anchor-placement': 'bottom-bottom'
    };

    let outerAosOpts = {};
    let innerWhiteAosOpts = {};
    let innerOrangeAosOpts = {};

    if (useOuterAos) {
        outerAosOpts = {
            ...commonAosOpts,
            'data-aos': outerAosType,
            'data-aos-delay': outerAosDelay,
            'data-aos-duration': outerAosDuration,
        };
    }

    if (useInnerAos) {
        const innerAosOpts = {
            ...commonAosOpts,
            'data-aos-delay': innerAosDelay,
            'data-aos-duration': innerAosDuration,
        };

        innerWhiteAosOpts = {
            ...innerAosOpts,
            'data-aos': innerAosWhiteType
        };
    
        innerOrangeAosOpts = {
            ...innerAosOpts,
            'data-aos': innerAosOrangeType
        };
    }

    return (
        <div className="coin" {...outerAosOpts} style={{top}}>
            <div className="img-coin-white" {...innerWhiteAosOpts} />
            <div className="img-coin-orange" {...innerOrangeAosOpts} />
        </div>
    );
};

Coin.propTypes = {
    top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    useOuterAos: PropTypes.bool,
    useInnerAos: PropTypes.bool,
    outerAosType: PropTypes.string,
    outerAosDelay: PropTypes.number,
    outerAosDuration: PropTypes.number,
    innerAosWhiteType: PropTypes.string,
    innerAosOrangeType: PropTypes.string,
    innerAosDelay: PropTypes.number,
    innerAosDuration: PropTypes.number
};

export default Coin;
>>>>>>> cdffb6465432010e44806591f874f82fa731e8f1
