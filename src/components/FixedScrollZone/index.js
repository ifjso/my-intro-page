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
    }

    componentDidMount() {
        let timer;

        window.addEventListener('scroll', () => {
            this.setState({ visible: false });

            if (timer) {
                window.clearTimeout(timer);
            }

            timer = setTimeout(() => this.setState({ visible: true }), 500);
        }, false);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll');
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
