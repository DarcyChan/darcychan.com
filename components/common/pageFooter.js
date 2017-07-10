import React from 'react';

import { combineClassNames } from 'utils';

export default class PageFooter extends React.Component {
    render() {
        const { className, children, ...props } = this.props;
        return (
            <div
                className={combineClassNames('page-footer', className)}
                {...props}
            >
                {children}
            </div>
        );
    }
}
