/* --------------------------------------------------------
author: Dval
----------------------------------------------------------*/

import React from 'react';
import Box from '../Box';
import OneDayCoins from '../OneDayCoins';
import './OneDayIntro.scss';

const OneDayIntro = () => 
    <div className="one-day-intro">
        <Box id="one-day-intro-box" aosDelay={1800} />
        <OneDayCoins />
    </div>;

export default OneDayIntro;
