import React from 'react';

import { getArtworksFromRoute } from 'utils';
import { PageWrapper, PageJumbotron } from 'components/page';
import { PreviewList } from 'components/preview';

/* eslint-disable quotes */
exports.data = {
    id: 1,
    path: `/designs/`,
    category: `design`,
    showInMenu: true,
    title: `Designs`,
    description: `Some miscillaneous and explorational designs I have created, whether for clients or personal exercise.`,
    keywords: `Designs`
};
/* eslint-enable quotes */

export default class Designs extends React.Component {
    render() {
        const route = this.props.route;
        const page = route.page.data;
        const artworks = getArtworksFromRoute(route, 'design');
        return (
            <PageWrapper>
                <PageJumbotron
                    title="Designs"
                    description="Some miscillaneous and explorational designs I have created, whether for clients or personal exercise."
                />
                <PreviewList page={page} artworks={artworks} />
            </PageWrapper>
        );
    }
}
