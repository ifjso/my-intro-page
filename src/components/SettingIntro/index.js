/* --------------------------------------------------------
author: Dval
----------------------------------------------------------*/

import React from 'react';
import SettingPhone from '../SettingPhone';
import './SettingIntro.scss';

const SettingIntro = () =>
    <div className="setting-intro">
        <p className="align-center">
            내 지난 소비를 참고해<br/>
            <strong>한달</strong> 또는 <strong>하루 예산</strong>을 정하고,
        </p>
        <SettingPhone />
    </div>;

export default SettingIntro;
