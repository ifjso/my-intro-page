/* --------------------------------------------------------
author: Dval
----------------------------------------------------------*/

import React from 'react';
import PropTypes from 'prop-types';
import './SettingTextStamp.scss';

const SettingTextStamp = ({id, text, top = 178, right = 30}) =>
    <span className="setting-text-stamp hide" id={id} style={{top, right}}>
        {text}
    </span>;

SettingTextStamp.propTypes = {
    id: PropTypes.string,
    text: PropTypes.string.isRequired,
    top: PropTypes.number,
    right: PropTypes.number
};

export default SettingTextStamp;
