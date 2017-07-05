import React from 'react';
import Helmet from 'react-helmet';

import { getArtworksFromRoute } from 'utils';
import { config } from 'config';
import { PageWrapper, PageTitle, SmallLabel } from 'components/common';
import PreviewList from 'components/previewList';

// Literal strings required for this to work
exports.data = {
    id: 2,
    path: `/designs/`,
    category: `design`,
    showInMenu: true,
    title: `Designs`
};

export default class Designs extends React.Component {
    render() {
        const route = this.props.route;
        const page = route.page.data;
        const artworks = getArtworksFromRoute(route, 'design');
        return (
            <PageWrapper className="content-set">
                <Helmet title={`${page.title} | ${config.siteTitle}`} />
                <PageTitle>
                    <SmallLabel className="page-title-label">Miscillaneous & Explorational</SmallLabel>
                    Designs
                </PageTitle>
                <PreviewList page={page} artworks={artworks} />
            </PageWrapper>
        );
    }
}