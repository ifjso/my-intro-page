/* --------------------------------------------------------
author: Dval
----------------------------------------------------------*/

import React from 'react';
import PropTypes from 'prop-types';
import './BudgetDate.scss';

const BudgetDate = ({ dateText }) =>
    <div className="budget-date">
        <p className="align-center">{dateText}</p>
    </div>;

BudgetDate.propTypes = {
    dateText: PropTypes.string
}

export default BudgetDate;
