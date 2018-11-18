/* --------------------------------------------------------
author: Dval
----------------------------------------------------------*/

import React from 'react';
import PropTypes from 'prop-types';
import './BudgetSettingTextBox.scss';

const BudgetSettingTextBox = ({id, text, top = 178, right = 30}) =>
    <span className="budget-setting-text-box hide" id={id} style={{top, right}}>
        {text}
    </span>;

BudgetSettingTextBox.propTypes = {
    id: PropTypes.string,
    text: PropTypes.string.isRequired,
    top: PropTypes.number,
    right: PropTypes.number
};

export default BudgetSettingTextBox;
