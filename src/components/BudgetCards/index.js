/* --------------------------------------------------------
author: Dval
----------------------------------------------------------*/

import React from 'react';
import BudgetCard, { budgetCardType } from '../BudgetCard';
import Donut from '../Donut';
import HalfDonut, { halfDonutType } from '../HalfDonut';
import './BudgetCards.scss';

const BudgetCards = () => {
    document.addEventListener('aos:in:swipe-card', () => {
        const halfDonuts = document.getElementsByClassName('half-donut');
        Array.prototype.forEach.call(halfDonuts, (halfDonut, i) => {
            halfDonut.classList.add(`half-donut${i}-rotate`);
        });
    });

    return (
        <div className="intro-budget">
            <div className="wrap-budget-cards"
                data-aos="swipe-card"
                data-aos-id="swipe-card"
                data-aos-easing="ease-in-out" 
                data-aos-anchor-placement="top-bottom"                
                data-aos-delay="900"
                data-aos-duration="800">

                <BudgetCard type={budgetCardType.BUDGET_CARD_0} />

                <BudgetCard type={budgetCardType.BUDGET_CARD_1}>
                    <Donut style={{top: 22, left: 20}}/>
                    <HalfDonut
                        type={halfDonutType.HALF_DONUT_0}
                        style={{top: 24, left: 84}}
                    />
                    <HalfDonut
                        type={halfDonutType.HALF_DONUT_0}
                        style={{top: 24, left: 24, transform: 'rotate(180deg)'}}
                    />
                    <HalfDonut 
                        type={halfDonutType.HALF_DONUT_2} 
                        style={{top: 23, left: 84}}
                    />
                </BudgetCard>

                <BudgetCard type={budgetCardType.BUDGET_CARD_2}>
                    <Donut style={{top: 22, left: 20}}/>
                    <HalfDonut 
                        type={halfDonutType.HALF_DONUT_1} 
                        style={{top: 28, left: 84}}
                    />
                    <HalfDonut
                        type={halfDonutType.HALF_DONUT_0}
                        style={{top: 24, left: 84}}
                    />
                </BudgetCard>
            </div>
        </div>
    );
}

export default BudgetCards;
