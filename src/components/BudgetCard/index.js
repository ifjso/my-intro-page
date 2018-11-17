/* --------------------------------------------------------
author: Dval
----------------------------------------------------------*/

import React from 'react';
import PropTypes from 'prop-types';
import BudgetDate from '../BudgetDate';
import './BudgetCard.scss';

const BudgetCard = ({type, dateText, children}) =>
    <div className={`budget-card${type}`}>
        <BudgetDate dateText={dateText} />
        {children}
    </div>

BudgetCard.propTypes = {
    type: PropTypes.string.isRequired,
    style: PropTypes.shape({
        top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        left: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    }),
    dateText: PropTypes.string.isRequired,
    children: PropTypes.array
}

export const BudgetCardType = {
    BUDGET_CARD_0: '0',
    BUDGET_CARD_1: '1',
    BUDGET_CARD_2: '2'
};

export default BudgetCard;
