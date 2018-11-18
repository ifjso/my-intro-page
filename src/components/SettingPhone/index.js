/* --------------------------------------------------------
author: Dval
----------------------------------------------------------*/

import React from 'react';
import SettingText, { SettingTextType as TextType } from '../SettingText';
import SettingTextStamp from '../SettingTextStamp';
import SettingTextBundle, { SettingTextBundleType as TextBundleType } from '../SettingTextBundle';
import './SettingPhone.scss';

const SettingPhone = () => {
    document.addEventListener('aos:in:setting-phone', () => {
        const addAnimation = (id, className) => document.getElementById(id).classList.add(className);
        addAnimation('average-budget-stamp', 'blink');
        addAnimation('average-budget-text', 'blink-back');
        addAnimation('average-budget-value', 'blink-orange');
    });

    const aosOpts = {
        'data-aos': 'fade-up',
        'data-aos-id': 'setting-phone',
        'data-aos-easing': 'ease-in-sine',
        'data-aos-duration': 600,
        'data-aos-anchor-placement': 'top-bottom'
    };

    return (
        <div className="setting-phone" id="setting-phone" {...aosOpts}>
            <div className="img-setting-phone">
                <SettingTextBundle aosType="d-fade-out" aosAnchor="#setting-phone" aosDelay="2500">
                    <SettingText text="2018년 9월 12일" />
                    <SettingText text="예산 종료일 2018년 10월 11일" type={TextType.SMALL} top={120} />
                </SettingTextBundle>
    
                <SettingTextBundle aosType="fade" aosAnchor="#setting-phone" aosDelay="2500">
                    <SettingText text="2018년 9월 25일" type={TextType.LARGE} top={93}  />
                    <SettingText text="예산 종료일 2018년 10월 24일" type={TextType.SMALL} top={120} />
                </SettingTextBundle>

                <SettingTextBundle type={TextBundleType.BOTTOM} aosType="d-fade-out" aosAnchor="#setting-phone" aosDelay="3700">
                    <SettingText id="average-budget-value" text="1,456,000원" top={21} />
                    <SettingText id="average-budget-text" text="지난 소비 기준 한달 평균 예산" type={TextType.SMALL} top={48} />
                    <SettingText text="48,533원" top={82} />
                </SettingTextBundle>
    
                <SettingTextBundle type={TextBundleType.BOTTOM} aosType="fade" aosAnchor="#setting-phone" aosDelay="3700">
                    <SettingText text="1,500,000원" type={TextType.LARGE} top={20} />
                    <SettingText text="50,000원" type={TextType.LARGE} top={81} />
                </SettingTextBundle>
    
                <SettingTextStamp id="average-budget-stamp" text="지난 소비 기준 한달 평균 예산" />
            </div>
        </div>
    );
};
    
export default SettingPhone;
