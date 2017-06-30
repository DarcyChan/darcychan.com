import React from 'react';

import { combineClassNames } from 'utils';

export default class PageLead extends React.Component {
    render() {
        const { className, children, ...props } = this.props;
        return (
            <p className={combineClassNames('page-lead', className)} {...props}>
                {children}
            </p>
        )
    }
}
