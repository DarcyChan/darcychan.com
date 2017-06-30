import React from 'react';

import { combineClassNames } from 'utils';

export default class SmallLabel extends React.Component {
    render() {
        const { className, children, ...props } = this.props;
        return (
            <span className={combineClassNames('small-label', className)} {...props}>
                {children}
            </span>
        )
    }
}
