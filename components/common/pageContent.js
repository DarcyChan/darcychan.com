import React from 'react';

import 'scss/page.scss';
import { PageTransition } from 'components/common';

export default class PageContent extends React.Component {
    render() {
        const {className, children, props} = this.props;
        return(
            <PageTransition>
                <section className={`page-content ${className}`} {...props}>
                    {children}
                </section>
            </PageTransition>
        )
    }
}