/* --------------------------------------------------------
author: Dval
----------------------------------------------------------*/

import React from 'react';
import SettingText, { SettingTextType as TextType } from '../SettingText';
import SettingTextStamp from '../SettingTextStamp';
import './SettingPhone.scss';

const SettingPhone = () => {

    document.addEventListener('aos:in:aaa', () => {
        const textBox = document.getElementById('bb');
        const tt = document.getElementById('tt');
        const xx = document.getElementById('xx');

        textBox.classList.add('blink');
        tt.classList.add('blink-back');
        xx.classList.add('blink-orange');
    });

    return (
        <div className="wrap-setting-phone" id="aaa" data-aos="fade-up" data-aos-id="aaa" data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-anchor-placement="top-bottom">
            <div className="img-setting-phone">
                <div data-aos-anchor="#aaa" data-aos="d-fade-out" data-aos-duration="800" data-aos-delay="2500" data-aos-anchor-placement="top-bottom"
                    style={{width:260, height:134, position:"absolute"}}
                >
                    <SettingText text="2018년 9월 12일" />
                    <SettingText text="예산 종료일 2018년 10월 11일" type={TextType.SMALL} top={120} />
                </div>
    
                <div data-aos-anchor="#aaa" data-aos="fade" data-aos-duration="800" data-aos-delay="2500" data-aos-anchor-placement="top-bottom"
                    style={{width:260, height:134, position:"absolute"}}
                >
                    <SettingText text="2018년 9월 25일" type={TextType.LARGE} top={93}  />
                    <SettingText text="예산 종료일 2018년 10월 24일" type={TextType.SMALL} top={120} />
                </div>
    
                <div data-aos-anchor="#aaa" data-aos="d-fade-out" data-aos-duration="800" data-aos-delay="3700" data-aos-anchor-placement="top-bottom"
                    style={{width:260, height:184, position:"absolute", top:134}}
                >
                    <SettingText id="xx" text="1,456,000원" top={21} />
                    <SettingText id="tt" text="지난 소비 기준 한달 평균 예산" type={TextType.SMALL} top={48} />
                    <SettingText text="48,533원" top={82} />
                </div>
    
    
                <div data-aos-anchor="#aaa" data-aos="fade" data-aos-duration="800" data-aos-delay="3700" data-aos-anchor-placement="top-bottom"
                    style={{width:260, height:184, position:"absolute", top:134}}
                >
                    <SettingText text="1,500,000원" type={TextType.LARGE} top={20} />
                    <SettingText text="50,000원" type={TextType.LARGE} top={81} />
                </div>
    
                <SettingTextStamp id="bb" text="지난 소비 기준 한달 평균 예산" />
            </div>
        </div>
    );
};
    
export default SettingPhone;
