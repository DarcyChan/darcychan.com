import React from 'react';

import { PageTitle, PageLead, PageWrapper } from 'components/page';

/* eslint-disable quotes */
exports.data = {
    path: `/404.html`
};
/* eslint-enable quotes */

export default class ErrorPage extends React.Component {
    render() {
        return (
            <PageWrapper>
                <PageTitle>Page Not Found</PageTitle>
                <PageLead>
                    Sorry, the page you are looking for does not exist.
                </PageLead>
            </PageWrapper>
        );
    }
}
