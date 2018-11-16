/* --------------------------------------------------------
author: Dval
----------------------------------------------------------*/

import React from 'react';
import Coins from '../Coins';
import './OneDayIntro.scss';

const OneDayIntro = () =>
    <div className="one-day-intro">
        <div className="one-day-intro-box"
            id="one-day-intro-box"
            data-aos="one-day-intro-box-slide-down"
            data-aos-anchor-placement="top botoom"
            data-aos-delay="2400" />
        <Coins top={46} />
        <Coins top={108} />
    </div>;

export default OneDayIntro;
