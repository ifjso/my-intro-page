/* --------------------------------------------------------
author: Dval
----------------------------------------------------------*/

import React from 'react';
import Box from '../Box';
import OneDayCoins from '../OneDayCoins';
import './OneDayIntro.scss';

const OneDayIntro = () =>
    <div className="one-day-intro">
        <p className="align-center">
            <strong>덜</strong> 쓰면 늘어나고, <strong>더</strong> 쓰면 줄어드는<br/>
            <strong>하루 예산</strong>을 보며<br/>
            매일 지출을 관리하세요.
        </p>
        <Box id="one-day-intro-box" aosDelay={2000} />
        <OneDayCoins />
    </div>;

export default OneDayIntro;
