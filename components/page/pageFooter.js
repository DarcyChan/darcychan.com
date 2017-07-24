/*
    Page Footer Component.
    The footer of the artwork page.
*/

// External components
import React from 'react';

// Internal components
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
