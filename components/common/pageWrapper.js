import React from 'react';

import { PageTransition } from 'components/common';
import { combineClassNames } from 'utils';

import 'scss/page.scss';

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
