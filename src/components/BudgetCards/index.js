/* --------------------------------------------------------
author: Dval
----------------------------------------------------------*/

import React, { Component } from 'react';
import BudgetCard, { BudgetCardType } from '../BudgetCard';
import Donut from '../Donut';
import HalfDonut, { HalfDonutType } from '../HalfDonut';
import './BudgetCards.scss';

class BudgetCards extends Component {
    componentDidMount() {
        // 예산 카드 이벤트 시작 시 도넛 애니메이션도 시작
        document.addEventListener('aos:in:swipe-card', () => {
            const halfDonuts = document.getElementsByClassName('half-donut');
            Array.prototype.forEach.call(halfDonuts, (halfDonut, i) => {
                halfDonut.classList.add(`half-donut${i}-rotate`);
            });
        });
    }

    componentWillUnmount() {
        document.removeEventListener('aos:in:swipe-card');
    }

    render() {
        const commonAosOpts = {
            'data-aos': 'swipe-card',
            'data-aos-id': 'swipe-card',
            'data-aos-easing': 'ease-out-quart',
            'data-aos-anchor-placement': 'top-bottom',
            'data-aos-delay': '1200',
            'data-aos-duration': '900'
        };

        return (
            <div className="wrap-budget-cards" {...commonAosOpts} >
                <BudgetCard type={BudgetCardType.BUDGET_CARD_0} dateText="2018년 7월 25일 ~ 2018년 8월 24일" />

                <BudgetCard type={BudgetCardType.BUDGET_CARD_1} dateText="2018년 8월 25일 ~ 2018년 9월 24일">
                    <Donut />
                    <HalfDonut type={HalfDonutType.HALF_DONUT_0} />
                    <HalfDonut type={HalfDonutType.HALF_DONUT_0} left={20} transform="rotate(180deg)" />
                    <HalfDonut type={HalfDonutType.HALF_DONUT_2} />
                </BudgetCard>

                <BudgetCard type={BudgetCardType.BUDGET_CARD_2} dateText="2018년 9월 25일 ~ 2018년 10월 24일">
                    <Donut />
                    <HalfDonut type={HalfDonutType.HALF_DONUT_1} />
                    <HalfDonut type={HalfDonutType.HALF_DONUT_0} />
                </BudgetCard>
            </div>
        );
    }
}

export default BudgetCards;
