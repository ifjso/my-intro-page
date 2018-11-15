/* --------------------------------------------------------
author: Dval
----------------------------------------------------------*/

import React from 'react';
import BudgetCards from '../BudgetCards';
import './BudgetIntro.scss';

const BudgetIntro = () =>
    <div className="budget-intro">
        <p className="align-center">
            현명한 소비 습관으로<br/>
            더 알뜰해진 <strong>한 달간의 변화</strong>를<br/>
            직접 확인해보세요!
        </p>
        <BudgetCards />
    </div>;

export default BudgetIntro;
