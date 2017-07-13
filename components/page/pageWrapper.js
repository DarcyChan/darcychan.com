import React from 'react';

import { PageTransition } from 'components/page';
import { combineClassNames } from 'utils';

export default class PageContent extends React.Component {
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
