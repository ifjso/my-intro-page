/* --------------------------------------------------------
author: Dval
----------------------------------------------------------*/

import React from 'react';
import PropTypes from 'prop-types';
import './BlockButton.scss';

const BlockButton = ({text, width, left, right, fontSize = 16, backgroundColor, color, onClick = f=>f}) =>
    <button className="block-button"
        onClick={onClick}
        style={{width, fontSize, backgroundColor, color, left, right}}>
        {text}
    </button>;

BlockButton.propTypes = {
    text: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    left: PropTypes.number,
    right: PropTypes.number,
    fontSize: PropTypes.number,
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
};

export default BlockButton;
