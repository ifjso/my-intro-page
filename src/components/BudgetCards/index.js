import React from 'react';
import BudgetCard, { budgetCardType } from '../BudgetCard';
import Donut from '../Donut';
import HalfDonut, { halfDonutType, halfDonutAnimType } from '../HalfDonut';

const BudgetCards = () =>
    <div style={{position: "relative", height: 172, width: 780}}>
        <BudgetCard type={budgetCardType.BUDGET_CARD_1} />
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
    </div>

export default BudgetCards;
