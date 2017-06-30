import React from 'react';
import Helmet from 'react-helmet';

import { getArtworksFromRoute } from 'utils';
import { config } from 'config';
import {PageContent} from 'components/common';
import PreviewList from 'components/previewList';

// Literal strings required for this to work
exports.data = {
    id: 2,
    path: `/illustrations/`,
    category: `illustration`,
    showInMenu: true,
    title: `Illustrations`
};

export default class Illustrations extends React.Component {
    render() {
        const route = this.props.route;
        const page = route.page.data;
        const artworks = getArtworksFromRoute(route, 'illustration');
        return (
            <PageContent>
                <Helmet title={`${page.title} | ${config.siteTitle}`} />
                <PreviewList page={page} artworks={artworks} />
            </PageContent>
        );
    }
}