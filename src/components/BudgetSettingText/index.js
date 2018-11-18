/* --------------------------------------------------------
author: Dval
----------------------------------------------------------*/

import React from 'react';
import PropTypes from 'prop-types';
import './BudgetSettingText.scss';

const BudgetSettingText = ({
    id,
    text,
    type = BudgetSettingTextType.MIDDLE,
    top = 94,
    right = 38
}) => 
    <span className={`budget-setting-text-${type}`} id={id} style={{top, right}}>
        {text}
    </span>;

BudgetSettingText.propTypes = {
    id: PropTypes.string,
    text: PropTypes.string.isRequired,
    type: PropTypes.string,
    top: PropTypes.number,
    right: PropTypes.number
};

export const BudgetSettingTextType = {
    SMALL: 'small',
    MIDDLE: 'middle',
    LARGE: 'large'
};

export default BudgetSettingText;
