/*
    Page Title Component.
    The title of the page.
*/

// External components
import React from 'react';

// Internal components
import { combineClassNames } from 'utils';
import { PageTitle, PageLead } from 'components/page';
import { SmallLabel } from 'components/common';

export default class PageJumbotron extends React.Component {
    render() {
        const {
            title,
            label,
            description,
            className,
            children,
            ...props
        } = this.props;
        return (
            <header
                className={combineClassNames('page-jumbotron', className)}
                {...props}
            >
                {label &&
                    <SmallLabel className="page-title-label">
                        {label}
                    </SmallLabel>}
                {title &&
                    <PageTitle>
                        {title}
                    </PageTitle>}
                {description &&
                    <PageLead>
                        {description}
                    </PageLead>}
                {children}
            </header>
        );
    }
}
