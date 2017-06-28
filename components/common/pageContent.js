import React from 'react';

import 'scss/pageTitle.scss';

export default class PageContent extends React.Component {
    render() {
        const {className, children, props} = this.props;
        return(
            <section className={`page-content ${className}`} {...props}>
                {children}
            </section>
        )
    }
}