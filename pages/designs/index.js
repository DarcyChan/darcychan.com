import React from 'react';
import Helmet from 'react-helmet';

import { getArtworksFromRoute } from 'utils';
import { config } from 'config';
import {PageContent} from 'components/common';
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
            <PageContent>
                <Helmet title={`${page.title} | ${config.siteTitle}`} />
                <PreviewList page={page} artworks={artworks} />
            </PageContent>
        );
    }
}