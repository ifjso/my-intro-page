import React from 'react';
import BudgetCard, { budgetCardType } from '../BudgetCard';
import Donut from '../Donut';
import HalfDonut, { halfDonutType, halfDonutAnimType } from '../HalfDonut';

// position: absolute height: 172 width: 546 left: 50% margin-left: -273
// left 75%
// left 50% margin-left -125px
// left -20%

const BudgetCards = () =>
    <div style={{position: "absolute", height: 172, width: 546, left: '50%', marginLeft: -273}}>
        <BudgetCard type={budgetCardType.BUDGET_CARD_0}>
            <Donut style={{top: 27, left: 24}}/>
            <HalfDonut 
                type={halfDonutType.HALF_DONUT_1} 
                aos={{type: halfDonutAnimType.ROTATE}}
                style={{top: 28, left: 84}}
            />
            <HalfDonut
                type={halfDonutType.HALF_DONUT_0}
                aos={{type: halfDonutAnimType.ROTATE_OUT_BACK}}
                style={{top: 24, left: 84}}
            />
        </BudgetCard>
        <BudgetCard type={budgetCardType.BUDGET_CARD_1}>
            <Donut style={{top: 27, left: 24}}/>
            <HalfDonut
                type={halfDonutType.HALF_DONUT_0}
                aos={{type: halfDonutAnimType.ROTATE}}
                style={{top: 24, left: 84}}
            />
            <HalfDonut
                type={halfDonutType.HALF_DONUT_0}
                aos={{type: halfDonutAnimType.ROTATE_DELAY0}}
                style={{top: 24, left: 24, transform: 'rotate(180deg)'}}
            />
            <HalfDonut 
                type={halfDonutType.HALF_DONUT_2} 
                aos={{type: halfDonutAnimType.ROTATE_DELAY1}}
                style={{top: 23, left: 84}}
            />
        </BudgetCard>
        <BudgetCard type={budgetCardType.BUDGET_CARD_1} />
    </div>

export default BudgetCards;
