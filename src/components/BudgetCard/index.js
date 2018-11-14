/* --------------------------------------------------------
author: Dval
----------------------------------------------------------*/

import React from 'react';
import PropTypes from 'prop-types';
import './BudgetCard.scss';

const BudgetCard = ({type, style = {}, children}) =>
    <div className={`budget-card${type}`} style={style}>
        {children}
    </div>

BudgetCard.propTypes = {
    type: PropTypes.string.isRequired,
    style: PropTypes.shape({
        top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        left: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    }),
    children: PropTypes.array
}

export const budgetCardType = {
    BUDGET_CARD_0: '0',
    BUDGET_CARD_1: '1',
    BUDGET_CARD_2: '2'
};

export default BudgetCard;
