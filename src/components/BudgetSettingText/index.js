/* --------------------------------------------------------
author: Dval
----------------------------------------------------------*/

import React from 'react';
import PropTypes from 'prop-types';
import './BudgetSettingText.scss';

const BudgetSettingText = ({text, type = BudgetSettingTextType.MIDDLE, top = 94, right = 38, opacity = 1}) =>
    <span className={`budget-setting-text-${type}`} style={{top, right, opacity}}>
        {text}
    </span>;

BudgetSettingText.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string,
    top: PropTypes.number,
    right: PropTypes.number,
    opacity: PropTypes.number
};

export const BudgetSettingTextType = {
    SMALL: 'small',
    MIDDLE: 'middle',
    LARGE: 'large'
};

export default BudgetSettingText;
