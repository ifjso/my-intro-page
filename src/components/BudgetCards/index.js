/* --------------------------------------------------------
author: Dval
----------------------------------------------------------*/

import React from 'react';
import BudgetCard, { BudgetCardType } from '../BudgetCard';
import Donut from '../Donut';
import HalfDonut, { HalfDonutType } from '../HalfDonut';
import './BudgetCards.scss';

const BudgetCards = () => {
    document.addEventListener('aos:in:swipe-card', () => {
        const halfDonuts = document.getElementsByClassName('half-donut');
        Array.prototype.forEach.call(halfDonuts, (halfDonut, i) => {
            halfDonut.classList.add(`half-donut${i}-rotate`);
        });
    });

    return (
        <div className="wrap-budget-cards"
            data-aos="swipe-card"
            data-aos-id="swipe-card"
            data-aos-easing="ease-in-out" 
            data-aos-anchor-placement="top-bottom"                
            data-aos-delay="900"
            data-aos-duration="800">
            <BudgetCard type={BudgetCardType.BUDGET_CARD_0} dateText="2018년 7월 25일 ~ 2018년 8월 24일" />

            <BudgetCard type={BudgetCardType.BUDGET_CARD_1} dateText="2018년 8월 25일 ~ 2018년 9월 24일">
                <Donut style={{...budgetStyle, left: 20}} />
                <HalfDonut type={HalfDonutType.HALF_DONUT_0} style={budgetStyle} />
                <HalfDonut type={HalfDonutType.HALF_DONUT_0} style={{...budgetStyle, left: 20, transform: 'rotate(180deg)'}} />
                <HalfDonut type={HalfDonutType.HALF_DONUT_2} style={budgetStyle} />
            </BudgetCard>

            <BudgetCard type={BudgetCardType.BUDGET_CARD_2} dateText="2018년 9월 25일 ~ 2018년 10월 24일">
                <Donut style={{...budgetStyle, left: 20}} />
                <HalfDonut type={HalfDonutType.HALF_DONUT_1} style={budgetStyle} />
                <HalfDonut type={HalfDonutType.HALF_DONUT_0} style={budgetStyle} />
            </BudgetCard>
        </div>
    );
}

const budgetStyle = { top: 23, left: 83 };

export default BudgetCards;
