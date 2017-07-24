/*
    Page Wrapper Component.
    The wrapper of the page.
*/

// External components
import React from 'react';

// Internal components
import { PageTransition } from 'components/page';
import { combineClassNames } from 'utils';

export default class PageWrapper extends React.Component {
    render() {
        const { className, children, ...props } = this.props;
        return (
            <PageTransition>
                <div
                    className={combineClassNames('page', className)}
                    {...props}
                >
                    {children}
                </div>
            </PageTransition>
        );
    }
}
