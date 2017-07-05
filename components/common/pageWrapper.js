import React from 'react';

import 'scss/page.scss';
import { PageTransition } from 'components/common';
import { combineClassNames } from 'utils';

export default class PageContent extends React.Component {
    render() {
        const {className, children, props} = this.props;
        return(
            <PageTransition>
                <section className={combineClassNames('page-wrapper', className)} {...props}>
                    {children}
                </section>
            </PageTransition>
        )
    }
}