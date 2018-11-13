import React from 'react';
import PropTypes from 'prop-types';
import './HalfDonut.scss';

const HalfDonut = ({type, style = {}, aos = {}}) =>
    <div className={`wrap-half-donut${type}`}>
        <div className={`half-donut${type}`}
            data-aos={aos.type}
            data-aos-duration={aos.duration}
            style={style}>
        </div>
    </div>;

HalfDonut.propTypes = {
    type: PropTypes.string.isRequired,
    style: PropTypes.shape({
        top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        width: PropTypes.number,
        height: PropTypes.number,
        borderWidth: PropTypes.number,
        borderColor: PropTypes.string
    }),
    aos: PropTypes.shape({
        type: PropTypes.string,
        duration: PropTypes.number
    })
};

export const halfDonutType = {
    HALF_DONUT_0: '0',
    HALF_DONUT_1: '1',
    HALF_DONUT_2: '2',
    HALF_DONUT_3: '3',
};

export const aosType = {
    ROTATE_OUT_BACK: 'rotate-out-back'
};

export default HalfDonut;
