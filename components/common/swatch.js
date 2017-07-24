/*
    Swatch Component.
    A general component to render a swatch and colour value from a hex code.
*/

import React from 'react';

import { combineClassNames } from 'utils';

export default class Swatch extends React.Component {
    render() {
        const { className, color, ...props } = this.props;
        return (
            <div className={combineClassNames('swatch', className)} {...props}>
                <div
                    className="swatch-color"
                    style={{ backgroundColor: color }}
                />
                <div className="swatch-value">
                    {color}
                </div>
            </div>
        );
    }
}
