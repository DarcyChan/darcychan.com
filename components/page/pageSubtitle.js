/*
    Page Subtitle Component.
    The subtitle of the page.
*/

// External components
import React from 'react';

// Internal components
import { combineClassNames } from 'utils';

export default class PageLead extends React.Component {
    render() {
        const { children, className, props } = this.props;
        return (
            <p className={combineClassNames('page-lead', className)} {...props}>
                {children}
            </p>
        );
    }
}
