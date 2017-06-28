import React from 'react';

import { PageTitle, PageSubtitle, PageContent } from 'components/common';

export default class ErrorPage extends React.Component {
    render() {
        return (
            <PageContent>
                <PageTitle>
                    Page Not Found
                </PageTitle>
                <PageSubtitle>Sorry, the page you are looking for does not exist.</PageSubtitle>
            </PageContent>
        );
    }
}