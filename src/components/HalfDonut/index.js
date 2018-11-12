import React from 'react';
import PropTypes from 'prop-types';
import './HalfDonut.scss';

const Donut = ({ width = 124, height = 124, borderWidth = 12, borderColor = 'black' }) =>
    <div className="half_donut" style={{width, height, borderWidth, borderColor}}></div>;

Donut.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    borderWidth: PropTypes.number,
    borderColor: PropTypes.string
};

export default Donut;
