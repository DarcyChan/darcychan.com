import React from 'react';
import Helmet from 'react-helmet';

import { getArtworksFromRoute } from 'utils';
import { config } from 'config';
import { PageWrapper, PageTitle, PageLead, SmallLabel } from 'components/common';
import PreviewList from 'components/previewList';

// Literal strings required for this to work
exports.data = {
    id: 0,
    path: `/projects/`,
    category: `project`,
    showInMenu: true,
    title: `Projects`
};

export default class Projects extends React.Component {
    render() {
        const route = this.props.route;
        const page = route.page.data;
        const artworks = getArtworksFromRoute(route, 'project');
        return (
            <PageWrapper className="content-set">
                <Helmet title={`${page.title} | ${config.siteTitle}`} />
                <PageTitle>
                    <SmallLabel className="page-title-label">Web Development</SmallLabel>
                    Projects
                </PageTitle>
                <PreviewList page={page} artworks={artworks} />
            </PageWrapper>
        );
    }
}