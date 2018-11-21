/* --------------------------------------------------------
author: Dval
----------------------------------------------------------*/

import React, { Component } from 'react';
import './ScrollArrow.scss';

class ScrollArrow extends Component {
    constructor(props) {
        super(props);
        this.state = { hide: true };
        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll() {
        if (window.scrollY > 50) {
            this.setState({ hide: true });
            window.removeEventListener('scroll', this.handleScroll);
        } else {
            this.setState({ hide: false });
        }
    }

    componentDidMount() {
        this.handleScroll();
        window.addEventListener('scroll', this.handleScroll, false);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        const opacity = this.state.hide ? 0 : 1;

        return (
            <div className="scroll-arrow" style={{opacity}}>
                <div className={`img-scroll-arrow ${opacity ? 'blink-smooth' : ''}`} />
            </div>
        );
    }
}

export default ScrollArrow;
