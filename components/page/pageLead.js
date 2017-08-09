/*
    Page Lead Component.
    The lead section of the page, with a description, role, and link of the project if it exists.
*/

// External components
import React from 'react';

// Internal components
import { combineClassNames } from 'utils';

export default class PageLead extends React.Component {
    render() {
        const {
            className,
            tasks,
            tools,
            site,
            children,
            ...props
        } = this.props;
        return (
            <div
                className={combineClassNames(
                    'page-lead page-content',
                    className
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
}
