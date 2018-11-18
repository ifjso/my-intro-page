/* --------------------------------------------------------
author: Dval
----------------------------------------------------------*/

import React from 'react';
import PropTypes from 'prop-types';
import './SettingText.scss';

const SettingText = ({
    id,
    text,
    type = SettingTextType.MIDDLE,
    top = 94,
    right = 38
}) => 
    <span className={`setting-text-${type}`} id={id} style={{top, right}}>
        {text}
    </span>;

SettingText.propTypes = {
    id: PropTypes.string,
    text: PropTypes.string.isRequired,
    type: PropTypes.string,
    top: PropTypes.number,
    right: PropTypes.number
};

export const SettingTextType = {
    SMALL: 'small',
    MIDDLE: 'middle',
    LARGE: 'large'
};

export default SettingText;
