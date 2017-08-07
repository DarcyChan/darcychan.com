import React from 'react';

import { getArtworksFromRoute } from 'utils';
import { PageWrapper, PageTitle } from 'components/page';
import { SmallLabel } from 'components/common';
import { PreviewList } from 'components/preview';

/* eslint-disable quotes */
exports.data = {
    id: 2,
    path: `/illustrations/`,
    category: `illustration`,
    showInMenu: true,
    title: `Illustrations`,
    description: `A collection of illustrations I have created in my spare time.`,
    keywords: `Illustrations`
};
/* eslint-enable quotes */

export default class Illustrations extends React.Component {
    render() {
        const route = this.props.route;
        const page = route.page.data;
        const artworks = getArtworksFromRoute(route, 'illustration');
        return (
            <PageWrapper className="content-set">
                <PageTitle>
                    <SmallLabel className="page-title-label">Casual</SmallLabel>
                    Illustrations
                </PageTitle>
                <PreviewList page={page} artworks={artworks} />
            </PageWrapper>
        );
    }
}
