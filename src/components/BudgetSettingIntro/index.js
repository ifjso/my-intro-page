/* --------------------------------------------------------
author: Dval
----------------------------------------------------------*/

import React from 'react';
import BudgetSettingPhone from '../BudgetSettingPhone';
import './BudgetSettingIntro.scss';

const BudgetSettingIntro = () =>
    <div className="budget-setting-intro">
        {/* <p style={{position:'absolute', top: 1492, left: 119}}>내 지난 소비를 참고해</p> */}
        <p className="align-center">
            내 지난 소비를 참고해<br/>
            <strong>한달</strong> 또는 <strong>하루 예산</strong>을 정하고,
        </p>
        <BudgetSettingPhone />
    </div>;

export default BudgetSettingIntro;
