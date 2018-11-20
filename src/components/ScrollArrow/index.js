/* --------------------------------------------------------
author: Dval
----------------------------------------------------------*/

import React, { Component } from 'react';
import './ScrollArrow.scss';

class ScrollArrow extends Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll() {
        if (window.scrollY > 20) {
            window.removeEventListener('scroll', this.handleScroll, false);
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, false);
    }

    componentWillUnmount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    render() {
        return (
            <div className={`scroll-arrow img-scroll-arrow blink-smooth`}></div>
        );
    }
}

export default ScrollArrow;
