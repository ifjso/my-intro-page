/* --------------------------------------------------------
author: Dval
----------------------------------------------------------*/

import React from 'react';
import BudgetSettingText, { BudgetSettingTextType as TextType } from '../BudgetSettingText';
import BudgetSettingTextBox from '../BudgetSettingTextBox';
import './BudgetSettingPhone.scss';

const BudgetSettingPhone = () => {

    document.addEventListener('aos:in:a', () => {
        const textBox = document.getElementById('bb');
        const tt = document.getElementById('tt');
        const xx = document.getElementById('xx');

        textBox.classList.add('blink');
        tt.classList.add('blink-back');
        xx.classList.add('blink-orange');
    });

    return (
        <div className="wrap-budget-setting-phone">
            <div className="img-budget-setting-phone" id="aaa">
                <div data-aos-id="a" data-aos-offset="66" data-aos-anchor="#aaa" data-aos="d-fade-out" data-aos-duration="800" data-aos-delay="2000" data-aos-anchor-placement="top-bottom"
                    style={{width:260, height:134, position:"absolute"}}
                >
                    <BudgetSettingText text="2018년 9월 12일" />
                    <BudgetSettingText text="예산 종료일 2018년 10월 11일" type={TextType.SMALL} top={120} />
                </div>
    
                <div data-aos-offset="66" data-aos-anchor="#aaa" data-aos="fade" data-aos-duration="800" data-aos-delay="2000" data-aos-anchor-placement="top-bottom"
                    style={{width:260, height:134, position:"absolute"}}
                >
                    <BudgetSettingText text="2018년 9월 25일" type={TextType.LARGE} top={93}  />
                    <BudgetSettingText text="예산 종료일 2018년 10월 24일" type={TextType.SMALL} top={120} />
                </div>
    
                <div data-aos-offset="66" data-aos-anchor="#aaa" data-aos="d-fade-out" data-aos-duration="800" data-aos-delay="3300" data-aos-anchor-placement="top-bottom"
                    style={{width:260, height:184, position:"absolute", top:134}}
                >
                    <BudgetSettingText id="xx" text="1,456,000원" top={21} />
                    <BudgetSettingText id="tt" text="지난 소비 기준 한달 평균 예산" type={TextType.SMALL} top={48} />
                    <BudgetSettingText text="48,533원" top={82} />
                </div>
    
    
                <div data-aos-offset="66" data-aos-anchor="#aaa" data-aos="fade" data-aos-duration="800" data-aos-delay="3300" data-aos-anchor-placement="top-bottom"
                    style={{width:260, height:184, position:"absolute", top:134}}
                >
                    <BudgetSettingText text="1,500,000원" type={TextType.LARGE} top={20} />
                    <BudgetSettingText text="50,000원" type={TextType.LARGE} top={81} />
                    {/* <div className="img-budget-setting-average" style={{position: "absolute", top:178, right:32}}></div> */}
                </div>
    
                <BudgetSettingTextBox id="bb" text="지난 소비 기준 한달 평균 예산" />
            </div>
        </div>
    );
};
    
export default BudgetSettingPhone;
