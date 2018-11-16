/* --------------------------------------------------------
author: Dval
----------------------------------------------------------*/

import React from 'react';
import Coin, { CoinType } from '../Coin';
import './Coins.scss';

const Coins = () =>
    <div className="coins">
        <Coin top={coinInterval * 5} />
        <Coin top={coinInterval * 4} />
        <Coin top={coinInterval * 3} />
        <Coin top={coinInterval * 2} />
        <Coin top={coinInterval} />

        <Coin type={CoinType.COIN_RIGHT} top={coinInterval * 5} />
        <Coin type={CoinType.COIN_RIGHT} top={coinInterval * 4} />
        <Coin type={CoinType.COIN_RIGHT} top={coinInterval * 3} />
        <Coin type={CoinType.COIN_RIGHT} top={coinInterval * 2} />
        <Coin type={CoinType.COIN_RIGHT} top={coinInterval} />
    </div>;

const coinInterval = 17;

export default Coins;
