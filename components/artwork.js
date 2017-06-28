import React from 'react';

import { PageTitle, PageContent } from 'components/common';

export default class Artwork extends React.Component {
    render() {
        const { data, children, ...props } = this.props;
        return (
            <PageContent className="content-set">
                <PageTitle>
                    <span className="page-title-label">
                        {data.category}
                    </span>
                    {data.title}
                </PageTitle>
                {children}
            </PageContent>
        )
    }
}