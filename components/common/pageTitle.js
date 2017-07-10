import React from 'react';

import { combineClassNames } from 'utils';

export default class PageTitle extends React.Component {
    render() {
        const { children, className, props } = this.props;
        return (
            <h1
                className={combineClassNames('page-title', className)}
                {...props}
            >
                {children}
            </h1>
        );
    }
}
