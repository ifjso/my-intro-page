/* --------------------------------------------------------
author: Dval
----------------------------------------------------------*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './FixedScrollZone.scss';

class FixedScrollZone extends Component {
    constructor(props) {
        super(props);
        this.state = { visible: false };
        this.handleScroll = this.handleScroll.bind(this);        
    }

    handleScroll() {
        if (window.scrollY > 250) {
            this.setState({ visible: true });
            window.removeEventListener('scroll', this.handleScroll);
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, false);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.visible !== nextState.visible;
    }

    render() {
        const height = this.props.height;
        const bottom = this.state.visible ? 0 : -this.props.height;

        return (
            <div className="fixed-scroll-zone" style={{height, bottom}}>
                {this.props.children}
            </div>
        );
    }
}

FixedScrollZone.propTypes = {
    height: PropTypes.number,
    children: PropTypes.array
};

export default FixedScrollZone;
