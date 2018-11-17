/* --------------------------------------------------------
author: Dval
----------------------------------------------------------*/

import React from 'react';
import PropTypes from 'prop-types';
import './Coin.scss';

const Coin = ({top = 0, outerAos = {delay: 1000, duration: 300}, innerAos = {delay: 0, duration: 50}}) => {
    outerAos.delay = outerAos.delay || 1000;
    outerAos.duration = outerAos.duration || 300;
    innerAos.delay = innerAos.delay || 0;
    innerAos.duration = innerAos.duration || 50;

    return (
        <div className="coin"
            data-aos={outerAos.type}
            data-aos-anchor={commonAnchor}
            data-aos-anchor-placement={commonAnchorPlacement}
            data-aos-delay={outerAos.delay}
            data-aos-duration={outerAos.duration}
            style={{top}}>

            <div className="coin-white"
                data-aos={innerAos.whiteType}
                data-aos-anchor={commonAnchor}
                data-aos-anchor-placement={commonAnchorPlacement}
                data-aos-delay={innerAos.delay}
                data-aos-duration={innerAos.duration} />

            <div className="coin-orange"
                data-aos={innerAos.orangeType}
                data-aos-anchor={commonAnchor}
                data-aos-anchor-placement={commonAnchorPlacement}
                data-aos-delay={innerAos.delay}
                data-aos-duration={innerAos.duration} />
        </div>
    );
}

const commonAnchor = '#one-day-intro-box';
const commonAnchorPlacement = 'top-bottom';

Coin.propTypes = {
    type: PropTypes.string,
    top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    outerAos: PropTypes.shape({
        type: PropTypes.string,
        delay: PropTypes.number,
        duration: PropTypes.number
    }),
    innerAos: PropTypes.shape({
        whiteType: PropTypes.string,
        orangeType: PropTypes.string,
        delay: PropTypes.number,
        duration: PropTypes.number
    })
}

export default Coin;
