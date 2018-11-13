import React from 'react';
import PropTypes from 'prop-types';
import './HalfDonut.scss';

const HalfDonut = ({type, aos = {}, style = {}}) =>
    <div className={`wrap-half-donut${type}`}>
        <div className={`half-donut${type}`}
            data-aos={aos.type}
            data-aos-duration={aos.duration}
            style={style}>
        </div>
    </div>;

HalfDonut.propTypes = {
    type: PropTypes.string.isRequired,
    aos: PropTypes.shape({
        type: PropTypes.string,
        duration: PropTypes.number
    }),
    style: PropTypes.shape({
        top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        transform: PropTypes.string
    })
};

export const halfDonutType = {    
    HALF_DONUT_0: '0',
    HALF_DONUT_1: '1',
    HALF_DONUT_2: '2',
};

export const aosType = {
    ROTATE_OUT_BACK: 'rotate-out-back',
    ROTATE: 'rotate'
};

export default HalfDonut;
