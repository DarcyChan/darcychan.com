import React from 'react';
import Helmet from 'react-helmet';

import { getArtworksFromRoute } from 'utils/artwork';
import { config } from 'config';
import { PageContent } from 'components/common';
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
            <PageContent>
                <Helmet title={`${page.title} | ${config.siteTitle}`} />
                <PreviewList page={page} artworks={artworks} />
            </PageContent>
        );
    }
}