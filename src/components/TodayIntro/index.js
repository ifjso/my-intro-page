/* --------------------------------------------------------
author: Dval
----------------------------------------------------------*/

import React from 'react';
import './TodayIntro.scss';

const TodayIntro = () =>
    <div className="today-intro">
        <p className="align-center">
            현명한 소비습관,<br/>
            하루 한번 <strong>{"'오늘'"}</strong> 하세요!
        </p>
        <div className="today-phone">
            <div className="img-today-phone"></div>
        </div>
    </div>;

export default TodayIntro;    
