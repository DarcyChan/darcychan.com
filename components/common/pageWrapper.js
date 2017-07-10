import React from 'react';

import { PageTransition } from 'components/common';
import { combineClassNames } from 'utils';

import 'scss/page.scss';

export default class PageContent extends React.Component {
    render() {
        const { className, children, ...props } = this.props;
        return (
            <PageTransition>
                <section
                    className={combineClassNames('page-wrapper', className)}
                    {...props}
                >
                    {children}
                </section>
            </PageTransition>
        );
    }
}
