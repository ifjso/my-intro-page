/* --------------------------------------------------------
author: Dval
----------------------------------------------------------*/

import React from 'react';
import PropTypes from 'prop-types';
import './SettingTextBundle.scss';

const SettingTextBundle = ({
    type = SettingTextBundleType.TOP,
    useAos = true,
    aosAnchor,
    aosType,
    aosDuration = 800,
    aosDelay = 0,
    children
}) => {
    let aosOpts = {};

    if (useAos) {
        aosOpts = {
            'data-aos': aosType,
            'data-aos-anchor': aosAnchor,
            'data-aos-anchor-placement': 'top-bottom',
            'data-aos-duration': aosDuration,
            'data-aos-delay': aosDelay
        };
    }

    return (
        <div className={`setting-text-bundle-${type}`} {...aosOpts}>
            {children}
        </div>
    );
};

SettingTextBundle.propTypes = {
    type: PropTypes.string,
    useAos: PropTypes.bool,
    aosAnchor: PropTypes.string,
    aosType: PropTypes.string,
    aosDuration: PropTypes.number,
    aosDelay: PropTypes.number,
    children: PropTypes.array.isRequired
};

export const SettingTextBundleType = {
    TOP: 'top',
    BOTTOM: 'bottom'
};

export default SettingTextBundle;
