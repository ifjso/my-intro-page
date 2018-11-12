import React from 'react';
import PropTypes from 'prop-types';
import './HalfDonut.scss';

// https://codepen.io/tutsplus/pen/zBVELP
const HalfDonut = ({style = {}, aos = {}}) =>
    <div className="half_donut"
        data-aos={aos.type}
        data-aos-duration={aos.duration}
        style={style}>
    </div>;

HalfDonut.propTypes = {
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

export const aosType = {
    ROTATE: 'half_donut_rotate'
};

export default HalfDonut;
