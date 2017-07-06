import React from 'react';

import { PageTitle, PageSubtitle, PageWrapper } from 'components/common';

exports.data = {
    path: `/404.html`
};

export default class ErrorPage extends React.Component {
    render() {
        return (
            <PageWrapper>
                <PageTitle>
                    Page Not Found
                </PageTitle>
                <PageSubtitle>Sorry, the page you are looking for does not exist.</PageSubtitle>
            </PageWrapper>
        );
    }
}