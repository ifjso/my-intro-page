/* --------------------------------------------------------
author: Dval
----------------------------------------------------------*/

import React from 'react';
import Coins, { sideType } from '../Coins';
import './DoubleCoins.scss';

const DoubleCoins = () =>
    <div className="double-coins">
        <Coins count={1} />
        <Coins count={4} />
        <Coins count={5} side={sideType.SIDE_TYPE_RIGHT} />
    </div>;

export default DoubleCoins;
