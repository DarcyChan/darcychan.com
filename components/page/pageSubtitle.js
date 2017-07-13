import React from 'react';

import { combineClassNames } from 'utils';

export default class PageTitle extends React.Component {
    render() {
        const { children, className, props } = this.props;
        return (
            <h2
                className={combineClassNames('page-subtitle', className)}
                {...props}
            >
                {children}
            </h2>
        );
    }
}
