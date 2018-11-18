/* --------------------------------------------------------
author: Dval
----------------------------------------------------------*/

import React from 'react';
import PropTypes from 'prop-types';
import './SettingTextBox.scss';

const SettingTextBox = ({id, text, top = 178, right = 30}) =>
    <span className="setting-text-box hide" id={id} style={{top, right}}>
        {text}
    </span>;

SettingTextBox.propTypes = {
    id: PropTypes.string,
    text: PropTypes.string.isRequired,
    top: PropTypes.number,
    right: PropTypes.number
};

export default SettingTextBox;
