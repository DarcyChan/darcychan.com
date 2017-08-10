import React from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';

import { PageWrapper, PageJumbotron } from 'components/page';

/* eslint-disable quotes */
exports.data = {
    path: `/404.html`
};
/* eslint-enable quotes */

export default class ErrorPage extends React.Component {
    render() {
        return (
            <PageWrapper>
                <Helmet>
                    <title>{`Page Not Found | ${config.siteTitle}`}</title>
                    <meta
                        name="description"
                        content="Sorry, the page you are looking for does not exist."
                    />
                    <meta name="robots" content="noindex" />
                </Helmet>
                <PageJumbotron
                    title="Page Not Found"
                    description="Sorry, the page you are looking for does not exist."
                />
            </PageWrapper>
        );
    }
}
