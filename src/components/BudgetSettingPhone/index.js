/* --------------------------------------------------------
author: Dval
----------------------------------------------------------*/

import React from 'react';
import BudgetSettingText, { BudgetSettingTextType as TextType } from '../BudgetSettingText';
import './BudgetSettingPhone.scss';

const BudgetSettingPhone = () =>
    <div className="wrap-budget-setting-phone">
        <div className="img-budget-setting-phone">
            <BudgetSettingText text="2018년 9월 12일" />
            <BudgetSettingText text="2018년 9월 25일" type={TextType.LARGE} opacity={0} />
            <BudgetSettingText text="예산 종료일 2018년 10월 11일" type={TextType.SMALL} top={120} />
            <BudgetSettingText text="예산 종료일 2018년 10월 24일" type={TextType.SMALL} top={120} opacity={0} />
            <BudgetSettingText text="1,456,000원" top={155} />
            <BudgetSettingText text="1,500,000원" top={155} type={TextType.LARGE} opacity={0} />
            <BudgetSettingText text="지난 소비 기준 한달 평균 예산" type={TextType.SMALL} top={182} />
            {/* <div className="img-budget-setting-average" style={{position: "absolute", top:178, right:32}}></div> */}
            <BudgetSettingText text="48,533원" top={216} />
            <BudgetSettingText text="50,000원" top={216} type={TextType.LARGE} opacity={0} />
        </div>
    </div>;
    
    
export default BudgetSettingPhone;
