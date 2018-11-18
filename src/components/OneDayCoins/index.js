/* --------------------------------------------------------
author: Dval
----------------------------------------------------------*/

import React from 'react';
import CoinBox, { CoinBoxType } from '../CoinBox';
import './OneDayCoins.scss';

const OneDayCoins = () =>
    <div className="one-day-coins">
        <div className="wrap-coin-box">
            <CoinBox calcTop={calcTop(5)}
                useBoxAos={false}
                useOuterCoinAos={true}
                outerCoinAosType="coin-slide-right"
            />
            <CoinBox title="오늘 소비"
                count={4}
                calcTop={calcTop(4)}
                boxAosType="coin-box-slide-down"
                boxAosDelay={1200}
                useInnerCoinAos={true}
                calcInnerCoinAosDelay={calcDelay(3)}
            />
            <CoinBox title="내일 예산"
                type={CoinBoxType.COIN_BOX_RIGHT}
                count={5}
                calcTop={calcTop(5)}
                boxAosDelay={1200}
            />
        </div>

        <div className="wrap-coin-box" style={{top: 24}}>
            <CoinBox type={CoinBoxType.COIN_BOX_RIGHT}
                calcTop={calcTop(5)}
                useBoxAos={false}
                useOuterCoinAos={true}
                useInnerCoinAos={true}
                outerCoinAosDelay={4300}
                calcInnerCoinAosDelay={calcDelay(7, bottomCoinBoxAosDelayOffset)}
                innerCoinAosDuration={300}
            />
            <CoinBox title="오늘 소비"
                count={5}
                calcTop={calcTop(5)} 
                boxAosDelay={4300}
                useInnerCoinAos={true}
                calcInnerCoinAosDelay={calcDelay(4, bottomCoinBoxAosDelayOffset)}
            />
            <CoinBox type={CoinBoxType.COIN_BOX_RIGHT}
                title="내일 예산"
                count={4}
                calcTop={calcTop(4)}
                boxAosType="coin-box-slide-down"
                boxAosDelay={4300}
            />
        </div>
    </div>;

const calcTop = n => i => 17 * (n - i);
const calcDelay = (n, d = 0) => i => 200 * (n - i) + d;
const bottomCoinBoxAosDelayOffset = 2900;

export default OneDayCoins;
